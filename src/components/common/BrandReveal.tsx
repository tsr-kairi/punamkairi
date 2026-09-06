import React, { useEffect, useState } from 'react';
import { siteConfig } from '../../data/siteConfig';

interface BrandRevealProps {
  onFinish: () => void;
}

export const BrandReveal: React.FC<BrandRevealProps> = ({ onFinish }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, elegant 1.2s reveal, then fade out
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0a0c] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center px-4 animate-fade-in">
        
        {/* Monogram Seal */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#d4af37] p-1 bg-[#121216] shadow-2xl mb-4 animate-pulse">
          <img
            src={siteConfig.branding.logoImage}
            alt="Punam Kairi Emblem"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-[#f7e7ce] uppercase">
          PUNAM KAIRI
        </h1>

        <div className="text-[10px] sm:text-xs tracking-[0.35em] text-[#d4af37] font-medium uppercase mt-1">
          MAKEUP ARTISTRY
        </div>

        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3" />

        <p className="text-xs text-[#f3e5ab] font-serif-luxury italic">
          "Where Beauty Meets Artistry"
        </p>

      </div>
    </div>
  );
};
