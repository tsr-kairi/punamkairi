import React from 'react';
import { Award, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: siteConfig.experience,
      label: "Artistry Experience",
      sublabel: "Specializing in Bridal & HD Makeovers",
      icon: Award
    },
    {
      value: "100%",
      label: "Custom Undertone Matching",
      sublabel: "Zero-ashy, radiant second skin",
      icon: Sparkles
    },
    {
      value: "16+ Hrs",
      label: "Long-Wear Durability",
      sublabel: "Water-resistant & sweat-proof",
      icon: Clock
    },
    {
      value: "Strict",
      label: "Hospital-Grade Hygiene",
      sublabel: "Sanitized tools for every bride",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#0a0a0c] border-b border-[#1c1b22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#121217]/80 border border-[#2a2824] hover:border-[#d4af37]/40 transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="p-3 rounded-full bg-[#181822] border border-[#d4af37]/25 text-[#d4af37] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gold-gradient tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#f7e7ce] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-[#a09d96] mt-0.5 font-light">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
