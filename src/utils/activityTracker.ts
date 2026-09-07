export interface RealCustomerActivity {
  id: string;
  customerName: string;
  location: string;
  timestamp: number;
}

const STORAGE_KEY = 'pk_real_customer_bookings_v2';
const ACTIVITY_UPDATE_EVENT = 'pk_real_activity_updated';

// Returns ONLY unique real customer submissions (deduplicated by customer name + location)
export function getRealActivities(): RealCustomerActivity[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const valid = parsed.filter(
        (item): item is RealCustomerActivity =>
          Boolean(item && typeof item.customerName === 'string' && item.customerName.trim().length > 0)
      );

      // Deduplicate by customer name and location so 1 customer is counted and shown strictly once
      const seen = new Set<string>();
      const uniqueList: RealCustomerActivity[] = [];
      for (const item of valid) {
        const key = `${item.customerName.trim().toLowerCase()}::${item.location.trim().toLowerCase()}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueList.push(item);
        }
      }
      return uniqueList;
    }
    return [];
  } catch {
    return [];
  }
}

// Exactly matches unique count: 1 customer = 1 count, 2 customers = 2 count
export function getTotalBookingCount(): number {
  return getRealActivities().length;
}

export function recordRealCustomerActivity(
  customerName: string,
  location: string
): RealCustomerActivity | null {
  const cleanName = customerName.trim();
  const cleanLocation = location.trim() || 'Sribhumi, Assam';

  if (!cleanName) return null;

  try {
    const current = getRealActivities();
    
    // Check if customer already exists (case-insensitive)
    const existingIndex = current.findIndex(
      (item) => item.customerName.toLowerCase() === cleanName.toLowerCase()
    );

    let updated: RealCustomerActivity[];
    let entry: RealCustomerActivity;

    if (existingIndex >= 0) {
      // Update existing entry's timestamp instead of creating a duplicate
      entry = {
        ...current[existingIndex],
        location: cleanLocation,
        timestamp: Date.now()
      };
      updated = [entry, ...current.filter((_, idx) => idx !== existingIndex)];
    } else {
      // New unique customer
      entry = {
        id: `book-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        customerName: cleanName,
        location: cleanLocation,
        timestamp: Date.now()
      };
      updated = [entry, ...current].slice(0, 30);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Dispatch global event for instant UI sync
    window.dispatchEvent(new CustomEvent(ACTIVITY_UPDATE_EVENT, { 
      detail: { activity: entry, totalBookings: updated.length } 
    }));

    return entry;
  } catch (err) {
    console.warn('Could not store real activity:', err);
    return null;
  }
}

export function subscribeToRealActivities(
  callback: (activities: RealCustomerActivity[], totalCount: number) => void
): () => void {
  const handler = () => {
    const items = getRealActivities();
    callback(items, items.length);
  };

  window.addEventListener(ACTIVITY_UPDATE_EVENT, handler);
  window.addEventListener('storage', handler);

  return () => {
    window.removeEventListener(ACTIVITY_UPDATE_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
}

export function formatTimeAgo(timestamp: number): string {
  const elapsedMs = Math.max(0, Date.now() - timestamp);
  const minutes = Math.floor(elapsedMs / (1000 * 60));
  if (minutes < 1) return 'Just now';
  if (minutes === 1) return '1m ago';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours === 1) return '1h ago';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
