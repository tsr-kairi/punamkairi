import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';
import { siteConfig } from '../../data/siteConfig';

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  allItems: PortfolioItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onBookLook: (serviceName?: string) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  allItems,
  onClose,
  onSelectNext,
  onSelectPrev,
  onBookLook
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    },
    [onClose, onSelectNext, onSelectPrev]
  );

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 animate-fade-in">
      {/* Background Click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Header Bar */}
      <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2.5 pointer-events-auto bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#d4af37]/30">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span className="text-xs font-semibold text-[#f7e7ce] tracking-widest uppercase">
            {item.categoryLabel} ({currentIndex + 1}/{allItems.length})
          </span>
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] transition-all cursor-pointer shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectPrev();
        }}
        className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] transition-all cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectNext();
        }}
        className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] transition-all cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-[#101015] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
      >
        {/* Image Area */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[55vh] md:max-h-none">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain md:object-cover max-h-[80vh]"
          />

          {/* PK Watermark Overlay */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm border border-[#d4af37]/30 text-[9px] font-display tracking-[0.2em] text-[#d4af37] uppercase select-none pointer-events-none">
            PK • {siteConfig.brandName} {siteConfig.businessDescriptor}
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="md:w-2/5 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto bg-[#121217]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>{item.categoryLabel}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-bold text-[#f7e7ce] mb-3">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#cfccc4] font-light leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Techniques */}
            <div className="space-y-2 mb-6">
              <div className="text-[11px] text-[#a09d96] uppercase tracking-wider font-semibold">
                Signature Techniques Applied:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.techniques.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#181822] border border-[#2a2824] text-[#e0ddd5] text-[10px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#2a2824] space-y-2.5">
            <button
              onClick={() => {
                onClose();
                onBookLook(item.title);
              }}
              className="w-full btn-gold py-3 rounded-xl text-xs font-bold tracking-widest uppercase shadow-lg cursor-pointer"
            >
              REQUEST THIS LOOK
            </button>
            <div className="text-center text-[10px] text-[#8e8c85]">
              Availability confirmed directly by Punam Kairi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
