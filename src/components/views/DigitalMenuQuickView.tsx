import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Phone, Image as ImageIcon, MapPin, Share2, Gift } from 'lucide-react';
import { servicesData, serviceCategories } from '../../data/services';
import type { ServiceCategory, ServiceItem } from '../../data/services';
import { durgaPujaFestiveOffers } from '../../data/offers';
import { siteConfig } from '../../data/siteConfig';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { ServiceCard } from '../sections/ServiceCard';
import { ServiceDetailModal } from '../sections/ServiceDetailModal';

interface DigitalMenuQuickViewProps {
  onSelectServiceToBook: (service: ServiceItem) => void;
  onSwitchToFullSite: () => void;
  onOpenOffersModal?: () => void;
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

export const DigitalMenuQuickView: React.FC<DigitalMenuQuickViewProps> = ({
  onSelectServiceToBook,
  onSwitchToFullSite,
  onOpenOffersModal
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'ALL'>('BRIDAL');
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'ALL'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const handleShare = () => {
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/menu` : 'https://punamkairi.com/menu';
    if (navigator.share) {
      navigator.share({
        title: `${siteConfig.brandName} - Digital Services Menu`,
        text: `Explore makeup & facial services by ${siteConfig.artistName}: ${shareUrl}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Menu link copied to clipboard: ' + shareUrl);
    }
  };

  const currentCategoryInfo = serviceCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f5f2ea] pb-28 selection:bg-[#d4af37]/30">
      
      {/* Sticky Top App Bar */}
      <header className="sticky top-0 z-40 glass-nav border-b border-[#d4af37]/20 px-3 sm:px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/60 overflow-hidden bg-[#14141c] p-0.5 shadow-md flex-shrink-0">
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
              <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.2em] text-[#d4af37] font-semibold uppercase mt-0.5 block leading-none">
                DIGITAL SERVICE MENU
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-[#181822] hover:bg-[#252533] text-[#d4af37] border border-[#2a2824] active:scale-95 transition-all cursor-pointer"
              aria-label="Share Menu"
              title="Share Menu Link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onSwitchToFullSite}
              className="px-3.5 py-1.5 rounded-full bg-[#181822] hover:bg-[#252533] border border-[#d4af37]/30 text-[10.5px] sm:text-xs font-semibold text-[#f3e5ab] uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Full Portfolio</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-4">
        
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
          
          <div className="flex items-center justify-between gap-2">
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
                <span>Lowairpoa, Sribhumi, Assam • 4+ Years Experience</span>
              </p>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <a
                href={getPhoneCallUrl()}
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#222230] border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-semibold flex items-center gap-1"
                title="Call Studio"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden sm:inline">Call</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Sticky Nav (Creamy App-Style Chips) */}
        <div className="sticky top-[61px] z-30 bg-[#0a0a0c]/95 backdrop-blur-md py-2.5 -mx-3 sm:-mx-6 px-3 sm:px-6 border-b border-[#1c1b24] mb-5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
            {/* All Pill */}
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 border shadow-sm active:scale-95 ${
                activeCategory === 'ALL'
                  ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-black border-transparent shadow-[0_2px_15px_rgba(212,175,55,0.35)] font-extrabold'
                  : 'bg-[#14141d] text-[#b0ada5] border-[#292736] hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              <span>{categoryIcons['ALL']}</span>
              <span>All ({servicesData.length})</span>
            </button>

            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = servicesData.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 border shadow-sm active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-black border-transparent shadow-[0_2px_15px_rgba(212,175,55,0.35)] font-extrabold'
                      : 'bg-[#14141d] text-[#b0ada5] border-[#292736] hover:border-[#d4af37]/40 hover:text-white font-semibold'
                  }`}
                >
                  <span>{categoryIcons[cat.id] || '✨'}</span>
                  <span>{cat.label}</span>
                  <span className={`text-[9.5px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/30 text-black font-black' : 'bg-[#222130] text-[#8e8c85]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description Banner */}
        {currentCategoryInfo && (
          <div className="text-center max-w-xl mx-auto mb-5 px-2">
            <p className="text-xs text-[#e8d5b5] font-serif-luxury italic tracking-wide">
              "{currentCategoryInfo.description}"
            </p>
          </div>
        )}

        {/* Services Grid with Same ServiceCard Component */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookService={onSelectServiceToBook}
                onOpenDetails={(s) => setSelectedDetailService(s)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Switch to Full Experience Banner */}
        <div className="mt-10 p-5 rounded-3xl bg-gradient-to-r from-[#161622] via-[#14141c] to-[#121218] border border-[#d4af37]/30 text-center space-y-3 shadow-xl">
          <h4 className="font-display font-bold text-sm text-[#f7e7ce]">
            Looking for Real Bridal Transformations & Complete Story?
          </h4>
          <p className="text-xs text-[#a09d96]">
            View the high-resolution client photoshoot gallery, artist background, and studio credentials on our full site.
          </p>
          <button
            onClick={onSwitchToFullSite}
            className="btn-outline-gold px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>EXPLORE FULL PORTFOLIO & STORY</span>
          </button>
        </div>

      </div>

      {/* Sticky Bottom Dock */}
      <aside aria-label="Quick booking actions" className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c10]/95 backdrop-blur-xl border-t border-[#d4af37]/25 p-2.5 px-4 shadow-2xl">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-2.5">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>WHATSAPP</span>
          </a>

          <button
            onClick={() => onSelectServiceToBook(filteredServices[0] || servicesData[0])}
            className="btn-gold flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform shadow-lg cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0a0a0c] flex-shrink-0" />
            <span>BOOK SERVICE</span>
          </button>
        </div>
      </aside>

      {/* Service Detail Modal for Full Screen Preview */}
      <ServiceDetailModal
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onBookService={(s) => {
          setSelectedDetailService(null);
          onSelectServiceToBook(s);
        }}
      />

    </div>
  );
};
