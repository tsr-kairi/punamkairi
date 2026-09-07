import React from 'react';
import { Clock, Sparkles, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
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
    <div className="rounded-3xl bg-gradient-to-b from-[#15151e] via-[#121217] to-[#0e0e13] border border-[#d4af37]/25 hover:border-[#d4af37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.65)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 relative">
      
      {/* Subtle Creamy Gold Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#d4af37]/20 transition-all" />

      {/* Top Image Banner */}
      <div
        className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#181822] cursor-pointer"
        onClick={() => onOpenDetails && onOpenDetails(service)}
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/25 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#d4af37]/40 text-[9.5px] sm:text-[10px] font-bold text-[#f7e7ce] uppercase tracking-wider shadow-md">
            {service.categoryLabel}
          </span>
          {service.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] text-black text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              {service.badge}
            </span>
          )}
        </div>

        {/* Duration Chip at bottom right */}
        <div className="absolute bottom-2.5 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] sm:text-[11px] text-[#e8d5b5] border border-white/10 font-medium shadow-md">
          <Clock className="w-3 h-3 text-[#d4af37]" />
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Creamy Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Service Title & Tagline */}
          <div
            className="cursor-pointer"
            onClick={() => onOpenDetails && onOpenDetails(service)}
          >
            <h3 className="text-base sm:text-lg font-display font-bold text-[#f7e7ce] group-hover:text-[#f3e5ab] transition-colors leading-snug">
              {service.name}
            </h3>
            <p className="text-xs text-[#d4af37] font-serif-luxury italic mt-0.5 mb-2 line-clamp-1">
              "{service.tagline}"
            </p>
          </div>

          {/* Crisp, Concise Description (No long boring checklists) */}
          <p className="text-xs sm:text-[13px] text-[#b0ada5] font-light leading-relaxed mb-3 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Luxury Highlights Pill Bar */}
          <div className="flex flex-wrap items-center gap-1.5 py-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#1a1a24] text-[10px] text-[#cfccc4] border border-[#2d2b38]">
              <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
              Tone-Calibrated
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#1a1a24] text-[10px] text-[#cfccc4] border border-[#2d2b38]">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              Couture Finish
            </span>
          </div>
        </div>

        {/* Pricing & Creamy Action Buttons */}
        <div className="pt-3.5 mt-3 border-t border-[#23222c] flex items-center justify-between gap-2">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#8e8c85] font-semibold">
              Investment
            </div>
            <div className="text-base sm:text-lg font-display font-bold text-gold-gradient leading-tight">
              {service.price}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenDetails && (
              <button
                onClick={() => onOpenDetails(service)}
                className="px-3 py-1.5 sm:py-2 rounded-full bg-[#181822] hover:bg-[#222230] text-[#cfccc4] hover:text-white border border-[#2a2836] hover:border-[#d4af37]/50 text-[10.5px] sm:text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1"
                title="View full service details"
              >
                <Eye className="w-3 h-3 text-[#d4af37]" />
                <span className="hidden sm:inline">Details</span>
              </button>
            )}

            <button
              onClick={() => onBookService(service)}
              className="btn-gold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md cursor-pointer active:scale-95 transition-transform"
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
