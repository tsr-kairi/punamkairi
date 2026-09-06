import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { InstagramIcon, FacebookIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#1c1b22] text-[#a09d96] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1c1b22]">
          
          {/* Col 1: Brand & Tagline (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#d4af37]/60 p-0.5 bg-[#121216]">
                <img
                  src={siteConfig.branding.logoImage}
                  alt="Punam Kairi Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-[0.15em] text-[#f7e7ce] leading-none">
                  PUNAM KAIRI
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-medium uppercase mt-0.5 leading-none">
                  MAKEUP ARTISTRY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-serif-luxury italic text-[#f3e5ab] max-w-sm">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-[#8e8c85] leading-relaxed max-w-sm font-light">
              Bespoke bridal, engagement, and occasion makeup artistry by Mrs. Punam Kairi. Based in Sribhumi, Assam with on-location venue travel services.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.socialLinks.find(s => s.id === 'instagram')?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#14141a] border border-[#2a2824] hover:border-[#d4af37] text-[#d4af37] flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.find(s => s.id === 'facebook')?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#14141a] border border-[#2a2824] hover:border-[#d4af37] text-[#d4af37] flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#14141a] border border-[#2a2824] hover:border-emerald-500 text-emerald-400 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f7e7ce] font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#d4af37] transition-colors">Home Experience</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">Meet Punam Kairi</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Services & Packages</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Portfolio Transformations</a>
              </li>
              <li>
                <a href="#artistry" className="hover:text-[#d4af37] transition-colors">Artistry Techniques</a>
              </li>
              <li>
                <a href="#qrcode" className="hover:text-[#d4af37] transition-colors">Scan & Book QR Pass</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f7e7ce] font-display">
              Studio & Booking
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-[#cfccc4]">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#cfccc4]">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a href={getPhoneCallUrl()} className="hover:text-[#d4af37]">{siteConfig.whatsappDisplay}</a>
              </div>
              <div className="flex items-center gap-2.5 text-[#cfccc4]">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                  Chat directly on WhatsApp
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#f3e5ab] font-medium tracking-wider uppercase cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6e6b64]">
          <div>
            © 2026 {siteConfig.brandName} {siteConfig.businessDescriptor}. All Rights Reserved.
          </div>
          <div className="text-center sm:text-right text-[10px] text-[#8e8c85]">
            Crafted for Excellence & Timeless Beauty
          </div>
        </div>

      </div>
    </footer>
  );
};
