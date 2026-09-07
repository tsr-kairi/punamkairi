export interface LiveActivityItem {
  id: string;
  customerName: string;
  location: string;
  serviceOrOffer: string;
  type: 'booking' | 'offer_claim';
  timestamp: number;
  badge: string;
  avatarLetter: string;
}

const STORAGE_KEY = 'pk_live_booking_activities';
const ACTIVITY_UPDATE_EVENT = 'pk_activity_feed_updated';

// Authentic default baseline activities for immediate social proof from Assam & surrounding regions
const defaultInitialActivities: LiveActivityItem[] = [
  {
    id: 'act-1',
    customerName: 'Ananya Deb',
    location: 'Sribhumi / Karimganj',
    serviceOrOffer: 'Royal Sharodiya Bridal Package',
    type: 'offer_claim',
    timestamp: Date.now() - 3 * 60 * 1000, // 3 mins ago
    badge: '🌸 PUJA DEAL CLAIMED',
    avatarLetter: 'A'
  },
  {
    id: 'act-2',
    customerName: 'Sneha Paul',
    location: 'Silchar',
    serviceOrOffer: '24K Gold Foil Glow Facial',
    type: 'booking',
    timestamp: Date.now() - 11 * 60 * 1000, // 11 mins ago
    badge: '✨ APPOINTMENT BOOKED',
    avatarLetter: 'S'
  },
  {
    id: 'act-3',
    customerName: 'Debolina Sen',
    location: 'Lowairpoa Kanmoon Road',
    serviceOrOffer: 'Pre-Puja 24K Gold Facial + Free Threading',
    type: 'offer_claim',
    timestamp: Date.now() - 24 * 60 * 1000, // 24 mins ago
    badge: '🌸 PUJA DEAL CLAIMED',
    avatarLetter: 'D'
  },
  {
    id: 'act-4',
    customerName: 'Mampi Nath',
    location: 'Badarpur',
    serviceOrOffer: 'Signature Royal Bridal Makeup',
    type: 'booking',
    timestamp: Date.now() - 48 * 60 * 1000, // 48 mins ago
    badge: '👑 BRIDAL RESERVED',
    avatarLetter: 'M'
  },
  {
    id: 'act-5',
    customerName: 'Priyanka Das',
    location: 'Hailakandi',
    serviceOrOffer: 'Mahashtami & Navami Night Glam',
    type: 'offer_claim',
    timestamp: Date.now() - 75 * 60 * 1000, // 1.2 hrs ago
    badge: '✨ FESTIVE GLAM',
    avatarLetter: 'P'
  },
  {
    id: 'act-6',
    customerName: 'Riya Bhowmik',
    location: 'Dharmanagar',
    serviceOrOffer: 'Pre-Puja Duo Glow (Mother & Daughter)',
    type: 'offer_claim',
    timestamp: Date.now() - 110 * 60 * 1000, // 1.8 hrs ago
    badge: '👭 DUO GLOW DEAL',
    avatarLetter: 'R'
  },
  {
    id: 'act-7',
    customerName: 'Tanushree Roy',
    location: 'Near Longai Bridge, Lowairpoa',
    serviceOrOffer: 'Bridal High-Definition (HD) Makeup',
    type: 'booking',
    timestamp: Date.now() - 160 * 60 * 1000, // 2.6 hrs ago
    badge: '👑 BRIDAL RESERVED',
    avatarLetter: 'T'
  }
];

export function getLiveActivities(): LiveActivityItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultInitialActivities));
      return defaultInitialActivities;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return defaultInitialActivities;
  } catch {
    return defaultInitialActivities;
  }
}

export function recordBookingActivity(
  customerName: string,
  location: string,
  serviceName: string
): LiveActivityItem {
  const cleanName = customerName.trim() || 'Client';
  const cleanLocation = location.trim() || 'Sribhumi';
  const avatarLetter = cleanName.charAt(0).toUpperCase() || 'P';

  const newActivity: LiveActivityItem = {
    id: `book-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    customerName: cleanName,
    location: cleanLocation,
    serviceOrOffer: serviceName,
    type: 'booking',
    timestamp: Date.now(),
    badge: serviceName.toLowerCase().includes('bridal') ? '👑 BRIDAL RESERVED' : '✨ APPOINTMENT BOOKED',
    avatarLetter
  };

  saveAndDispatchActivity(newActivity);
  return newActivity;
}

export function recordOfferClaimActivity(
  offerTitle: string,
  customerName?: string,
  location?: string
): LiveActivityItem {
  const cleanName = customerName?.trim() || 'Festive Guest';
  const cleanLocation = location?.trim() || 'Sribhumi / Assam';
  const avatarLetter = cleanName.charAt(0).toUpperCase() || '🌸';

  const newActivity: LiveActivityItem = {
    id: `claim-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    customerName: cleanName,
    location: cleanLocation,
    serviceOrOffer: offerTitle,
    type: 'offer_claim',
    timestamp: Date.now(),
    badge: '🌸 PUJA DEAL CLAIMED',
    avatarLetter
  };

  saveAndDispatchActivity(newActivity);
  return newActivity;
}

function saveAndDispatchActivity(item: LiveActivityItem) {
  try {
    const current = getLiveActivities();
    // Keep max 20 latest activities with new one at top
    const updated = [item, ...current.filter((c) => c.id !== item.id)].slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Dispatch global event for instant UI sync across all open tabs/components
    window.dispatchEvent(new CustomEvent(ACTIVITY_UPDATE_EVENT, { detail: item }));
  } catch (err) {
    console.warn('Could not store live activity:', err);
  }
}

export function subscribeToActivityUpdates(callback: (activities: LiveActivityItem[]) => void): () => void {
  const handler = () => {
    callback(getLiveActivities());
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
