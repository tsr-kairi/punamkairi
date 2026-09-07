import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, UserCheck, Flame, TrendingUp } from 'lucide-react';
import { 
  getRealActivities, 
  subscribeToRealActivities, 
  formatTimeAgo, 
  getTotalBookingCount,
  type RealCustomerActivity 
} from '../../utils/activityTracker';

export const LiveActivityTimeline: React.FC = () => {
  const [activities, setActivities] = useState<RealCustomerActivity[]>(() => getRealActivities());
  const [totalCount, setTotalCount] = useState<number>(() => getTotalBookingCount());
  const [, setTick] = useState(0);

  // Subscribe to real customer booking updates
  useEffect(() => {
    const unsubscribe = subscribeToRealActivities((updated, count) => {
      setActivities(updated);
      setTotalCount(count);
    });

    // Update relative time ("2m ago", etc.) every 30 seconds
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
      const current = getRealActivities();
      setActivities(current);
      setTotalCount(current.length);
    }, 30000);

    return () => {
      unsubscribe();
      clearInterval(timer);
    };
  }, []);

  // Repeat array enough times to continuously fill widescreen desktop & mobile smoothly
  const repeatMultiplier = activities.length > 0
    ? Math.max(4, Math.ceil(12 / activities.length))
    : 1;
  const displayItems = activities.length > 0
    ? Array(repeatMultiplier).fill(activities).flat()
    : [];

  return (
    <section 
      aria-label="Real customer bookings activity timeline" 
      className="relative z-20 w-full bg-[#0c0b11] border-y border-[#d4af37]/30 py-2.5 sm:py-3 overflow-hidden shadow-lg select-none"
    >
      {/* Top and Bottom Subtle Gold Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left Live Indicator Badge */}
        <div className="flex items-center justify-between md:justify-start gap-2 flex-shrink-0 px-1 sm:px-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-rose-950 via-rose-900 to-[#18111c] border border-[#d4af37]/50 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#fceade] flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#d4af37]" />
              <span>LIVE BOOKINGS</span>
            </span>
          </div>

          {/* Mobile visible total bookings exact count badge */}
          <div className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181422] border border-[#d4af37]/40 shadow-sm">
            <TrendingUp className="w-3 h-3 text-[#d4af37]" />
            <span className="text-[10px] text-[#cfccc4] font-medium">Total:</span>
            <span className="text-[11px] font-bold font-mono text-[#f3e5ab]">{totalCount}</span>
          </div>
        </div>

        {/* Continuous Horizontal Infinite Marquee Carousel (Left to Right Flow, Read-Only) */}
        <div className="relative flex-1 overflow-hidden min-h-[36px] flex items-center">
          
          {/* Left and Right Smooth Fade Gradients */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#0c0b11] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#0c0b11] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Ribbon Container */}
          <div className="animate-marquee-reverse flex items-center gap-3 sm:gap-4 py-0.5 w-max hover:[animation-play-state:paused]">
            {activities.length > 0 ? (
              displayItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 sm:py-2 rounded-xl border border-[#2f2b38] bg-gradient-to-r from-[#14121a] to-[#0f0e15] backdrop-blur-md shadow-sm flex-shrink-0 min-w-max"
                >
                  {/* User Initials Badge */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1e1c27] border border-[#d4af37]/40 text-[#f3e5ab] flex items-center justify-center font-bold text-[10px] sm:text-xs flex-shrink-0">
                    {item.customerName.charAt(0).toUpperCase()}
                  </div>

                  {/* Real Customer Name & Real Address */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-[#f7e7ce] flex items-center gap-1 leading-tight">
                      {item.customerName}
                      <UserCheck className="w-3 h-3 text-emerald-400 inline flex-shrink-0" />
                    </span>
                    
                    <span className="text-[10px] sm:text-xs text-[#a09d96] flex items-center gap-1 mt-0.5 leading-tight">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37] flex-shrink-0" />
                      <span className="truncate max-w-[200px] sm:max-w-[320px]">{item.location}</span>
                    </span>
                  </div>

                  {/* Real Timestamp Elapsed */}
                  <div className="pl-2 border-l border-white/10 flex items-center gap-1 text-[10px] sm:text-xs text-[#d4af37] font-mono whitespace-nowrap">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37]" />
                    <span>{formatTimeAgo(item.timestamp)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2 text-xs text-[#a09d96] py-1 px-3">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                <span>Real customer bookings and appointment confirmations will appear here live...</span>
              </div>
            )}
          </div>

        </div>

        {/* Desktop Right Side Total Bookings Counter Badge */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0 px-1 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#181422] via-[#201524] to-[#181422] border border-[#d4af37]/45 shadow-md">
            <TrendingUp className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px] text-[#cfccc4] font-semibold uppercase tracking-wider">
              Total Bookings:
            </span>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#f3e5ab] bg-black/60 px-2.5 py-0.5 rounded-md border border-[#d4af37]/35 shadow-inner">
              {totalCount}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
