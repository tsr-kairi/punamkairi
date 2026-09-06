import React from 'react';
import { Clock, Check, Sparkles, ArrowRight, Info } from 'lucide-react';
import type { ServiceItem } from '../../data/services';

interface ServiceCardProps {
  service: ServiceItem;
  onBookService: (service: ServiceItem) => void;
  onOpenDetails?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBookService,
  onOpenDetails
}) => {
  return (
    <div className="rounded-2xl bg-[#111116] border border-[#26242c] hover:border-[#d4af37]/45 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      
      {/* Image Preview Banner (Compact on mobile, full on desktop) */}
      <div
        className="relative h-40 sm:h-52 w-full overflow-hidden bg-[#181820] cursor-pointer"
        onClick={() => onOpenDetails && onOpenDetails(service)}
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-black/35 to-transparent" />

        {/* Category & Badge */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-semibold text-[#f7e7ce] uppercase tracking-wider">
            {service.categoryLabel}
          </span>
          {service.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37] text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {service.badge}
            </span>
          )}
        </div>

        {/* Duration Pill at bottom right of image */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-sm text-[10px] sm:text-[11px] text-[#e0ddd5] border border-white/10 font-medium">
          <Clock className="w-3 h-3 text-[#d4af37]" />
          <span>{service.duration}</span>
        </div>

        {/* Tap For Details Hint Pill on Mobile */}
        <div className="absolute bottom-2 left-2 flex sm:hidden items-center gap-1 px-2 py-0.5 rounded-md bg-[#d4af37]/20 backdrop-blur-sm text-[9px] text-[#f3e5ab] border border-[#d4af37]/30 font-medium">
          <Info className="w-2.5 h-2.5 text-[#d4af37]" />
          <span>Tap for details</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Service Title & Tagline */}
          <div
            className="cursor-pointer"
            onClick={() => onOpenDetails && onOpenDetails(service)}
          >
            <h3 className="text-base sm:text-xl font-display font-bold text-[#f7e7ce] group-hover:text-[#f3e5ab] transition-colors leading-snug">
              {service.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-[#d4af37] font-serif-luxury italic mt-0.5 mb-2 line-clamp-1">
              "{service.tagline}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#a09d96] font-light leading-relaxed mb-3 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Inclusions summary (2 items + more trigger) */}
          <div className="space-y-1.5 pt-2.5 border-t border-[#222128]">
            {service.includedItems.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-[#cfccc4]">
                <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1 text-[11px] sm:text-xs">{item}</span>
              </div>
            ))}
            
            {service.includedItems.length > 2 && (
              <button
                onClick={() => onOpenDetails && onOpenDetails(service)}
                className="text-[10px] sm:text-xs text-[#d4af37] hover:text-[#f3e5ab] font-medium flex items-center gap-1 cursor-pointer pt-0.5"
              >
                <span>+{service.includedItems.length - 2} more steps (View All)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3.5 mt-3.5 border-t border-[#222128] flex items-center justify-between gap-2">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#8e8c85]">
              Investment
            </div>
            <div className="text-sm sm:text-base font-display font-bold text-gold-gradient leading-tight">
              {service.price}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {onOpenDetails && (
              <button
                onClick={() => onOpenDetails(service)}
                className="btn-outline-gold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-semibold tracking-wider uppercase cursor-pointer"
                title="View full service breakdown"
              >
                Details
              </button>
            )}

            <button
              onClick={() => onBookService(service)}
              className="btn-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase flex items-center gap-1 shadow-md cursor-pointer flex-shrink-0 active:scale-95 transition-transform"
            >
              <span>Book</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
