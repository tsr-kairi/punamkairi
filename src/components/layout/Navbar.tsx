import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Calendar, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMenuQuickView?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMenuQuickView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  // Clean, essential navigation links for desktop
  const desktopNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Artistry', href: '#artistry' },
    { label: 'QR Pass', href: '#qrcode' },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Meet Punam (About)', href: '#about' },
    { label: 'Services & Packages', href: '#services' },
    { label: 'Portfolio Transformations', href: '#portfolio' },
    { label: 'Signature Artistry', href: '#artistry' },
    { label: 'Scan & Book QR Pass', href: '#qrcode' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-2xl py-2.5 sm:py-3 border-b border-[#d4af37]/25'
            : 'bg-[#0a0a0c]/95 backdrop-blur-md py-3 sm:py-4 border-b border-[#d4af37]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Title (Left) */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 border border-[#d4af37]/60 group-hover:border-[#d4af37] transition-all bg-[#121216] flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
              <img
                src={siteConfig.branding.logoImage}
                alt="Punam Kairi Emblem"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-base tracking-[0.14em] text-[#f7e7ce] group-hover:text-white transition-colors leading-none whitespace-nowrap">
                PUNAM KAIRI
              </span>
              <span className="text-[8px] sm:text-[9.5px] tracking-[0.24em] text-[#d4af37] font-semibold uppercase mt-0.5 leading-none whitespace-nowrap">
                MAKEUP ARTISTRY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Center - Balanced & Spacious) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-shrink-0">
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] xl:text-xs tracking-[0.12em] uppercase text-[#cfccc4] hover:text-[#f3e5ab] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area (Right - Clean & Uncluttered) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            {onOpenMenuQuickView && (
              <button
                onClick={onOpenMenuQuickView}
                className="btn-outline-gold px-3.5 py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 transition-transform"
                title="Open Focused Digital Service Menu"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Digital Menu</span>
              </button>
            )}

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-full border border-emerald-500/35 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-400 transition-all flex-shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-gold px-5 py-2.5 rounded-full text-[11px] xl:text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg cursor-pointer whitespace-nowrap active:scale-95 transition-transform flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0a0a0c]" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Right Controls (<1024px) */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="btn-gold px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3 h-3" />
              <span>BOOK</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-[#14141c] border border-[#d4af37]/30 text-[#f7e7ce] active:bg-[#20202c] transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-[#d4af37]" />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer Modal (Eliminates double-logo glitch) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-5 overflow-y-auto"
          >
            {/* Drawer Top Header (Single Clean Logo + Close Button) */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2a2824]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d4af37] bg-[#121216] p-0.5 shadow-lg flex-shrink-0">
                  <img
                    src={siteConfig.branding.logoImage}
                    alt="Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-wider text-[#f7e7ce]">
                    PUNAM KAIRI
                  </span>
                  <span className="text-[9px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
                    MAKEUP ARTISTRY
                  </span>
                </div>
              </div>

              <button
                onClick={closeMenu}
                className="p-2.5 rounded-full bg-[#1c1c26] text-[#f7e7ce] border border-[#d4af37]/30 hover:border-[#d4af37] active:scale-95 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#d4af37]" />
              </button>
            </div>

            {/* Navigation Links with animated entries */}
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
              }}
              className="flex flex-col space-y-2 py-6"
            >
              {onOpenMenuQuickView && (
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenMenuQuickView();
                  }}
                  className="w-full text-left p-3.5 rounded-2xl bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-transparent border border-[#d4af37]/50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#f3e5ab] mb-2 shadow-lg cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#d4af37]" />
                    <span>View Digital Services Menu</span>
                  </div>
                  <span>→</span>
                </button>
              )}

              {mobileNavLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="text-sm font-medium tracking-wider uppercase text-[#e0ddd5] hover:text-[#d4af37] py-3 px-4 rounded-xl hover:bg-[#181824] transition-colors flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#d4af37]/60">→</span>
                </motion.a>
              ))}
            </motion.nav>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-[#2a2824]">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenBooking();
                }}
                className="w-full btn-gold py-3.5 rounded-2xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0a0a0c]" />
                <span>BOOK APPOINTMENT NOW</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={getPhoneCallUrl()}
                  className="py-3 px-3 rounded-xl border border-[#d4af37]/30 text-[#f3e5ab] bg-[#181822] text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Artist</span>
                </a>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl border border-emerald-500/40 text-emerald-300 bg-emerald-950/40 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center text-[10px] text-[#8e8c85] pt-2">
                PUNAM KAIRI MAKEUP ARTISTRY • SRIBHUMI, ASSAM
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
