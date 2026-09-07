export interface FestiveOffer {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  discountHighlight: string;
  description: string;
  includedPerks: string[];
  validTill: string;
  code: string;
  popular?: boolean;
  image: string;
  savingsBadge: string;
}

export const durgaPujaFestiveOffers = {
  enabled: true,
  festivalName: "Durga Puja & Grand Opening Special",
  bannerAnnouncement: "🌸 DURGA PUJA SPECIAL: Book your Pre-Puja 24K Gold Facial, De-Tan Glow & Bridal Slots Early! Exclusive Festive Deals Active.",
  subheading: "Get festival-ready glowing skin & pandal-hopping glam with Mrs. Punam Kairi.",
  offers: [
    {
      id: "puja-facial-combo",
      badge: "Festive Best Seller",
      title: "24K Gold Facial + Free Threading",
      tagline: "Instant Radiant Glow & Tan Clear",
      discountHighlight: "FREE Eyebrow & Upper Lip Threading",
      description: "24K Gold luxury facial with deep tan exfoliation and complimentary eyebrow shaping.",
      includedPerks: [
        "24K Gold Foil Glow Facial",
        "De-Tan Brightening Exfoliation",
        "Free Eyebrow & Upper Lip Threading"
      ],
      validTill: "Valid till Festive Season",
      code: "PUJA-GOLD-GLOW",
      popular: true,
      image: "/assets/images/banners/banner-durga-puja-facial-offer.jpg",
      savingsBadge: "FREE GIFT"
    },
    {
      id: "puja-bridal-grand",
      badge: "Grand Bridal Deal",
      title: "Royal Sharodiya Bridal Package",
      tagline: "Autumn & Winter Bride Pre-Booking",
      discountHighlight: "FREE Mink Lashes + Skin Prep",
      description: "Royal HD/Airbrush Bridal look with complimentary premium lash upgrade and veil styling.",
      includedPerks: [
        "Free 3D Mink Lashes Upgrade",
        "Complimentary Pre-Bridal Skin Prep",
        "Free Dupatta & Jewelry Setting"
      ],
      validTill: "Limited Festive Slots",
      code: "PUJA-BRIDAL-DEAL",
      popular: true,
      image: "/assets/images/banners/banner-bridal-makeup.jpg",
      savingsBadge: "GRAND DEAL"
    },
    {
      id: "ashtami-navami-glam",
      badge: "Pandal Night Glam",
      title: "Mahashtami & Navami Night Glam",
      tagline: "Anjali, Pandal Hopping & Aarti",
      discountHighlight: "Sweat-Proof 12H Pandal Look",
      description: "Sweat-proof, smudge-proof high-impact glam customized for Puja night photography.",
      includedPerks: [
        "Waterproof Kohl & Shimmer Eyes",
        "Luminous Glass Skin Base",
        "All-Night 12H Makeup Lock"
      ],
      validTill: "Special Puja Days Only",
      code: "PUJA-NIGHT-GLAM",
      image: "/assets/images/banners/banner-party-makeup.jpg",
      savingsBadge: "FESTIVE COMBO"
    },
    {
      id: "puja-duo-facial",
      badge: "Duo Glow Offer",
      title: "Pre-Puja Duo Glow (Mother & Daughter)",
      tagline: "Book 2 Luxury Facials & Save",
      discountHighlight: "Extra 20% OFF on 2nd Facial",
      description: "Share the festive glow ritual with mother or bestie. Choice of Gold or Diamond facials.",
      includedPerks: [
        "Choice of Gold / Diamond Facial",
        "Free Threading For Both",
        "Antioxidant Hydration Lock"
      ],
      validTill: "Pre-Puja Booking",
      code: "PUJA-DUO-GLOW",
      image: "/assets/images/banners/banner-durga-puja-opening.jpg",
      savingsBadge: "20% OFF"
    }
  ]
};
