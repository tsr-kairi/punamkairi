import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faq';
import { SectionHeader } from '../common/SectionHeader';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#09090c] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Inquiries & Guidance"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about booking, bridal trials, and artistry services."
        />

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#111116] border border-[#26242c] overflow-hidden transition-colors hover:border-[#d4af37]/30"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-sm sm:text-base text-[#f7e7ce]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#181822] text-[#d4af37] transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#a09d96] font-light leading-relaxed border-t border-[#1f1e26] pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
