import React, { useState } from 'react';
import { Sparkles, MessageCircle, Copy, Check, Gift, Share2 } from 'lucide-react';
import { shareViaWhatsApp, shareViaFacebook, copyPujaOfferLink, shareViaNative } from '../../utils/share';

interface FestiveHomepageShareBarProps {
  onOpenOffersModal: () => void;
}

export const FestiveHomepageShareBar: React.FC<FestiveHomepageShareBarProps> = ({ onOpenOffersModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyPujaOfferLink();
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-6 sm:my-8 relative z-20">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2a080c] via-[#1a0f18] to-[#250d18] border-2 border-[#d4af37]/60 p-4 sm:p-5 shadow-[0_10px_35px_rgba(212,175,55,0.18)]">
        
        {/* Subtle festive ambient background glow */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left info column */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/50 flex items-center justify-center flex-shrink-0 shadow-inner">
              <Gift className="w-6 h-6 text-[#d4af37] animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#fceade] text-[10px] font-bold uppercase tracking-wider mb-1 border border-[#d4af37]/40">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>15 Sep – 15 Oct • Durga Puja Special</span>
              </div>
              <h3 className="text-sm sm:text-base font-display font-bold text-[#f7e7ce] leading-snug">
                Flat 10% OFF on all Facials, Threading & Cleanup!
              </h3>
              <p className="text-[11px] sm:text-xs text-[#cfccc4] font-serif-luxury italic">
                Directly share these festive glow offers with friends & family on social media.
              </p>
            </div>
          </div>

          {/* Right action button group */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center w-full md:w-auto">
            
            {/* Direct WhatsApp Share */}
            <button
              onClick={() => shareViaWhatsApp()}
              className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe5d] hover:from-[#20bd5a] hover:to-[#17a54f] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              title="Share offers on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-white flex-shrink-0" />
              <span>Share on WhatsApp</span>
            </button>

            {/* Direct Facebook Share */}
            <button
              onClick={() => shareViaFacebook()}
              className="py-2.5 px-3 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/50 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Share on Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </button>

            {/* Native Share (More) */}
            <button
              onClick={() => shareViaNative()}
              className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#f7e7ce] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="More sharing options"
            >
              <Share2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopy}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1e1c26] text-[#cfccc4] hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37]'
              }`}
              title="Copy share link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Link</span>
                </>
              )}
            </button>

            {/* View Offers Button */}
            <button
              onClick={onOpenOffersModal}
              className="py-2.5 px-3.5 rounded-xl bg-[#d4af37] hover:bg-[#edd269] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>View Offers</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
