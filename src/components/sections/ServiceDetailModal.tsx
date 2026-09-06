import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Check, Sparkles, Calendar, ShieldCheck } from 'lucide-react';
import type { ServiceItem } from '../../data/services';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-lg bg-[#111116] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Top Banner Image */}
          <div className="relative h-48 sm:h-56 w-full bg-[#181820]">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-black/30 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/70 text-white hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37] transition-all cursor-pointer z-10"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-[10px] font-bold text-[#f7e7ce] uppercase tracking-wider">
                {service.categoryLabel}
              </span>
              {service.badge && (
                <span className="px-2.5 py-1 rounded-full bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider shadow flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {service.badge}
                </span>
              )}
            </div>

            {/* Duration Tag */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-xs text-[#e0ddd5] border border-white/15 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{service.duration}</span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 space-y-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#f7e7ce]">
                {service.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#d4af37] font-serif-luxury italic mt-1">
                "{service.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-[#cfccc4] font-light mt-2 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {/* Included Steps Checklist */}
            <div className="p-4 rounded-2xl bg-[#16161f] border border-[#26242c] space-y-2.5">
              <div className="text-xs font-bold text-[#f7e7ce] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Complete Service Breakdown ({service.includedItems.length} Steps)</span>
              </div>
              <div className="space-y-2 pt-1">
                {service.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#e0ddd5]">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment & Hygiene Notice */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#181822] border border-white/5 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8e8c85] block font-semibold">
                  Estimated Investment
                </span>
                <span className="text-base sm:text-lg font-display font-bold text-gold-gradient">
                  {service.price}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#a09d96]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Sanitized & Tested</span>
              </div>
            </div>

            {/* Bottom Booking CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={() => {
                  onClose();
                  onBookService(service);
                }}
                className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl cursor-pointer active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4 text-[#0a0a0c]" />
                <span>BOOK THIS SERVICE</span>
              </button>

              <button
                onClick={onClose}
                className="w-full btn-outline-gold py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase cursor-pointer"
              >
                BACK TO MENU
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
