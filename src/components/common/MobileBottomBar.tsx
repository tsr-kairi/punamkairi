import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c10]/95 backdrop-blur-xl border-t border-[#d4af37]/20 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* WhatsApp Quick Chat */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>WHATSAPP</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="btn-gold flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform shadow-lg cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#0a0a0c] flex-shrink-0" />
          <span>BOOK NOW</span>
        </button>

      </div>
    </aside>
  );
};
