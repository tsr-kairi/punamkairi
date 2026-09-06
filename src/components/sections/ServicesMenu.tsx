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
    <section id="services" className="py-16 sm:py-28 bg-[#0d0d11] relative border-b border-[#1c1b22] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Digital Artistry Menu"
          title="THE SERVICES COLLECTION"
          subtitle="Explore our bespoke bridal, ceremony, skin-care facials, and high-glam makeup experiences."
        />

        {/* Single-Row Horizontally Scrollable Category Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 sm:justify-center mb-6 sm:mb-8">
          {/* All Services Pill */}
          <button
            onClick={() => handleSelectCategory('ALL')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer flex-shrink-0 border ${
              activeCategory === 'ALL'
                ? 'btn-gold border-transparent shadow-lg'
                : 'bg-[#14141a] text-[#a8a59e] border-[#2a2824] hover:border-[#d4af37]/40 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Services ({servicesData.length})</span>
          </button>

          {serviceCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = servicesData.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer flex-shrink-0 border ${
                  isActive
                    ? 'btn-gold border-transparent shadow-lg'
                    : 'bg-[#14141a] text-[#a8a59e] border-[#2a2824] hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/40 text-white' : 'bg-[#22212a] text-[#8e8c85]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Lead Info */}
        {currentCategoryInfo && (
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-[#d4af37] font-serif-luxury italic tracking-wide">
              {currentCategoryInfo.description}
            </p>
          </div>
        )}

        {/* Services Grid (Compact app cards on mobile) */}
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

        {/* View All Catalogue Banner Button */}
        {activeCategory !== 'ALL' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => handleSelectCategory('ALL')}
              className="btn-outline-gold px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>View All {servicesData.length} Services & Packages</span>
            </button>
          </div>
        )}

        {/* Bottom Booking Notice */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-[#14141c]/90 border border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-display font-bold text-[#f7e7ce]">
              Require a Custom Combination or Group Bridal Package?
            </h4>
            <p className="text-xs text-[#a09d96] mt-0.5">
              We cater to customized family packages, destination weddings, and full-wedding day bridal styling.
            </p>
          </div>
          <button
            onClick={() => onBookService(servicesData[0])}
            className="btn-outline-gold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer flex-shrink-0"
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
