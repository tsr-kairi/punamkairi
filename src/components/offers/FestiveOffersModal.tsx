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

// Maa Durga Divine Artistry Watermark SVG
const DurgaWatermarkSvg: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
    {/* Third Eye (Trinetra) */}
    <path d="M50 14 C44 26, 44 34, 50 42 C56 34, 56 26, 50 14 Z" />
    <circle cx="50" cy="28" r="2.8" />
    {/* Left Eye with traditional wing */}
    <path d="M19 40 C28 35, 41 38, 46 46 C39 53, 26 51, 19 40 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="33" cy="44.5" r="3.2" />
    <path d="M15 40 C22 31, 38 31, 46 42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Right Eye with traditional wing */}
    <path d="M81 40 C72 35, 59 38, 54 46 C61 53, 74 51, 81 40 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="67" cy="44.5" r="3.2" />
    <path d="M85 40 C78 31, 62 31, 54 42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Nose curve & Auspicious Nath */}
    <path d="M48 48 Q50 63 48 70 Q50 72 53 70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="43" cy="70" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    {/* Trishul Motif */}
    <path d="M50 76 L50 94 M43 81 Q50 88 57 81" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

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
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-4xl bg-[#0c0a10] border-2 border-[#d4af37]/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 shadow-2xl overflow-hidden my-auto max-h-[94vh] overflow-y-auto"
        >
          {/* Top Decorative Festive Glow & Watermark */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle Background Watermark */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[#d4af37]/10 pointer-events-none select-none">
            <DurgaWatermarkSvg className="w-48 h-48 sm:w-64 sm:h-64" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full bg-[#1e1c26] text-[#cfccc4] hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37] transition-all cursor-pointer z-20 shadow-md"
            aria-label="Close offers modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 border border-[#d4af37]/60 text-[#fceade] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 shadow-md">
              <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d4af37] animate-bounce" />
              <span>{durgaPujaFestiveOffers.festivalName}</span>
            </div>
            
            <h2 className="text-xl sm:text-3xl font-display font-bold text-[#f7e7ce]">
              Exclusive Festive Artistry Offers
            </h2>
            
            <p className="text-[11px] sm:text-sm text-[#d4af37] font-serif-luxury italic mt-0.5 max-w-md mx-auto">
              "{durgaPujaFestiveOffers.subheading}"
            </p>
          </div>

          {/* Offers Cards Grid: Exactly 2 cards per row on Mobile & Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-2.5 sm:gap-4 relative z-10">
            {durgaPujaFestiveOffers.offers.map((offer) => (
              <div
                key={offer.id}
                className={`rounded-xl sm:rounded-2xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                  offer.popular
                    ? 'bg-gradient-to-b from-[#1f1019] via-[#16111e] to-[#0e0c14] border-[#d4af37]/65 shadow-xl shadow-rose-950/20'
                    : 'bg-gradient-to-b from-[#17121c] to-[#0f0e16] border-[#2f2a3a] hover:border-[#d4af37]/50'
                }`}
              >
                {/* Embedded Durga Puja Card Background Watermark */}
                <div className="absolute -right-4 -bottom-6 text-[#d4af37]/[0.07] group-hover:text-[#d4af37]/[0.12] transition-colors pointer-events-none">
                  <DurgaWatermarkSvg className="w-28 h-28 sm:w-36 sm:h-36" />
                </div>

                <div>
                  {/* Service Image Header with Overlaid Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c14] via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[8px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#d4af37]/40 truncate max-w-[65%]">
                        {offer.badge}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-[#d4af37] text-black text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow">
                        {offer.savingsBadge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content (Compact & Clean) */}
                  <div className="p-2.5 sm:p-4">
                    {/* Offer Title */}
                    <h3 className="text-[11px] sm:text-base font-display font-bold text-[#f7e7ce] leading-tight line-clamp-2 min-h-[1.8rem] sm:min-h-[2.5rem]">
                      {offer.title}
                    </h3>
                    
                    {/* Highlight Box */}
                    <div className="my-1.5 sm:my-2 p-1.5 sm:p-2 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                      <span className="text-[9px] sm:text-xs font-bold text-[#fceade] leading-tight line-clamp-1">
                        {offer.discountHighlight}
                      </span>
                    </div>

                    {/* Key Perks Checklist */}
                    <div className="space-y-1 mb-2.5">
                      {offer.includedPerks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5 text-[9px] sm:text-xs text-[#cfccc4]">
                          <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#d4af37] flex-shrink-0" />
                          <span className="truncate">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Code + WhatsApp Claim Button */}
                <div className="p-2.5 sm:p-4 pt-0">
                  <div className="flex items-center justify-between text-[8px] sm:text-[10px] text-[#a09d96] font-mono mb-2 px-0.5">
                    <div className="flex items-center gap-1 text-[#d4af37]">
                      <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="truncate">{offer.code}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#a09d96] hidden sm:flex">
                      <Clock className="w-3 h-3" />
                      <span>{offer.validTill}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClaimOffer(offer)}
                    className="w-full btn-gold py-2 sm:py-2.5 px-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#0a0a0c] flex-shrink-0" />
                    <span className="truncate">CLAIM ON WHATSAPP</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Direct Confirmation Notice */}
          <div className="mt-3.5 sm:mt-5 p-2.5 sm:p-3.5 rounded-xl bg-[#14141d] border border-[#2a2824] flex items-center gap-2.5 text-[10px] sm:text-xs text-[#a09d96] relative z-10">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
            <div className="leading-tight">
              Claim directly on WhatsApp with <strong className="text-[#f7e7ce]">Mrs. Punam Kairi (+91 6003756297)</strong>. Limited slots for auspicious Puja dates.
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

