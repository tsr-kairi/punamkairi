import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
  className = ''
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#f3e5ab] ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-[#f7e7ce] tracking-tight leading-tight uppercase">
        {title}
      </h2>
      <div className={`h-0.5 w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4 ${isCenter ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-[#c5c2bb] font-light leading-relaxed font-serif-luxury italic">
          "{subtitle}"
        </p>
      )}
    </div>
  );
};
