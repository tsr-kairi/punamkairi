import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, MapPin, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import type { ServiceItem } from '../../data/services';
import type { BookingFormData } from '../../utils/whatsapp';
import { recordRealCustomerActivity } from '../../utils/activityTracker';
import { BookingSummary } from './BookingSummary';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService
}) => {
  const [step, setStep] = useState<'form' | 'summary'>('form');

  // Form state
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerLocation, setCustomerLocation] = useState<string>('');
  const [additionalMessage, setAdditionalMessage] = useState<string>('');

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Calculate today's date in YYYY-MM-DD for min date validation
  const todayStr = new Date().toISOString().split('T')[0];

  // Sync pre-selected service when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setErrors({});
      if (preSelectedService) {
        if (typeof preSelectedService === 'string') {
          const match = servicesData.find(
            (s) => s.name.toLowerCase().includes(preSelectedService.toLowerCase()) ||
                   preSelectedService.toLowerCase().includes(s.name.toLowerCase())
          );
          if (match) setSelectedServiceId(match.id);
        } else if ('id' in preSelectedService) {
          setSelectedServiceId(preSelectedService.id);
        }
      }
    }
  }, [isOpen, preSelectedService]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    // Indian phone format check: 10 digits
    const cleanedPhone = customerPhone.replace(/[\s-+]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanedPhone) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!preferredDate) {
      newErrors.date = 'Please choose your preferred appointment date.';
    } else if (preferredDate < todayStr) {
      newErrors.date = 'Appointment date cannot be in the past.';
    }

    if (!customerLocation.trim()) {
      newErrors.location = 'Please enter your location or event venue.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Record real customer booking activity immediately
      try {
        recordRealCustomerActivity(customerName, customerLocation);
      } catch {
        // safe fallback
      }
      setStep('summary');
    }
  };

  const preparedBookingData: BookingFormData = {
    serviceId: currentService.id,
    serviceName: currentService.name,
    servicePrice: currentService.price,
    preferredDate,
    customerName,
    customerPhone: customerPhone.replace(/[\s-+]/g, ''),
    customerLocation,
    additionalMessage
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto">
      {/* Backdrop Click Dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-xl bg-[#111116] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#1c1c24] text-[#a09d96] hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37]/40 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Reserve Artistry Appointment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#f7e7ce]">
                Book Your Makeup Session
              </h3>
              <p className="text-xs text-[#a09d96] mt-1 font-light">
                Fill in your details below. We'll format a branded request for WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Service Selection Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-[#d5d1c8] uppercase tracking-wider mb-1.5">
                  Selected Makeup Service <span className="text-[#d4af37]">*</span>
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#181822] border border-[#2a2824] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-[#f7e7ce] outline-none transition-colors"
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.id} className="bg-[#111116] text-[#f7e7ce]">
                      {svc.categoryLabel}: {svc.name} — {svc.price}
                    </option>
                  ))}
                </select>
                <div className="mt-1 flex items-center justify-between text-[11px] text-[#a09d96]">
                  <span>Duration: {currentService.duration}</span>
                  <span className="text-[#d4af37] font-medium">{currentService.price}</span>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#d5d1c8] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Preferred Event Date</span> <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#181822] border ${
                    errors.date ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-[#2a2824] focus:border-[#d4af37]'
                  } text-sm text-[#f7e7ce] outline-none transition-colors`}
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#d5d1c8] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Your Full Name</span> <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-[#181822] border ${
                      errors.name ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-[#2a2824] focus:border-[#d4af37]'
                    } text-sm text-[#f7e7ce] placeholder-[#65635e] outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#d5d1c8] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>WhatsApp / Mobile</span> <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8e8c85]">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="98XXXXXXXX"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-[#181822] border ${
                        errors.phone ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-[#2a2824] focus:border-[#d4af37]'
                      } text-sm text-[#f7e7ce] placeholder-[#65635e] outline-none transition-colors`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Location / Venue */}
              <div>
                <label className="block text-xs font-semibold text-[#d5d1c8] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Venue Location / City / Address</span> <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sribhumi, Karimganj, Silchar, or Hotel/Resort name"
                  value={customerLocation}
                  onChange={(e) => setCustomerLocation(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#181822] border ${
                    errors.location ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-[#2a2824] focus:border-[#d4af37]'
                  } text-sm text-[#f7e7ce] placeholder-[#65635e] outline-none transition-colors`}
                />
                {errors.location && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.location}</span>
                  </p>
                )}
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-semibold text-[#d5d1c8] uppercase tracking-wider mb-1.5">
                  Additional Notes / Occasion Timings <span className="text-[#8e8c85] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Morning wedding ceremony, need bridal dupatta setting and styling for 1 family member."
                  value={additionalMessage}
                  onChange={(e) => setAdditionalMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181822] border border-[#2a2824] focus:border-[#d4af37] text-sm text-[#f7e7ce] placeholder-[#65635e] outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
                >
                  <span>REVIEW & PROCEED TO WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-[#0a0a0c]" />
                </button>
              </div>

              <div className="text-center text-[10px] text-[#8e8c85]">
                🔒 Direct encrypted communication with Mrs. Punam Kairi (+91 6003756297)
              </div>
            </form>
          </div>
        ) : (
          <BookingSummary
            formData={preparedBookingData}
            onEdit={() => setStep('form')}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};
