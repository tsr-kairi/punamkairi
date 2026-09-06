import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Check, ChevronDown, MessageCircle, Phone, Image as ImageIcon, MapPin, Share2, Gift } from 'lucide-react';
import { servicesData, serviceCategories } from '../../data/services';
import type { ServiceCategory, ServiceItem } from '../../data/services';
import { durgaPujaFestiveOffers } from '../../data/offers';
import { siteConfig } from '../../data/siteConfig';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../../utils/whatsapp';

interface DigitalMenuQuickViewProps {
  onSelectServiceToBook: (service: ServiceItem) => void;
  onSwitchToFullSite: () => void;
  onOpenOffersModal?: () => void;
}

export const DigitalMenuQuickView: React.FC<DigitalMenuQuickViewProps> = ({
  onSelectServiceToBook,
  onSwitchToFullSite,
  onOpenOffersModal
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'ALL'>('BRIDAL');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filteredServices = activeCategory === 'ALL'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${siteConfig.brandName} - Digital Services Menu`,
        text: `Explore makeup services by ${siteConfig.artistName}`,
        url: window.location.href,
      }).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f5f2ea] pb-24 selection:bg-[#d4af37]/30">
      
      {/* Sticky Top App Bar */}
      <header className="sticky top-0 z-40 glass-nav border-b border-[#d4af37]/20 px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 overflow-hidden bg-[#14141c] p-0.5 shadow-md flex-shrink-0">
              <img
                src={siteConfig.branding.logoImage}
                alt="Punam Kairi Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-[#f7e7ce] block leading-none">
                PUNAM KAIRI
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#d4af37] font-semibold uppercase mt-0.5 block leading-none">
                DIGITAL SERVICE MENU
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-[#181822] text-[#d4af37] border border-[#2a2824] active:scale-95 transition-transform"
              aria-label="Share Menu"
              title="Share"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onSwitchToFullSite}
              className="px-3 py-1.5 rounded-full bg-[#181822] hover:bg-[#252533] border border-[#d4af37]/30 text-[10px] font-semibold text-[#f3e5ab] uppercase tracking-wider flex items-center gap-1 active:scale-95 transition-transform"
            >
              <ImageIcon className="w-3 h-3 text-[#d4af37]" />
              <span>Full Site</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-xl mx-auto px-4 pt-4">
        
        {/* Festive Durga Puja Banner Inside Menu */}
        {durgaPujaFestiveOffers.enabled && onOpenOffersModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onOpenOffersModal}
            className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-[#6b1010] via-[#8c1717] to-[#5e0d0d] border border-[#d4af37] shadow-xl flex items-center justify-between gap-3 cursor-pointer group active:scale-98 transition-transform"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#d4af37] text-black flex items-center justify-center flex-shrink-0 font-bold shadow animate-bounce">
                <Gift className="w-4 h-4 text-black" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#fceade] tracking-wider">
                  🌸 Durga Puja & Launch Offer
                </div>
                <div className="text-xs font-bold text-white leading-tight">
                  Flat Festive Discounts & Free Perks!
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenOffersModal();
              }}
              className="px-3 py-1.5 rounded-full bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider shadow whitespace-nowrap"
            >
              VIEW OFFERS
            </button>
          </motion.div>
        )}

        {/* Welcome Artist Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-gradient-to-r from-[#14141c] via-[#1a1a24] to-[#14141c] border border-[#d4af37]/30 shadow-xl mb-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#f3e5ab] text-[10px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>Verified Artistry Menu</span>
              </div>
              <h1 className="text-base sm:text-lg font-display font-bold text-[#f7e7ce]">
                {siteConfig.artistName}
              </h1>
              <p className="text-[11px] text-[#a09d96] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#d4af37]" />
                <span>Sribhumi, Assam • 4+ Years Artistry</span>
              </p>
            </div>

            <div className="flex flex-col items-end gap-1.5">
              <a
                href={getPhoneCallUrl()}
                className="px-2.5 py-1 rounded-lg bg-[#222230] border border-[#d4af37]/40 text-[#f3e5ab] text-[10px] font-semibold flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#d4af37]" />
                <span>Call</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[10px] font-semibold flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Sticky Nav */}
        <div className="sticky top-[61px] z-30 bg-[#0a0a0c]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-[#1c1b24] mb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {/* All Pill */}
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                activeCategory === 'ALL'
                  ? 'btn-gold shadow-md text-black'
                  : 'bg-[#14141c] text-[#a8a59e] border border-[#2a2824] active:bg-[#1f1f2a]'
              }`}
            >
              <span>All ({servicesData.length})</span>
            </button>

            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = servicesData.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'btn-gold shadow-md text-black'
                      : 'bg-[#14141c] text-[#a8a59e] border border-[#2a2824] active:bg-[#1f1f2a]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/30 text-black font-bold' : 'bg-[#22212c] text-[#8e8c85]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {filteredServices.map((service) => {
                const isExpanded = expandedServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    className="rounded-2xl bg-[#121217] border border-[#26242c] overflow-hidden shadow-lg hover:border-[#d4af37]/40 transition-colors"
                  >
                    {/* Service Banner Image */}
                    <div className="relative h-44 sm:h-48 w-full bg-[#181820]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[9px] font-semibold text-[#f7e7ce] uppercase tracking-wider">
                          {service.categoryLabel}
                        </span>
                        {service.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-[#d4af37] text-black text-[9px] font-bold uppercase tracking-wider shadow">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[10px] text-[#e0ddd5] border border-white/10 font-medium">
                        <Clock className="w-3 h-3 text-[#d4af37]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#f7e7ce] leading-snug">
                          {service.name}
                        </h3>
                        <p className="text-xs text-[#d4af37] font-serif-luxury italic mt-0.5">
                          "{service.tagline}"
                        </p>
                        <p className="text-xs text-[#a09d96] font-light mt-1.5 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Included Items Accordion */}
                      <div className="pt-2 border-t border-[#1f1e26]">
                        <button
                          onClick={() => toggleExpand(service.id)}
                          className="w-full flex items-center justify-between text-[11px] font-semibold text-[#d5d1c8] uppercase tracking-wider py-1 cursor-pointer"
                        >
                          <span>What's Included ({service.includedItems.length} steps)</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isExpanded ? (
                          <div className="mt-2 space-y-1.5 pt-1">
                            {service.includedItems.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-[#cfccc4]">
                                <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {service.includedItems.slice(0, 3).map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded bg-[#181822] text-[10px] text-[#a09d96]"
                              >
                                • {item}
                              </span>
                            ))}
                            {service.includedItems.length > 3 && (
                              <span className="text-[10px] text-[#d4af37] font-medium self-center pl-1">
                                +{service.includedItems.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Bottom Price & Action */}
                      <div className="pt-3 border-t border-[#1f1e26] flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-[#8e8c85]">
                            Price
                          </div>
                          <div className="text-sm sm:text-base font-display font-bold text-gold-gradient">
                            {service.price}
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectServiceToBook(service)}
                          className="btn-gold py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg active:scale-95 transition-transform cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#0a0a0c]" />
                          <span>BOOK ON WHATSAPP</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Switch to Full Experience Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-[#14141c] border border-[#d4af37]/30 text-center space-y-3">
          <h4 className="font-display font-bold text-sm text-[#f7e7ce]">
            Want to see transformations & client portfolio?
          </h4>
          <p className="text-xs text-[#a09d96]">
            View the complete high-resolution gallery, artist background, and studio credentials.
          </p>
          <button
            onClick={onSwitchToFullSite}
            className="w-full btn-outline-gold py-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>EXPLORE FULL PORTFOLIO & STORY</span>
          </button>
        </div>

      </div>

      {/* Sticky Bottom Dock */}
      <aside aria-label="Quick booking actions" className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c10]/95 backdrop-blur-xl border-t border-[#d4af37]/25 p-2.5 px-4 shadow-2xl">
        <div className="max-w-xl mx-auto grid grid-cols-2 gap-2.5">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>WHATSAPP</span>
          </a>

          <button
            onClick={() => onSelectServiceToBook(filteredServices[0] || servicesData[0])}
            className="btn-gold flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform shadow-lg cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0a0a0c] flex-shrink-0" />
            <span>BOOK SERVICE</span>
          </button>
        </div>
      </aside>

    </div>
  );
};
