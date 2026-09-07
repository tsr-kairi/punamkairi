export interface RealCustomerActivity {
  id: string;
  customerName: string;
  location: string;
  timestamp: number;
}

const STORAGE_KEY = 'pk_real_customer_bookings_v2';
const TOTAL_COUNT_KEY = 'pk_total_booking_count_v2';
const ACTIVITY_UPDATE_EVENT = 'pk_real_activity_updated';
const BASELINE_TOTAL_BOOKINGS = 158;

export function getTotalBookingCount(): number {
  try {
    const raw = localStorage.getItem(TOTAL_COUNT_KEY);
    if (!raw) {
      localStorage.setItem(TOTAL_COUNT_KEY, String(BASELINE_TOTAL_BOOKINGS));
      return BASELINE_TOTAL_BOOKINGS;
    }
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) ? BASELINE_TOTAL_BOOKINGS : parsed;
  } catch {
    return BASELINE_TOTAL_BOOKINGS;
  }
}

export function incrementTotalBookingCount(): number {
  try {
    const current = getTotalBookingCount();
    const updated = current + 1;
    localStorage.setItem(TOTAL_COUNT_KEY, String(updated));
    return updated;
  } catch {
    return BASELINE_TOTAL_BOOKINGS + 1;
  }
}

// Empty by default - ONLY real customer submissions will be shown
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

export function recordRealCustomerActivity(
  customerName: string,
  location: string
): RealCustomerActivity | null {
  const cleanName = customerName.trim();
  const cleanLocation = location.trim();

  if (!cleanName) return null;

  const newActivity: RealCustomerActivity = {
    id: `rec-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    customerName: cleanName,
    location: cleanLocation || 'Sribhumi / Assam',
    timestamp: Date.now()
  };

  try {
    const current = getRealActivities();
    // Keep max 25 latest real activities with new one at top
    const updated = [newActivity, ...current.filter((c) => c.id !== newActivity.id)].slice(0, 25);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Increment total bookings counter
    const newTotal = incrementTotalBookingCount();

    // Dispatch global event for instant UI sync across all open tabs/components
    window.dispatchEvent(new CustomEvent(ACTIVITY_UPDATE_EVENT, { 
      detail: { activity: newActivity, totalBookings: newTotal } 
    }));
  } catch (err) {
    console.warn('Could not store real activity:', err);
  }

  return newActivity;
}

export function subscribeToRealActivities(
  callback: (activities: RealCustomerActivity[]) => void
): () => void {
  const handler = () => {
    callback(getRealActivities());
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
