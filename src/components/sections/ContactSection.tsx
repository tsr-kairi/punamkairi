import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../common/SectionHeader';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { InstagramIcon, FacebookIcon } from '../common/SocialIcons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Connect & Inquire"
          title="GET IN TOUCH"
          subtitle="Reach out directly to discuss your date availability, consultations, and personalized packages."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111116] border border-[#26242c] p-6 sm:p-10 flex flex-col justify-between shadow-2xl space-y-8">
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase block mb-1">
                  OFFICIAL ARTISTRY STUDIO & ENQUIRIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#f7e7ce]">
                  {siteConfig.brandName} {siteConfig.businessDescriptor}
                </h3>
                <p className="text-xs text-[#a09d96] mt-1">
                  Lead Artist: <strong className="text-[#f7e7ce]">{siteConfig.artistName}</strong>
                </p>
              </div>

              {/* Phone / WhatsApp Block */}
              <div className="p-4 rounded-2xl bg-[#181822] border border-[#2a2824] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#222230] border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8e8c85]">Phone / WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-[#f7e7ce]">
                      {siteConfig.whatsappDisplay}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getPhoneCallUrl()}
                    className="p-2.5 rounded-lg bg-[#252536] hover:bg-[#d4af37] text-white hover:text-black transition-colors"
                    title="Call Now"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-300 hover:text-white transition-colors"
                    title="WhatsApp Message"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Address Block */}
              <div className="p-4 rounded-2xl bg-[#181822] border border-[#2a2824] flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#222230] border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8e8c85]">Studio Location</div>
                    <div className="text-xs sm:text-sm font-medium text-[#f7e7ce] leading-relaxed">
                      {siteConfig.address.full}
                    </div>
                    <div className="text-[11px] text-[#a09d96] mt-1">
                      {siteConfig.policy.onLocationTravel}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={getPhoneCallUrl()}
                className="btn-outline-gold py-3 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>CALL NOW</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-3 px-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#0a0a0c]" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#1c1c26] hover:bg-[#252533] border border-white/10 hover:border-[#d4af37]/40 text-xs font-semibold text-[#f7e7ce] tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Social Channels & Monogram Seal (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111116] border border-[#26242c] p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase block mb-1">
                SOCIAL SHOWCASE
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#f7e7ce] mb-3">
                Follow The Journey
              </h3>
              <p className="text-xs text-[#a09d96] font-light leading-relaxed">
                Stay updated with recent bridal transformations, behind-the-scenes artistry clips, and seasonal announcements.
              </p>
            </div>

            {/* Social Links List */}
            <div className="space-y-3">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#181822] border border-[#2a2824] hover:border-[#d4af37]/40 hover:bg-[#1e1e2b] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#222230] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                      {social.id === 'instagram' ? <InstagramIcon className="w-4 h-4" /> : <FacebookIcon className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#f7e7ce]">
                        {social.platform}
                      </div>
                      <div className="text-[11px] text-[#a09d96]">
                        {social.handle}
                      </div>
                    </div>
                  </div>

                  <ExternalLink className="w-4 h-4 text-[#8e8c85] group-hover:text-[#d4af37] transition-colors" />
                </a>
              ))}
            </div>

            {/* Luxury Brand Seal */}
            <div className="pt-4 border-t border-[#222128] flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/50 flex-shrink-0">
                <img
                  src={siteConfig.branding.logoImage}
                  alt="PK Monogram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-display font-bold text-[#f7e7ce] tracking-wider uppercase">
                  PUNAM KAIRI MAKEUP ARTISTRY
                </div>
                <div className="text-[10px] text-[#d4af37] font-serif-luxury italic">
                  "{siteConfig.tagline}"
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
