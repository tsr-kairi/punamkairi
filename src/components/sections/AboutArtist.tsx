import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../common/SectionHeader';

interface AboutArtistProps {
  onOpenBooking: () => void;
}

export const AboutArtist: React.FC<AboutArtistProps> = ({ onOpenBooking }) => {
  const coreValues = [
    {
      title: "Skin-Tone-Aware Artistry",
      desc: "Every face has a distinct undertone. We formulate bases that accentuate your natural radiance without looking chalky or masked."
    },
    {
      title: "16-Hour Durability",
      desc: "Specialized sweat-proof, tear-resistant techniques designed for intense Indian wedding rituals and long celebration hours."
    },
    {
      title: "High-End Cosmetic Vault",
      desc: "Utilizing internationally acclaimed cosmetic lines that are non-comedogenic, cruelty-free, and safe for delicate skin."
    },
    {
      title: "Hospital-Grade Hygiene",
      desc: "Freshly sanitized brush sets, stainless steel mixing palettes, and disposable wands for every client without exception."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#0d0d10] border-y border-[#1c1b22] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="The Philosophy"
          title="MEET THE ARTIST"
          subtitle="Makeup is not just beauty — it is personal artistry and empowered confidence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Circular Monogram Stamp (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Luxury Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-[#14141a]">
                <img
                  src={siteConfig.branding.artistPortraitSquare}
                  alt={siteConfig.artistName}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 text-center p-3 rounded-xl bg-black/70 backdrop-blur-md border border-[#d4af37]/20">
                  <span className="font-display font-bold text-sm text-[#f7e7ce] tracking-widest uppercase block">
                    {siteConfig.artistName}
                  </span>
                  <span className="text-[11px] text-[#d4af37] tracking-wider uppercase font-medium">
                    Professional Makeup Artist • Sribhumi, Assam
                  </span>
                </div>
              </div>

              {/* Decorative Floating Emblem */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full border-2 border-[#d4af37] bg-[#0e0e12] p-1 shadow-2xl hidden sm:flex items-center justify-center">
                <img
                  src={siteConfig.branding.logoImage}
                  alt="PK Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span>4+ Years of Professional Dedication</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#f7e7ce] leading-tight">
              Crafting Personalized Masterpieces For Your Unforgettable Moments.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#cfccc4] font-light leading-relaxed">
              <p>
                Welcome to <strong className="text-[#f7e7ce] font-medium">PUNAM KAIRI MAKEUP ARTISTRY</strong>. I am <strong className="text-[#f7e7ce] font-medium">Mrs. Punam Kairi</strong>, a dedicated professional makeup artist based in Sribhumi, Assam.
              </p>
              <p>
                My philosophy is grounded in one foundational belief: makeup is never about masking who you are, but about elevating your innate beauty with poise, precision, and refined luxury. Over the past 4+ years, I have specialized in crafting bespoke bridal looks, sophisticated engagement makeovers, and glamorous red-carpet transformations.
              </p>
              <p>
                Unlike generic beauty parlours, every appointment here is treated as a private couture session. From in-depth skin consultation and tone-calibrated foundation mixing to intricate eye artistry and complete jewelry draping, every nuance is executed with supreme care.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#121216]/90 border border-[#2a2824] hover:border-[#d4af37]/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <h4 className="text-xs sm:text-sm font-semibold text-[#f7e7ce] tracking-wide">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#a09d96] leading-relaxed pl-6">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-gold px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                REQUEST A SESSION WITH PUNAM
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
