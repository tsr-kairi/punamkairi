import React from 'react';
import { Sparkles, Check, ChevronRight } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { SectionHeader } from '../common/SectionHeader';

export const SkillsSection: React.FC = () => {
  const signatureSkills = [
    'Royal Bridal Artistry',
    'HD Camera-Ready Base',
    'Airbrush Porcelain Technique',
    'Precision Cut-Crease',
    'Deep Velvet Smokey Eyes',
    'Indian Undertone Formulation',
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

        {/* Cinematic Skills Cloud / Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mb-16">
          {signatureSkills.map((skill, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full bg-[#14141a]/90 border border-[#d4af37]/25 hover:border-[#d4af37] text-[#f7e7ce] hover:text-[#f3e5ab] text-xs sm:text-sm font-medium tracking-wide transition-all hover:scale-105 shadow-md flex items-center gap-2 group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 group-hover:bg-[#d4af37] transition-colors" />
              <span>{skill}</span>
            </div>
          ))}
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
