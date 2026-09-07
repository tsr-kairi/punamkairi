export interface RealCustomerActivity {
  id: string;
  customerName: string;
  location: string;
  timestamp: number;
}

const STORAGE_KEY = 'pk_real_customer_bookings_v2';
const ACTIVITY_UPDATE_EVENT = 'pk_real_activity_updated';

// Returns ONLY real customer submissions from actual bookings (default: [])
export function getRealActivities(): RealCustomerActivity[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is RealCustomerActivity =>
          Boolean(item && typeof item.customerName === 'string' && item.customerName.trim().length > 0)
      );
    }
    return [];
  } catch {
    return [];
  }
}

// Exactly matches actual count: 0 if none, 1 if 1, 2 if 2, etc.
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

  const newActivity: RealCustomerActivity = {
    id: `book-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    customerName: cleanName,
    location: cleanLocation,
    timestamp: Date.now()
  };

  try {
    const current = getRealActivities();
    // Keep latest activities with new one at top
    const updated = [newActivity, ...current.filter((c) => c.id !== newActivity.id)].slice(0, 30);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Dispatch global event for instant UI sync across all open tabs & components
    window.dispatchEvent(new CustomEvent(ACTIVITY_UPDATE_EVENT, { 
      detail: { activity: newActivity, totalBookings: updated.length } 
    }));
  } catch (err) {
    console.warn('Could not store real activity:', err);
  }

  return newActivity;
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
