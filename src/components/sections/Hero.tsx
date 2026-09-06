import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles, ArrowRight, ShieldCheck, MapPin, BookOpen, ChevronLeft, ChevronRight, Gift } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenMenuQuickView?: () => void;
  onOpenOffersModal?: () => void;
}

interface HeroSlide {
  id: string;
  badge: string;
  badgeIcon?: 'sparkles' | 'gift';
  titlePrefix: string;
  titleHighlight: string;
  quote: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  image: string;
  artistBadgeName?: string;
  artistBadgeRole?: string;
  artistBadgeExp?: string;
  actionType?: 'booking' | 'offer';
}

const slides: HeroSlide[] = [
  {
    id: 'slide-artist',
    badge: `${siteConfig.experience} OF ARTISTRY • SRIBHUMI, ASSAM`,
    badgeIcon: 'sparkles',
    titlePrefix: 'PUNAM KAIRI',
    titleHighlight: 'MAKEUP ARTISTRY',
    quote: siteConfig.tagline,
    description: `Bespoke luxury bridal transformations, radiant engagement makeovers, and camera-calibrated artistry by professional makeup artist Mrs. Punam Kairi.`,
    primaryCtaText: 'BOOK LOOK',
    secondaryCtaText: 'SERVICES MENU',
    image: siteConfig.branding.artistHeroImage,
    artistBadgeName: siteConfig.artistName,
    artistBadgeRole: 'Lead Artist',
    artistBadgeExp: '4+ Years'
  },
  {
    id: 'slide-durga-puja',
    badge: '🌸 DURGA PUJA SPECIAL',
    badgeIcon: 'gift',
    titlePrefix: 'DURGA PUJA',
    titleHighlight: 'FESTIVE GLOW',
    quote: '24K Gold Facials, De-Tan Glow & Pandal Glam',
    description: 'Get festival-ready glowing skin & waterproof 12-hour pandal hopping glam. Exclusive festive deals active now!',
    primaryCtaText: 'CLAIM OFFER',
    secondaryCtaText: 'PUJA MENU',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    artistBadgeName: 'Festive Beauty Pass',
    artistBadgeRole: 'Limited Slots',
    artistBadgeExp: 'Active Now',
    actionType: 'offer'
  },
  {
    id: 'slide-bridal',
    badge: 'ROYAL BRIDAL COUTURE',
    badgeIcon: 'sparkles',
    titlePrefix: 'ROYAL BRIDAL',
    titleHighlight: 'TRANSFORMATIONS',
    quote: 'Flawless, Tear-Resistant & 4K Camera-Ready',
    description: '16-Hour long-wear HD & Airbrush bases formulated specifically for diverse Indian skin undertones with jewelry draping.',
    primaryCtaText: 'BOOK BRIDAL',
    secondaryCtaText: 'BRIDAL LOOKS',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85',
    artistBadgeName: 'Bridal Artistry',
    artistBadgeRole: 'HD Specialist',
    artistBadgeExp: '16-Hr Wear'
  },
  {
    id: 'slide-reception',
    badge: 'EVENING GLAMOUR',
    badgeIcon: 'sparkles',
    titlePrefix: 'RECEPTION &',
    titleHighlight: 'RED CARPET GLAM',
    quote: 'Sculpted Highlighting & Hypnotic Eye Artistry',
    description: 'Sophisticated evening glam tailored to artificial ballroom lighting with zero-flashback finish.',
    primaryCtaText: 'BOOK GLAM',
    secondaryCtaText: 'BROWSE GALLERY',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1200&q=85',
    artistBadgeName: 'Evening Glamour',
    artistBadgeRole: 'Studio Calibrated',
    artistBadgeExp: 'Zero Flash'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenMenuQuickView,
  onOpenOffersModal
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(idx);
  };

  // Robust Auto-slide timer: advances every 4.5 seconds
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

  const currentSlide = slides[currentSlideIndex];

  const handlePrimaryCta = () => {
    if (currentSlide.actionType === 'offer' && onOpenOffersModal) {
      onOpenOffersModal();
    } else {
      onOpenBooking();
    }
  };

  const handleSecondaryCta = () => {
    if (onOpenMenuQuickView) {
      onOpenMenuQuickView();
    } else {
      const el = document.getElementById('services');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative flex items-center justify-center overflow-hidden pt-4 pb-6 sm:pt-10 sm:pb-16 bg-[#0a0a0c]"
    >
      {/* Ambient Gold Glow & Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-[#d4af37]/12 rounded-full blur-[110px] sm:blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-6 right-6 w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] bg-[#c5a059]/8 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Slide Content (Left Text, Right Image on BOTH Mobile and Desktop) */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-12 gap-3 sm:gap-8 lg:gap-14 items-center"
          >
            {/* LEFT COLUMN: Content (7 cols on mobile, 7 cols on desktop) */}
            <div className="col-span-7 sm:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#d4af37]/45 bg-[#14141d]/90 backdrop-blur-md text-[#f3e5ab] text-[9px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase mb-2 sm:mb-5 shadow-xl whitespace-nowrap">
                {currentSlide.badgeIcon === 'gift' ? (
                  <Gift className="w-3 h-3 text-[#d4af37] animate-bounce flex-shrink-0" />
                ) : (
                  <Sparkles className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                )}
                <span className="truncate">{currentSlide.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-[#f7e7ce] tracking-tight leading-[1.1] uppercase mb-1 sm:mb-2">
                {currentSlide.titlePrefix}
                <span className="block text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gold-gradient font-light tracking-[0.14em] mt-0.5 sm:mt-1.5">
                  {currentSlide.titleHighlight}
                </span>
              </h1>

              {/* Quote / Subtitle */}
              <div className="relative my-1.5 sm:my-4">
                <p className="text-xs sm:text-lg md:text-xl text-[#f3e5ab] font-serif-luxury italic tracking-wide font-normal leading-snug line-clamp-2 sm:line-clamp-none">
                  "{currentSlide.quote}"
                </p>
                <div className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-r from-[#d4af37]/70 via-[#d4af37] to-transparent mt-1.5 sm:mt-2.5" />
              </div>

              {/* Description (Visible on tablets & desktop, condensed on small mobile) */}
              <p className="hidden sm:block max-w-xl text-xs sm:text-sm md:text-base text-[#cfccc4] font-light leading-relaxed mb-4 sm:mb-7">
                {currentSlide.description}
              </p>

              {/* Action Buttons (Left-Aligned, Compact on Mobile) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3.5 w-full sm:w-auto mt-1 sm:mt-2">
                <button
                  onClick={handlePrimaryCta}
                  className="btn-gold px-3.5 sm:px-6 py-2 sm:py-3.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-xl cursor-pointer active:scale-95 transition-transform whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0a0a0c] flex-shrink-0" />
                  <span>{currentSlide.primaryCtaText}</span>
                  <ArrowRight className="w-3 h-3 text-[#0a0a0c] hidden sm:inline flex-shrink-0" />
                </button>

                <button
                  onClick={handleSecondaryCta}
                  className="btn-outline-gold px-3 sm:px-5 py-2 sm:py-3.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform whitespace-nowrap"
                >
                  <BookOpen className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                  <span>{currentSlide.secondaryCtaText}</span>
                </button>
              </div>

              {/* Desktop Trust Badges */}
              <div className="hidden lg:grid grid-cols-3 gap-3 pt-6 border-t border-[#2a2824]/80 mt-6 w-full">
                <div className="flex items-center gap-2 text-left">
                  <div className="p-1.5 rounded-lg bg-[#16161d] border border-[#d4af37]/25 text-[#d4af37] flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#f7e7ce]">International Kits</div>
                    <div className="text-[9px] text-[#a09d96]">Luxury Cosmetics</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-left">
                  <div className="p-1.5 rounded-lg bg-[#16161d] border border-[#d4af37]/25 text-[#d4af37] flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#f7e7ce]">4K Camera Ready</div>
                    <div className="text-[9px] text-[#a09d96]">HD & Airbrush</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-left">
                  <div className="p-1.5 rounded-lg bg-[#16161d] border border-[#d4af37]/25 text-[#d4af37] flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#f7e7ce]">Venue & Doorstep</div>
                    <div className="text-[9px] text-[#a09d96]">Assam & Beyond</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Image (5 cols on mobile, 5 cols on desktop) */}
            <div className="col-span-5 sm:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[200px] sm:max-w-[340px] lg:max-w-none">
                
                {/* Glow Halo */}
                <div className="absolute -inset-1.5 sm:-inset-3 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#d4af37]/35 via-[#c5a059]/10 to-transparent blur-md pointer-events-none" />
                
                {/* Image Card */}
                <div className="relative rounded-xl sm:rounded-3xl overflow-hidden border border-[#d4af37]/45 bg-[#121216] shadow-2xl aspect-[3.2/4.4] sm:aspect-[3/4] group">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.titlePrefix}
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Cinematic Vignette Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/15 to-black/25 pointer-events-none" />

                  {/* Slide Pill at Bottom of Image */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#0e0e14]/90 backdrop-blur-md border border-[#d4af37]/35 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-hidden">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-[#d4af37] bg-black flex-shrink-0">
                        <img
                          src={siteConfig.branding.logoImage}
                          alt="PK Monogram"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] sm:text-xs font-bold text-[#f7e7ce] tracking-wide leading-none truncate">
                          {currentSlide.artistBadgeName}
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-[#d4af37] tracking-wider uppercase mt-0.5 font-semibold leading-none truncate">
                          {currentSlide.artistBadgeRole}
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 pl-1">
                      <div className="text-[10px] sm:text-xs font-bold text-[#f3e5ab] leading-none">
                        {currentSlide.artistBadgeExp}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Luxury Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#d4af37]" />
                <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#d4af37]" />
                <div className="absolute -bottom-1 -left-1 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#d4af37]" />
                <div className="absolute -bottom-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#d4af37]" />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Manual Controls & Progress Indicators */}
        <div className="mt-3 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4">
          {/* Prev Arrow */}
          <button
            onClick={() => {
              prevSlide();
              resetTimer();
            }}
            aria-label="Previous Slide"
            className="p-1.5 sm:p-2 rounded-full bg-[#16161e] border border-[#2a2824] hover:border-[#d4af37] text-[#cfccc4] hover:text-[#d4af37] transition-all cursor-pointer active:scale-90"
          >
            <ChevronLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </button>

          {/* Dots & Progress Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((s, idx) => {
              const isActive = currentSlideIndex === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    goToSlide(idx);
                    resetTimer();
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-6 sm:w-8 bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] shadow-md shadow-[#d4af37]/30'
                      : 'w-1.5 sm:w-2 bg-[#2a2824] hover:bg-[#4a473f]'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            onClick={() => {
              nextSlide();
              resetTimer();
            }}
            aria-label="Next Slide"
            className="p-1.5 sm:p-2 rounded-full bg-[#16161e] border border-[#2a2824] hover:border-[#d4af37] text-[#cfccc4] hover:text-[#d4af37] transition-all cursor-pointer active:scale-90"
          >
            <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
