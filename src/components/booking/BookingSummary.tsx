import React from 'react';
import { Calendar, User, Phone, MapPin, Tag, Sparkles, MessageCircle, ArrowLeft, ShieldCheck } from 'lucide-react';
import type { BookingFormData } from '../../utils/whatsapp';
import { formatDisplayDate, getBookingWhatsAppUrl } from '../../utils/whatsapp';
import confetti from 'canvas-confetti';

interface BookingSummaryProps {
  formData: BookingFormData;
  onEdit: () => void;
  onClose?: () => void;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  formData,
  onEdit,
}) => {
  const handleSendToWhatsApp = () => {
    // Trigger festive celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3e5ab', '#ffffff', '#e0a98b']
      });
    } catch {
      // safe fallback
    }

    const whatsappUrl = getBookingWhatsAppUrl(formData);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab] text-[11px] font-semibold tracking-wider uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Step 2 of 2: Review Booking Request</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#f7e7ce]">
          Confirm Your Request Details
        </h3>
        <p className="text-xs text-[#a09d96] mt-1 font-light">
          Review your appointment specifics before transmitting to WhatsApp.
        </p>
      </div>

      {/* Structured Summary Ticket Card */}
      <div className="rounded-2xl bg-[#0e0e13] border border-[#d4af37]/30 p-5 sm:p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-[#222128]">
          <span className="text-xs font-semibold text-[#8e8c85] uppercase tracking-wider">
            Requested Artistry
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#181822] text-[#d4af37] text-[11px] font-medium border border-[#d4af37]/30">
            {formData.servicePrice}
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          {/* Service */}
          <div className="flex items-start gap-3">
            <Tag className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#8e8c85] font-semibold">Service Name</div>
              <div className="font-display font-bold text-[#f7e7ce]">{formData.serviceName}</div>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#8e8c85] font-semibold">Preferred Date</div>
              <div className="font-medium text-[#f7e7ce]">{formatDisplayDate(formData.preferredDate)}</div>
            </div>
          </div>

          {/* Customer */}
          <div className="flex items-start gap-3">
            <User className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#8e8c85] font-semibold">Customer Name</div>
              <div className="font-medium text-[#f7e7ce]">{formData.customerName}</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#8e8c85] font-semibold">Contact Number</div>
              <div className="font-medium text-[#f7e7ce]">+91 {formData.customerPhone}</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#8e8c85] font-semibold">Venue / Address</div>
              <div className="font-medium text-[#f7e7ce]">{formData.customerLocation}</div>
            </div>
          </div>

          {/* Additional notes */}
          {formData.additionalMessage && (
            <div className="p-3 rounded-xl bg-[#14141c] border border-[#26242c] text-xs text-[#cfccc4]">
              <span className="text-[#d4af37] font-semibold block mb-1">Notes / Requirements:</span>
              {formData.additionalMessage}
            </div>
          )}
        </div>
      </div>

      {/* Confirmation & Transparency Notice */}
      <div className="p-3.5 rounded-xl bg-[#15151e] border border-white/5 flex items-start gap-2.5 text-[11px] text-[#a09d96]">
        <ShieldCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
        <div>
          This generates a pre-filled WhatsApp enquiry message to <strong className="text-[#f7e7ce]">+91 6003756297</strong>. Mrs. Punam Kairi will personally confirm schedule availability with you.
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={onEdit}
          className="btn-outline-gold py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer order-2 sm:order-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>EDIT DETAILS</span>
        </button>

        <button
          type="button"
          onClick={handleSendToWhatsApp}
          className="btn-gold py-3.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-2xl cursor-pointer order-1 sm:order-2"
        >
          <MessageCircle className="w-4 h-4 text-[#0a0a0c]" />
          <span>SEND TO WHATSAPP</span>
        </button>
      </div>
    </div>
  );
};
