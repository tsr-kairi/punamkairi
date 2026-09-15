import { siteConfig } from '../data/siteConfig';
import type { FestiveOffer } from '../data/offers';

/**
 * Returns the shareable link for Durga Puja Festive Offers.
 * Includes query params so that opening the link automatically launches the Puja Offers modal.
 */
export function getPujaOfferShareUrl(offerId?: string): string {
  const base = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : siteConfig.productionUrl;
  
  if (offerId) {
    return `${base}/?offer=puja&id=${encodeURIComponent(offerId)}#puja-offers`;
  }
  return `${base}/?offer=puja#puja-offers`;
}

/**
 * Formats a rich, celebratory Durga Puja share message for WhatsApp and Social Media.
 */
export function getPujaOfferShareMessage(offer?: FestiveOffer): string {
  const shareUrl = getPujaOfferShareUrl(offer?.id);

  if (offer) {
    return (
`🌸 *DURGA PUJA SPECIAL OFFER — FLAT 10% OFF* 🌸
✨ *${offer.title}*
${offer.tagline}

🎁 *Offer Highlight:* ${offer.discountHighlight}
🏷️ *Promo Code:* ${offer.code}
📅 *Valid:* ${offer.validTill} (15 Sep – 15 Oct)

✨ *Included Perks:*
${offer.includedPerks.map(p => `• ${p}`).join('\n')}

💄 *Artistry by:* Mrs. Punam Kairi
📍 *Location:* Kalibari Road, Sribhumi, Assam
📞 *WhatsApp / Call:* +91 6003756297

👉 *Click here to view this offer & claim slot directly:*
${shareUrl}`
    );
  }

  return (
`🌸 *DURGA PUJA SPECIAL FESTIVE OFFERS (15 SEP – 15 OCT)* 🌸
Get *FLAT 10% OFF* on all Facials, Threading & Skin Cleanup at *Punam Kairi Makeover*!

✨ *Exclusive Festive 10% OFF Services:*
• Lotus 24K Gold Luxury Facial
• Papaya Enzyme De-Tan Facial
• Fresh Fruit Nourishing Facial
• Hydra-Dew Glass Skin Facial
• Instant Glow Express Skin Cleanup
• Precision Eyebrow Threading & Shaping

🎁 *Special Discount:* FLAT 10% OFF (15 Sep to 15 Oct)
💄 *Artist:* Mrs. Punam Kairi (Certified Luxury Stylist)
📍 *Studio:* Kalibari Road, Sribhumi, Assam
📞 *Bookings:* +91 6003756297

👉 *Click link to check all festive offers & claim your deal:*
${shareUrl}`
  );
}

/**
 * Directly opens WhatsApp with the pre-filled celebratory Durga Puja offer message.
 */
export function shareViaWhatsApp(offer?: FestiveOffer): void {
  const message = getPujaOfferShareMessage(offer);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Opens Facebook Share dialog for the Puja offer URL.
 */
export function shareViaFacebook(offer?: FestiveOffer): void {
  const url = getPujaOfferShareUrl(offer?.id);
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(fbUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
}

/**
 * Opens Twitter / X Share dialog for the Puja offer.
 */
export function shareViaTwitter(offer?: FestiveOffer): void {
  const url = getPujaOfferShareUrl(offer?.id);
  const text = offer 
    ? `🌸 Durga Puja Special: Flat 10% OFF on ${offer.title} with Mrs. Punam Kairi! (15 Sep – 15 Oct)`
    : `🌸 Durga Puja Special: Flat 10% OFF on all Facials, Threading & Cleanup with Mrs. Punam Kairi! (15 Sep – 15 Oct)`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
}

/**
 * Copies the offer share link and message to clipboard.
 */
export async function copyPujaOfferLink(offer?: FestiveOffer): Promise<boolean> {
  const shareUrl = getPujaOfferShareUrl(offer?.id);
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(shareUrl);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch {
    return false;
  }
}

/**
 * Uses the Web Share API (native mobile sharing sheet) if available,
 * allowing sharing across Instagram, WhatsApp, Messenger, Telegram, Messages, etc.
 */
export async function shareViaNative(offer?: FestiveOffer): Promise<boolean> {
  const shareUrl = getPujaOfferShareUrl(offer?.id);
  const title = offer 
    ? `🌸 Durga Puja Offer: 10% OFF on ${offer.title}` 
    : '🌸 Durga Puja Festive Special (Flat 10% OFF) • Punam Kairi Makeover';
  const text = getPujaOfferShareMessage(offer);

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url: shareUrl
      });
      return true;
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        return false; // user cancelled
      }
    }
  }

  // Fallback to WhatsApp if native share isn't supported
  shareViaWhatsApp(offer);
  return true;
}
