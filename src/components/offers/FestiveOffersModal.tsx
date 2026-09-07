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
  onClaimOffer?: (offerTitle: string) => void;
}

// High-Detail Maa Durga Royal Artistry Infographic SVG Watermark
const MaaDurgaRoyalWatermark: React.FC<{ className?: string }> = ({ 
  className = "w-24 h-24 sm:w-28 sm:h-28" 
}) => (
  <svg 
    viewBox="0 0 120 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    aria-hidden="true"
  >
    {/* Divine Halo / Sunray Rings */}
    <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />

    {/* Royal Mukut / Crown */}
    <path 
      d="M38 34 C42 16, 52 8, 60 4 C68 8, 78 16, 82 34 C72 30, 48 30, 38 34 Z" 
      fill="currentColor" 
      fillOpacity="0.18" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinejoin="round" 
    />
    <path d="M60 4 L60 28 M48 18 L55 28 M72 18 L65 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="60" cy="11" r="2.2" fill="currentColor" />
    <circle cx="50" cy="19" r="1.6" fill="currentColor" />
    <circle cx="70" cy="19" r="1.6" fill="currentColor" />
    <path d="M42 32 Q60 26 78 32" stroke="currentColor" strokeWidth="1.5" />

    {/* Divine Third Eye (Trinetra) */}
    <path 
      d="M60 29 C54 39, 54 46, 60 54 C66 46, 66 39, 60 29 Z" 
      fill="currentColor" 
      fillOpacity="0.3" 
      stroke="currentColor" 
      strokeWidth="1.8" 
    />
    <circle cx="60" cy="41.5" r="2.8" fill="currentColor" />

    {/* Sacred Chandan Tilak / Crescent */}
    <path d="M52 48 Q60 53 68 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="60" cy="57" r="2.2" fill="currentColor" />

    {/* Left Eye (Winged Durga Kajal Eye) */}
    <path 
      d="M26 58 C37 52, 51 55, 56 65 C48 74, 34 72, 26 58 Z" 
      fill="currentColor" 
      fillOpacity="0.22" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinejoin="round" 
    />
    <circle cx="42" cy="63.5" r="4" fill="currentColor" />
    <circle cx="43.5" cy="62" r="1.2" fill="#000" />
    <path d="M20 57 C29 46, 48 45, 57 60" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M22 62 C16 57, 14 52, 10 50" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Right Eye (Winged Durga Kajal Eye) */}
    <path 
      d="M94 58 C83 52, 69 55, 64 65 C72 74, 86 72, 94 58 Z" 
      fill="currentColor" 
      fillOpacity="0.22" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinejoin="round" 
    />
    <circle cx="78" cy="63.5" r="4" fill="currentColor" />
    <circle cx="76.5" cy="62" r="1.2" fill="#000" />
    <path d="M100 57 C91 46, 72 45, 63 60" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M98 62 C104 57, 106 52, 110 50" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Nose Bridge & Traditional Ornate Nath (Nose Ring) */}
    <path d="M58 66 Q60 84 57 91 Q60 93 63 91" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="51" cy="91" r="7" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" />
    <circle cx="51" cy="98" r="1.6" fill="currentColor" />
    <circle cx="44" cy="91" r="1.6" fill="currentColor" />
    <path d="M44 91 Q30 84 22 66" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 2" strokeLinecap="round" />

    {/* Sacred Smile / Lips */}
    <path d="M52 102 Q60 107 68 102" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M55 102 Q60 104 65 102" stroke="currentColor" strokeWidth="1.2" />

    {/* Sacred Trishul Base Accent */}
    <path d="M60 109 L60 118 M54 112 Q60 115 66 112" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const FestiveOffersModal: React.FC<FestiveOffersModalProps> = ({ isOpen, onClose, onClaimOffer }) => {
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

    if (onClaimOffer) {
      onClaimOffer(offer.title);
    } else {
      const whatsappUrl = getOfferClaimWhatsAppUrl(offer);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
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
          {/* Top Decorative Festive Glow & Large Backdrop Watermark */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle Modal Header Background Watermark */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[#d4af37]/10 pointer-events-none select-none">
            <MaaDurgaRoyalWatermark className="w-52 h-52 sm:w-64 sm:h-64" />
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

          {/* Offers Cards Grid: 1 column on mobile for full spacious luxury, 2 columns on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
            {durgaPujaFestiveOffers.offers.map((offer) => (
              <div
                key={offer.id}
                className={`rounded-2xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                  offer.popular
                    ? 'bg-gradient-to-b from-[#1f1019] via-[#16111e] to-[#0e0c14] border-[#d4af37]/65 shadow-xl shadow-rose-950/20'
                    : 'bg-gradient-to-b from-[#17121c] to-[#0f0e16] border-[#2f2a3a] hover:border-[#d4af37]/50'
                }`}
              >
                <div>
                  {/* Service Image Header with Overlaid Badges */}
                  <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-black/40">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c14] via-black/25 to-transparent" />

                    {/* Top Overlaid Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-[#d4af37]/40 truncate shadow">
                        {offer.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#d4af37] text-black text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg">
                        {offer.savingsBadge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content with Top-Right Maa Durga Watermark Beside Title */}
                  <div className="p-4 sm:p-5 relative overflow-hidden">
                    
                    {/* Top-Right Maa Durga Infographic Watermark (Aligned right beside Title, not behind bottom button) */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[#d4af37]/20 group-hover:text-[#d4af37]/35 transition-colors pointer-events-none select-none">
                      <MaaDurgaRoyalWatermark className="w-20 h-20 sm:w-24 sm:h-24" />
                    </div>

                    {/* Offer Title & Tagline */}
                    <div className="relative z-10 max-w-[80%] sm:max-w-[82%]">
                      <h3 className="text-base sm:text-lg font-display font-bold text-[#f7e7ce] leading-snug">
                        {offer.title}
                      </h3>
                      <p className="text-xs text-[#d4af37] font-serif-luxury italic mt-0.5">
                        {offer.tagline}
                      </p>
                    </div>
                    
                    {/* Highlight Box */}
                    <div className="relative z-10 my-3 p-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#fceade] uppercase tracking-wide">
                        {offer.discountHighlight}
                      </span>
                    </div>

                    {/* Key Perks Checklist */}
                    <div className="relative z-10 space-y-1.5 mb-2">
                      {offer.includedPerks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-[#cfccc4]">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Code + Single-line Full-width WhatsApp CTA */}
                <div className="p-4 sm:p-5 pt-0 relative z-10">
                  <div className="flex items-center justify-between text-xs text-[#a09d96] font-mono mb-2.5 px-0.5">
                    <div className="flex items-center gap-1.5 text-[#d4af37]">
                      <Tag className="w-3.5 h-3.5" />
                      <span className="font-semibold">CODE: {offer.code}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#a09d96]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{offer.validTill}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClaimOffer(offer)}
                    className="w-full btn-gold py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0a0a0c] flex-shrink-0" />
                    <span>CLAIM DEAL ON WHATSAPP</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Direct Confirmation Notice */}
          <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-2xl bg-[#14141d] border border-[#2a2824] flex items-center gap-3 text-xs text-[#a09d96] relative z-10">
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

