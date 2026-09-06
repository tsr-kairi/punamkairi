import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Layers } from 'lucide-react';
import type { ServiceCategory } from '../../data/services';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenMenuQuickView?: () => void;
  onOpenOffersModal?: () => void;
  onNavigateToCategory?: (category: ServiceCategory) => void;
}

interface BannerSlide {
  id: string;
  title: string;
  image: string;
  targetCategory: ServiceCategory;
  categoryLabel: string;
  quickPill: string;
  badge: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 'banner-bridal',
    title: 'Bridal Makeup - Your Big Day, Our Expertise',
    image: '/assets/images/banners/banner-bridal-makeup.jpg',
    targetCategory: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    quickPill: '👰 Bridal Makeup',
    badge: 'Royal Look • 16-Hr Wear'
  },
  {
    id: 'banner-prewedding',
    title: 'Pre-Wedding Makeup - Look Picture Perfect, Naturally',
    image: '/assets/images/banners/banner-prewedding-makeup.jpg',
    targetCategory: 'WEDDING_EVENTS',
    categoryLabel: 'Wedding Ceremonies & Pre-Wedding',
    quickPill: '📸 Pre-Wedding Look',
    badge: 'Camera Ready • Natural Glow'
  },
  {
    id: 'banner-facial',
    title: 'Professional Facial Care - Healthy Skin | Natural Glow',
    image: '/assets/images/banners/banner-facial-care.jpg',
    targetCategory: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    quickPill: '🌸 Facial Care & Glow',
    badge: '24K Gold & Anti-Tan'
  },
  {
    id: 'banner-party',
    title: 'Party Makeup - Glam For Every Occasion',
    image: '/assets/images/banners/banner-party-makeup.jpg',
    targetCategory: 'PARTY_OCCASION',
    categoryLabel: 'Party & Festive Glam',
    quickPill: '💄 Party Glam',
    badge: 'High Impact • Zero Flashback'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking: _onOpenBooking,
  onOpenMenuQuickView: _onOpenMenuQuickView,
  onOpenOffersModal: _onOpenOffersModal,
  onNavigateToCategory
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(idx);
  };

  // Auto-play timer: advances every 4.5 seconds
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [nextSlide]);

  const resetTimer = () => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetTimer();
    }
    setTouchStartX(null);
  };

  const currentSlide = bannerSlides[currentSlideIndex];

  const handleBannerClick = (slide: BannerSlide) => {
    if (onNavigateToCategory) {
      onNavigateToCategory(slide.targetCategory);
    } else {
      const el = document.getElementById('services');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden pt-2 sm:pt-6 pb-6 sm:pb-12 bg-[#0a0a0c]"
    >
      {/* Ambient Gold Glow & Vignette */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[600px] bg-[#d4af37]/12 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      {/* Main Banner Slider Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 w-full">
        
        {/* Banner Carousel Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#d4af37]/45 bg-[#121217] shadow-[0_10px_40px_rgba(0,0,0,0.85)] group cursor-pointer"
        >
          {/* Aspect Ratio Box to keep 100% visible on Mobile & Desktop */}
          <div className="relative w-full aspect-[1024/535] overflow-hidden select-none">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                initial={{ opacity: 0, scale: 0.98, x: direction * 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleBannerClick(currentSlide)}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover sm:object-contain bg-[#111116]"
                  loading="eager"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Desktop Hover Hint Pill */}
            <div
              onClick={() => handleBannerClick(currentSlide)}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-[#d4af37]/60 text-xs font-bold text-[#f7e7ce] uppercase tracking-wider shadow-2xl group-hover:bg-[#d4af37] group-hover:text-black transition-all cursor-pointer"
            >
              <span>Explore {currentSlide.categoryLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>

            {/* Left Chevron Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
                resetTimer();
              }}
              aria-label="Previous Banner"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] flex items-center justify-center backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-xl opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Right Chevron Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
                resetTimer();
              }}
              aria-label="Next Banner"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 hover:border-[#d4af37] flex items-center justify-center backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-xl opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Luxury Corner Accents */}
          <div className="absolute top-0 left-0 w-3 sm:w-5 h-3 sm:h-5 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 sm:w-5 h-3 sm:h-5 border-t-2 border-r-2 border-[#d4af37] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 sm:w-5 h-3 sm:h-5 border-b-2 border-l-2 border-[#d4af37] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 sm:w-5 h-3 sm:h-5 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />
        </div>

        {/* Slide Indicators & Tap Hint */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between px-1">
          {/* Tap Banner Hint */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#d4af37] font-medium">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span className="hidden sm:inline">Click banner to explore related services</span>
            <span className="sm:hidden">Tap banner to view services</span>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {bannerSlides.map((s, idx) => {
              const isActive = currentSlideIndex === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    goToSlide(idx);
                    resetTimer();
                  }}
                  aria-label={`Go to banner ${idx + 1}`}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-6 sm:w-8 bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] shadow-md shadow-[#d4af37]/40'
                      : 'w-1.5 sm:w-2 bg-[#2a2824] hover:bg-[#4a473f]'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Quick Category Shortcut Pills */}
        <div className="mt-3.5 sm:mt-5 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#8e8c85] pl-1 flex-shrink-0 hidden md:flex">
            <Layers className="w-3 h-3 text-[#d4af37]" />
            <span>Quick Jump:</span>
          </div>
          {bannerSlides.map((slide, idx) => {
            const isSlideActive = currentSlideIndex === idx;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  goToSlide(idx);
                  handleBannerClick(slide);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 border ${
                  isSlideActive
                    ? 'bg-[#1e1e28] text-[#f7e7ce] border-[#d4af37] shadow-lg scale-[1.02]'
                    : 'bg-[#121217] text-[#b0ada5] border-[#26242c] hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                <span>{slide.quickPill}</span>
                <ArrowRight className="w-3 h-3 text-[#d4af37]" />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
