import React from 'react';
import { Award, Sparkles, ShieldCheck, CheckCircle2, Camera, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "4+ Years of Dedicated Artistry",
      description: "Extensive expertise creating refined bridal and occasion looks that celebrate diverse individual beauty."
    },
    {
      icon: Sparkles,
      title: "Skin-Tone-Aware Precision",
      description: "Every base is custom blended to match your natural undertone seamlessly without ashiness or oxidization."
    },
    {
      icon: ShieldCheck,
      title: "Authentic International Products",
      description: "Strictly genuine, professional-grade HD & Airbrush cosmetics ensuring radiant, long-lasting performance."
    },
    {
      icon: Camera,
      title: "4K Camera & Studio Flash Ready",
      description: "Specialized formulation that prevents flashback and looks mesmerizing both in real life and high-res cameras."
    },
    {
      icon: CheckCircle2,
      title: "Hospital-Grade Sanitization",
      description: "Sterilized brushes, disposable wands, and stainless steel palettes guarantee strict hygiene for every client."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Personal Attention",
      description: "One-on-one attention without parlour rushing. We focus exclusively on perfecting your desired look."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="The Gold Standard"
          title="WHY CHOOSE PUNAM KAIRI?"
          subtitle="An unmatched commitment to craftsmanship, luxury aesthetics, and client trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#111116] border border-[#26242c] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#181822] border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-[#f7e7ce] group-hover:text-[#f3e5ab] transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a09d96] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
