import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';
import { durgaPujaFestiveOffers } from '../../data/offers';

interface FestiveFloatingBadgeProps {
  onOpenOffersModal: () => void;
}

export const FestiveFloatingBadge: React.FC<FestiveFloatingBadgeProps> = ({ onOpenOffersModal }) => {
  if (!durgaPujaFestiveOffers.enabled) return null;

  return (
    <aside aria-label="Festive special offers" className="fixed left-3 sm:left-6 bottom-20 sm:bottom-8 z-40">
      <motion.button
        onClick={onOpenOffersModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            '0 0 15px rgba(212, 175, 55, 0.3)',
            '0 0 30px rgba(212, 175, 55, 0.65)',
            '0 0 15px rgba(212, 175, 55, 0.3)'
          ]
        }}
        transition={{
          y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
          boxShadow: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }
        }}
        className="flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-[#7a1212] via-[#941919] to-[#690f0f] border-2 border-[#d4af37] text-[#fceade] shadow-2xl cursor-pointer group"
      >
        <div className="relative">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37] text-black flex items-center justify-center flex-shrink-0 font-bold shadow-md">
            <Gift className="w-4 h-4 text-[#0a0a0c]" />
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" />
        </div>

        <div className="text-left">
          <div className="text-[9px] uppercase tracking-widest text-[#f3e5ab] font-bold flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
            <span>Grand Opening</span>
          </div>
          <div className="text-xs sm:text-sm font-display font-bold text-white tracking-wide leading-none mt-0.5">
            Durga Puja Offers
          </div>
        </div>
      </motion.button>
    </aside>
  );
};
