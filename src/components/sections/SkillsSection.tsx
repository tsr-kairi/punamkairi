import React from 'react';
import { Sparkles, Check, ChevronRight } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { SectionHeader } from '../common/SectionHeader';

export const SkillsSection: React.FC = () => {
  const row1Skills = [
    'Royal Bridal Artistry',
    'HD Camera-Ready Base',
    'Airbrush Porcelain Technique',
    'Precision Cut-Crease',
    'Deep Velvet Smokey Eyes',
    'Indian Undertone Formulation'
  ];

  const row2Skills = [
    'Color Correction & Concealing',
    'Micro-Contouring & Sculpting',
    'Mink & Silk Lash Architecture',
    'Transfer-Proof Ombré Lips',
    'Traditional Saree & Dupatta Draping',
    'Studio Flash Anti-Reflective Setting'
  ];

  return (
    <section id="artistry" className="py-20 sm:py-28 bg-[#09090c] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Technique & Precision"
          title="THE ARTISTRY REPERTOIRE"
          subtitle="A harmonious symphony of classical precision and modern high-fashion techniques."
        />

        {/* Infinite Horizontal Auto-Scrolling Marquee Ribbons (Mobile & Desktop) */}
        <div className="relative w-full overflow-hidden mb-12 sm:mb-16 space-y-2.5 sm:space-y-3.5 py-1">
          {/* Left and Right Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#09090c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#09090c] to-transparent z-10 pointer-events-none" />

          {/* Ribbon Row 1: Right to Left */}
          <div className="flex gap-2 sm:gap-3 w-max animate-marquee hover:[animation-play-state:paused] cursor-grab select-none">
            {[...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
              <div
                key={`r1-${idx}`}
                className="px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#14141a]/95 border border-[#d4af37]/35 hover:border-[#d4af37] text-[#f7e7ce] hover:text-[#f3e5ab] text-xs sm:text-sm font-medium tracking-wide shadow-md flex items-center gap-2 whitespace-nowrap flex-shrink-0 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Ribbon Row 2: Left to Right */}
          <div className="flex gap-2 sm:gap-3 w-max animate-marquee-reverse hover:[animation-play-state:paused] cursor-grab select-none">
            {[...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills].map((skill, idx) => (
              <div
                key={`r2-${idx}`}
                className="px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#14141a]/95 border border-[#d4af37]/35 hover:border-[#d4af37] text-[#f7e7ce] hover:text-[#f3e5ab] text-xs sm:text-sm font-medium tracking-wide shadow-md flex items-center gap-2 whitespace-nowrap flex-shrink-0 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Technique Pillars Tabs / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 sm:p-8 rounded-2xl bg-[#111116] border border-[#26242c] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#2a2824]">
                  <div className="w-8 h-8 rounded-lg bg-[#181822] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#f7e7ce] uppercase tracking-wider">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                        <h4 className="text-xs sm:text-sm font-medium text-[#f7e7ce]">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#a09d96] pl-5 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1f1e24] flex items-center justify-between text-[11px] text-[#d4af37] font-medium tracking-wider uppercase">
                <span>Refined Mastery</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
