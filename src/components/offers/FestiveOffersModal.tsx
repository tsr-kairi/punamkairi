import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, Check, MessageCircle, Clock, ShieldCheck, Tag } from 'lucide-react';
import { durgaPujaFestiveOffers } from '../../data/offers';
import type { FestiveOffer } from '../../data/offers';
import { getOfferClaimWhatsAppUrl } from '../../utils/whatsapp';
import confetti from 'canvas-confetti';

interface FestiveOffersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FestiveOffersModal: React.FC<FestiveOffersModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClaimOffer = (offer: FestiveOffer) => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#d4af37', '#e63946', '#ffb703', '#ffffff', '#fb8500']
      });
    } catch {
      // safe fallback
    }

    const whatsappUrl = getOfferClaimWhatsAppUrl(offer);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl bg-[#0f0e14] border-2 border-[#d4af37]/45 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Top Decorative Festive Glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#1e1c26] text-[#cfccc4] hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37] transition-all cursor-pointer"
            aria-label="Close offers modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 border border-[#d4af37]/50 text-[#fceade] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
              <Gift className="w-3.5 h-3.5 text-[#d4af37] animate-bounce" />
              <span>{durgaPujaFestiveOffers.festivalName}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#f7e7ce]">
              Exclusive Festive Artistry Offers
            </h2>
            
            <p className="text-xs sm:text-sm text-[#d4af37] font-serif-luxury italic mt-1 max-w-md mx-auto">
              "{durgaPujaFestiveOffers.subheading}"
            </p>
          </div>

          {/* Offers Cards List */}
          <div className="space-y-4 sm:space-y-5">
            {durgaPujaFestiveOffers.offers.map((offer) => (
              <div
                key={offer.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  offer.popular
                    ? 'bg-gradient-to-b from-[#1c141d] to-[#121118] border-[#d4af37]/60 shadow-xl'
                    : 'bg-[#14131b] border-[#2c2834] hover:border-[#d4af37]/40'
                }`}
              >
                {/* Popular Pill */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider shadow">
                    {offer.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-[#f3e5ab] font-mono bg-black/60 px-2 py-0.5 rounded border border-[#d4af37]/30">
                    <Tag className="w-3 h-3 text-[#d4af37]" />
                    <span>CODE: {offer.code}</span>
                  </div>
                </div>

                {/* Offer Title & Highlight */}
                <h3 className="text-base sm:text-lg font-display font-bold text-[#f7e7ce] mt-1">
                  {offer.title}
                </h3>
                
                <p className="text-xs text-[#a09d96] font-light mt-0.5">
                  {offer.tagline}
                </p>

                {/* Discount Benefit Banner */}
                <div className="my-3 p-2.5 rounded-xl bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-transparent border border-[#d4af37]/40 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#fceade] uppercase tracking-wide">
                    {offer.discountHighlight}
                  </span>
                </div>

                <p className="text-xs text-[#cfccc4] font-light leading-relaxed mb-3">
                  {offer.description}
                </p>

                {/* Included Perks Checklist */}
                <div className="space-y-1.5 pt-2 border-t border-white/10 mb-4">
                  {offer.includedPerks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#e0ddd5]">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action & Urgency */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#d4af37] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{offer.validTill}</span>
                  </div>

                  <button
                    onClick={() => handleClaimOffer(offer)}
                    className="btn-gold py-2.5 px-5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#0a0a0c]" />
                    <span>CLAIM DEAL ON WHATSAPP</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Direct Confirmation Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-[#14141d] border border-[#2a2824] flex items-start gap-3 text-xs text-[#a09d96]">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              Offers are claimed directly on WhatsApp with <strong className="text-[#f7e7ce]">Mrs. Punam Kairi (+91 6003756297)</strong>. Slots are booked on a first-come, first-served basis for auspicious festive dates.
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
