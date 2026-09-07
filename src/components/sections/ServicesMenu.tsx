import React, { useState } from 'react';
import { Calendar, Layers, Sparkles } from 'lucide-react';
import { servicesData, serviceCategories } from '../../data/services';
import type { ServiceCategory, ServiceItem } from '../../data/services';
import { SectionHeader } from '../common/SectionHeader';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesMenuProps {
  onBookService: (service: ServiceItem) => void;
  activeCategory?: ServiceCategory | 'ALL';
  onCategoryChange?: (category: ServiceCategory | 'ALL') => void;
}

const categoryIcons: Record<string, string> = {
  ALL: '✨',
  BRIDAL: '👰',
  WEDDING_EVENTS: '📸',
  PARTY_OCCASION: '💄',
  FACIALS: '🌸',
  THREADING: '✂️',
  SPECIALIZED: '💎',
};

export const ServicesMenu: React.FC<ServicesMenuProps> = ({
  onBookService,
  activeCategory: controlledActiveCategory,
  onCategoryChange
}) => {
  const [internalCategory, setInternalCategory] = useState<ServiceCategory | 'ALL'>('BRIDAL');
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const activeCategory = controlledActiveCategory !== undefined ? controlledActiveCategory : internalCategory;

  const handleSelectCategory = (cat: ServiceCategory | 'ALL') => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const filteredServices = activeCategory === 'ALL'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const currentCategoryInfo = serviceCategories.find((c) => c.id === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-28 bg-[#0b0b10] relative border-b border-[#1c1b24] overflow-hidden">
      {/* Creamy Gold Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#f7e7ce]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Couture Services & Experiences"
          title="THE SIGNATURE COLLECTION"
          subtitle="Tone-calibrated bridal transformations, pre-puja facial rejuvenation, and festive glam tailored with perfection."
        />

        {/* Mobile App-Style Horizontal Category Carousel */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 sm:justify-center">
            {/* All Services Tab */}
            <button
              onClick={() => handleSelectCategory('ALL')}
              className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer flex-shrink-0 border shadow-md active:scale-95 ${
                activeCategory === 'ALL'
                  ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-black border-transparent shadow-[0_4px_20px_rgba(212,175,55,0.35)] font-extrabold'
                  : 'bg-[#14141d] text-[#b0ada5] border-[#292736] hover:border-[#d4af37]/50 hover:text-white'
              }`}
            >
              <span>{categoryIcons['ALL']}</span>
              <span>All Looks</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === 'ALL' ? 'bg-black/30 text-black font-black' : 'bg-[#222130] text-[#8e8c85]'}`}>
                {servicesData.length}
              </span>
            </button>

            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = servicesData.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer flex-shrink-0 border shadow-md active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-black border-transparent shadow-[0_4px_20px_rgba(212,175,55,0.35)] font-extrabold'
                      : 'bg-[#14141d] text-[#b0ada5] border-[#292736] hover:border-[#d4af37]/50 hover:text-white font-semibold'
                  }`}
                >
                  <span>{categoryIcons[cat.id] || '✨'}</span>
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/30 text-black font-black' : 'bg-[#222130] text-[#8e8c85]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description Banner */}
        {currentCategoryInfo && (
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 px-2">
            <p className="text-xs sm:text-sm text-[#e8d5b5] font-serif-luxury italic tracking-wide">
              "{currentCategoryInfo.description}"
            </p>
          </div>
        )}

        {/* Services Grid (Compact & Creamy Beauty Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookService={onBookService}
              onOpenDetails={(s) => setSelectedDetailService(s)}
            />
          ))}
        </div>

        {/* View All Button if filtered */}
        {activeCategory !== 'ALL' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => handleSelectCategory('ALL')}
              className="btn-outline-gold px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Explore Complete Menu ({servicesData.length} Services)</span>
            </button>
          </div>
        )}

        {/* Bottom Booking Notice */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#161622] via-[#14141c] to-[#121218] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-sm sm:text-base font-display font-bold text-[#f7e7ce]">
              Require Custom Bridal Packages or Destination Wedding Styling?
            </h4>
            <p className="text-xs text-[#a09d96] mt-0.5">
              We provide tailored packages for brides, family groups, and on-venue destination services across Assam.
            </p>
          </div>
          <button
            onClick={() => onBookService(servicesData[0])}
            className="btn-outline-gold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer flex-shrink-0 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>CUSTOM ENQUIRY</span>
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onBookService={(s) => {
          setSelectedDetailService(null);
          onBookService(s);
        }}
      />
    </section>
  );
};
