import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Copy, Check, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import type { FestiveOffer } from '../../data/offers';
import { 
  getPujaOfferShareUrl, 
  shareViaWhatsApp, 
  shareViaFacebook, 
  shareViaTwitter, 
  shareViaNative, 
  copyPujaOfferLink 
} from '../../utils/share';

interface FestiveShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer?: FestiveOffer | null;
}

export const FestiveShareModal: React.FC<FestiveShareModalProps> = ({ isOpen, onClose, offer }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = getPujaOfferShareUrl(offer?.id);
  const title = offer ? offer.title : 'Durga Puja Festive Offers (Flat 10% OFF)';

  const handleCopy = async () => {
    const success = await copyPujaOfferLink(offer || undefined);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    await shareViaNative(offer || undefined);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-md bg-[#120f18] border-2 border-[#d4af37]/60 rounded-3xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Festive Top Gradient Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-rose-600/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 right-0 w-48 h-32 bg-[#d4af37]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#cfccc4] hover:text-[#d4af37] border border-white/10 transition-colors cursor-pointer"
            aria-label="Close share dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-[#d4af37]/50 text-[#fceade] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-[#d4af37] animate-spin" />
              <span>Share Durga Puja Offers</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-[#f7e7ce] leading-snug">
              {title}
            </h3>
            <p className="text-xs text-[#d4af37] font-serif-luxury italic mt-0.5">
              Share festive glow deals directly with family & friends!
            </p>
          </div>

          {/* Direct Action Grid */}
          <div className="space-y-2.5 mb-5">
            {/* WhatsApp (Primary Highlight) */}
            <button
              onClick={() => {
                shareViaWhatsApp(offer || undefined);
                onClose();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6d] text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-between shadow-lg active:scale-98 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-white/20">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span>Share on WhatsApp</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Other Social Channels in a 2-Col Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Facebook */}
              <button
                onClick={() => {
                  shareViaFacebook(offer || undefined);
                  onClose();
                }}
                className="py-2.5 px-3 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/60 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </button>

              {/* X / Twitter */}
              <button
                onClick={() => {
                  shareViaTwitter(offer || undefined);
                  onClose();
                }}
                className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / Twitter</span>
              </button>
            </div>

            {/* Native Mobile Sheet (Instagram / Telegram / System) */}
            <button
              onClick={() => {
                handleNativeShare();
                onClose();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-[#d4af37]/15 hover:bg-[#d4af37]/25 border border-[#d4af37]/50 text-[#f7e7ce] font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#d4af37]" />
              <span>More Apps (Instagram, Telegram, SMS)</span>
            </button>
          </div>

          {/* Copy Link Section */}
          <div className="pt-3 border-t border-white/10">
            <label className="block text-[11px] uppercase tracking-wider text-[#a09d96] font-semibold mb-1.5 text-center">
              Direct Offer Link
            </label>
            <div className="flex items-center gap-2 p-1.5 pl-3 rounded-xl bg-black/60 border border-white/10">
              <span className="text-xs text-[#cfccc4] font-mono truncate flex-1 select-all">
                {shareUrl}
              </span>
              <button
                onClick={handleCopy}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#d4af37] text-black hover:bg-[#edd269]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
