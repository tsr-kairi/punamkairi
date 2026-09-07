import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, CheckCircle2, Flame } from 'lucide-react';
import { getLiveActivities, subscribeToActivityUpdates, formatTimeAgo, type LiveActivityItem } from '../../utils/activityTracker';

interface LiveActivityTimelineProps {
  onOpenBooking?: (serviceName?: string) => void;
  onOpenOffersModal?: () => void;
}

export const LiveActivityTimeline: React.FC<LiveActivityTimelineProps> = ({
  onOpenBooking,
  onOpenOffersModal
}) => {
  const [activities, setActivities] = useState<LiveActivityItem[]>(() => getLiveActivities());
  const [, setTick] = useState(0);

  // Subscribe to live activity submissions (when any customer books or claims an offer)
  useEffect(() => {
    const unsubscribe = subscribeToActivityUpdates((updated) => {
      setActivities(updated);
    });

    // Update relative time ("2m ago", etc.) every 30 seconds
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 30000);

    return () => {
      unsubscribe();
      clearInterval(timer);
    };
  }, []);

  // Double array for continuous seamless infinite looping
  const displayItems = activities.length < 5 
    ? [...activities, ...activities, ...activities, ...activities] 
    : [...activities, ...activities];

  const handleCardClick = (item: LiveActivityItem) => {
    if (item.type === 'offer_claim') {
      if (onOpenOffersModal) onOpenOffersModal();
    } else {
      if (onOpenBooking) onOpenBooking(item.serviceOrOffer);
    }
  };

  return (
    <section 
      aria-label="Live customer bookings and festive offer claims" 
      className="relative z-20 w-full bg-[#0d0c12] border-y border-[#d4af37]/35 py-2.5 sm:py-3.5 overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] select-none"
    >
      {/* Top and Bottom Subtle Gold Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-stretch md:items-center gap-2.5 sm:gap-4">
        
        {/* Left Live Badge Header */}
        <div className="flex items-center justify-between md:justify-start gap-2 flex-shrink-0 px-2 sm:px-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-rose-950 via-rose-900 to-[#1e1520] border border-[#d4af37]/50 shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#fceade] flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#d4af37]" />
              <span>LIVE ACTIVITY FEED</span>
            </span>
          </div>

          <span className="text-[10px] text-[#a09d96] hidden xl:inline font-light italic">
            Recent customer reservations & Puja offer claims across Sribhumi, Karimganj & Silchar
          </span>
        </div>

        {/* Continuous Horizontal Infinite Marquee Carousel (Left to Right Parallax Flow) */}
        <div className="relative flex-1 overflow-hidden">
          
          {/* Left and Right Smooth Fade Gradients for Parallax/Depth */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#0d0c12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#0d0c12] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Ribbon Container */}
          <div className="animate-marquee-reverse flex items-center gap-3 sm:gap-4 py-0.5 w-max hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
            {displayItems.map((item, idx) => {
              const isOffer = item.type === 'offer_claim';

              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => handleCardClick(item)}
                  className={`flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border backdrop-blur-md transition-all duration-300 transform-gpu hover:scale-[1.03] cursor-pointer shadow-md flex-shrink-0 ${
                    isOffer
                      ? 'bg-gradient-to-r from-[#201018] via-[#16101c] to-[#120f18] border-[#d4af37]/50 hover:border-[#d4af37] hover:shadow-[#d4af37]/20'
                      : 'bg-gradient-to-r from-[#14121a] to-[#0f0e15] border-[#2f2b38] hover:border-[#d4af37]/60'
                  }`}
                >
                  {/* Client Initial Avatar */}
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-sm flex-shrink-0 ${
                    isOffer
                      ? 'bg-gradient-to-tr from-[#d4af37] to-[#fceade] text-black'
                      : 'bg-[#221f2d] border border-[#d4af37]/40 text-[#f3e5ab]'
                  }`}>
                    {item.avatarLetter}
                  </div>

                  {/* Client Info & Action */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5 flex-wrap leading-none">
                      <span className="text-[11px] sm:text-xs font-bold text-[#f7e7ce] flex items-center gap-1">
                        {item.customerName}
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 inline" />
                      </span>
                      
                      <span className="text-[9px] sm:text-[10px] text-[#8e8a83] flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5 text-[#d4af37]" />
                        <span className="truncate max-w-[120px]">{item.location}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-1">
                      <span className={`px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider ${
                        isOffer
                          ? 'bg-rose-950 text-[#fceade] border border-[#d4af37]/40'
                          : 'bg-[#1e1c27] text-[#d4af37] border border-[#d4af37]/30'
                      }`}>
                        {item.badge}
                      </span>
                      
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#fceade] truncate max-w-[180px] sm:max-w-[240px]">
                        {item.serviceOrOffer}
                      </span>
                    </div>
                  </div>

                  {/* Relative Timestamp */}
                  <div className="pl-1.5 sm:pl-2 border-l border-white/10 flex items-center gap-1 text-[9px] sm:text-[10px] text-[#d4af37] font-mono whitespace-nowrap">
                    <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
                    <span>{formatTimeAgo(item.timestamp)}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
