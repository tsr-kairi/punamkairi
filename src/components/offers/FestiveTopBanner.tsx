import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, ArrowRight, X } from 'lucide-react';
import { durgaPujaFestiveOffers } from '../../data/offers';

interface FestiveTopBannerProps {
  onOpenOffersModal: () => void;
}

export const FestiveTopBanner: React.FC<FestiveTopBannerProps> = ({ onOpenOffersModal }) => {
  const [dismissed, setDismissed] = useState(false);

  if (!durgaPujaFestiveOffers.enabled || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative z-50 bg-gradient-to-r from-[#5a1010] via-[#851818] to-[#4a0d0d] border-b border-[#d4af37]/40 text-white text-xs py-2.5 px-3 sm:px-6 shadow-xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Main Headline & Badge */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="p-1 rounded-md bg-[#d4af37] text-black flex-shrink-0 animate-bounce">
              <Gift className="w-3.5 h-3.5" />
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[#f7e7ce] uppercase tracking-wider text-[11px] sm:text-xs">
                🌸 DURGA PUJA & GRAND OPENING SPECIAL:
              </span>
              <span className="text-[#fceade] hidden sm:inline font-light">
                Exclusive festive discounts + complimentary lash upgrades on bridal & party bookings!
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/25 text-[#f3e5ab] text-[10px] font-semibold border border-[#d4af37]/40 hidden md:inline-block">
                Limited Slots
              </span>
            </div>
          </div>

          {/* Right Action CTA & Close Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenOffersModal}
              className="px-3 py-1 rounded-full bg-[#d4af37] hover:bg-[#edd269] text-[#0a0a0c] font-bold text-[11px] tracking-wider uppercase flex items-center gap-1 shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>VIEW OFFERS</span>
              <ArrowRight className="w-3 h-3 text-[#0a0a0c]" />
            </button>

            <button
              onClick={() => setDismissed(true)}
              className="p-1 rounded-full hover:bg-black/30 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
