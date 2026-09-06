import { siteConfig } from '../data/siteConfig';
import type { FestiveOffer } from '../data/offers';

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  servicePrice: string;
  preferredDate: string;
  customerName: string;
  customerPhone: string;
  customerLocation: string;
  additionalMessage?: string;
}

/**
 * Formats a date string (YYYY-MM-DD) into an elegant readable format (e.g., "12 October 2026")
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

/**
 * Builds the branded, professional WhatsApp message text for a booking request
 */
export function generateBookingWhatsAppMessage(data: BookingFormData): string {
  const formattedDate = formatDisplayDate(data.preferredDate);
  const additionalNotes = data.additionalMessage?.trim() 
    ? `\nAdditional Requirement:\n${data.additionalMessage.trim()}`
    : '';

  return (
`Hello Punam Kairi Makeup Artistry,
I would like to enquire about booking a makeup service.

✨ PUNAM KAIRI MAKEUP ARTISTRY
"Where Beauty Meets Artistry."
━━━━━━━━━━━━━━━━━━━━
💄 BOOKING REQUEST
━━━━━━━━━━━━━━━━━━━━
• Service: ${data.serviceName}
• Preferred Date: ${formattedDate}
• Customer Name: ${data.customerName.trim()}
• Mobile Number: ${data.customerPhone.trim()}
• Location / Venue: ${data.customerLocation.trim()}
• Price: ${data.servicePrice}${additionalNotes}
━━━━━━━━━━━━━━━━━━━━
Source: Punam Kairi Makeup Artistry Website
Please confirm availability and booking details.

Thank you!`
  );
}

/**
 * Generates the clickable WhatsApp URL for sending a booking request
 */
export function getBookingWhatsAppUrl(data: BookingFormData): string {
  const message = generateBookingWhatsAppMessage(data);
  const encodedMessage = encodeURIComponent(message);
  const phone = siteConfig.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Generates the WhatsApp link for claiming a festive Durga Puja launch offer
 */
export function getOfferClaimWhatsAppUrl(offer: FestiveOffer): string {
  const message = (
`Hello Punam Kairi Makeup Artistry,
I saw the *DURGA PUJA & GRAND OPENING OFFER* on your website and would like to claim this special festive deal!

✨ PUNAM KAIRI MAKEUP ARTISTRY
━━━━━━━━━━━━━━━━━━━━
🎉 SPECIAL OFFER CLAIM
━━━━━━━━━━━━━━━━━━━━
• Package: ${offer.title}
• Offer Code: [${offer.code}]
• Special Benefit: ${offer.discountHighlight}
• Validity: ${offer.validTill}
━━━━━━━━━━━━━━━━━━━━
Please let me know about available dates and booking process.

Thank you!`
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates the general enquiry WhatsApp URL
 */
export function getGeneralWhatsAppUrl(): string {
  const message = `Hello Punam Kairi Makeup Artistry, I would like to enquire about your makeup services and availability.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates telephone call link
 */
export function getPhoneCallUrl(): string {
  return `tel:${siteConfig.phone.replace(/\s+/g, '')}`;
}
