import React, { useState, useMemo } from 'react';
import { Eye } from 'lucide-react';
import { portfolioData, portfolioCategories } from '../../data/portfolio';
import type { PortfolioCategory, PortfolioItem } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { PortfolioLightbox } from './PortfolioLightbox';

interface PortfolioSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') return portfolioData;
    return portfolioData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Curated Gallery"
          title="THE ART OF TRANSFORMATION"
          subtitle="A glimpse into Punam Kairi's artistry, craftsmanship, and signature looks."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-12 gap-2">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'btn-gold shadow-md'
                    : 'bg-[#14141a] text-[#b8b5ad] border border-[#2a2824] hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry / 2-Col Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#121217] border border-[#26242c] hover:border-[#d4af37]/50 shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-end aspect-[3/4]"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/30 text-[10px] uppercase tracking-wider font-semibold text-[#f3e5ab]">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Top Right Quick View Icon */}
              <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-[#d4af37]" />
              </div>

              {/* Subtle PK Watermark */}
              <div className="absolute bottom-24 right-3 z-10 opacity-30 group-hover:opacity-75 transition-opacity text-[8px] tracking-widest font-display text-[#d4af37] uppercase select-none">
                PK ARTISTRY
              </div>

              {/* Bottom Content Card */}
              <div className="relative z-10 p-2.5 sm:p-5 transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xs sm:text-base font-display font-bold text-[#f7e7ce] leading-tight mb-1 group-hover:text-white line-clamp-1 sm:line-clamp-none">
                  {item.title}
                </h3>
                
                <p className="hidden sm:block text-[11px] text-[#b0ada5] line-clamp-2 font-light leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-semibold text-[#d4af37] tracking-wider uppercase pt-1.5 sm:pt-2 border-t border-white/10">
                  <span>View Look</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <PortfolioLightbox
          item={activeLightboxItem}
          allItems={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onSelectNext={handleNext}
          onSelectPrev={handlePrev}
          onBookLook={(lookTitle) => onOpenBooking(lookTitle)}
        />

      </div>
    </section>
  );
};
