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
  festivalName: "Durga Puja Festive Special (15 Sep – 15 Oct)",
  bannerAnnouncement: "🌸 DURGA PUJA SPECIAL: Flat 10% OFF on all Facials, Threading, Cleanup & Festive Artistry Services! Valid from 15 September to 15 October.",
  subheading: "Flat 10% OFF on all Facials, Threading & Festive Services • 15 September to 15 October with Mrs. Punam Kairi.",
  offers: [
    {
      id: "puja-facial-combo",
      badge: "Festive Best Seller",
      title: "24K Gold Facial + Free Threading",
      tagline: "Instant Radiant Glow & Tan Clear",
      discountHighlight: "FLAT 10% OFF + FREE Threading",
      description: "24K Gold luxury facial with deep tan exfoliation and complimentary eyebrow shaping with 10% festive discount.",
      includedPerks: [
        "Flat 10% Festive Discount",
        "24K Gold Foil Glow Facial",
        "De-Tan Brightening Exfoliation",
        "Free Eyebrow & Upper Lip Threading"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-GOLD",
      popular: true,
      image: "/assets/images/banners/lotus_gold_faicial_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-bridal-grand",
      badge: "Grand Bridal Deal",
      title: "Royal Sharodiya Bridal Package",
      tagline: "Autumn & Winter Bride Pre-Booking",
      discountHighlight: "FLAT 10% OFF + FREE Mink Lashes",
      description: "Royal HD/Airbrush Bridal look with complimentary premium lash upgrade, veil styling, and 10% festive privilege.",
      includedPerks: [
        "Flat 10% Festive Privilege",
        "Free 3D Mink Lashes Upgrade",
        "Complimentary Pre-Bridal Skin Prep",
        "Free Dupatta & Jewelry Setting"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-BRIDAL",
      popular: true,
      image: "/assets/images/banners/bridal_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "ashtami-navami-glam",
      badge: "Pandal Night Glam",
      title: "Mahashtami & Navami Night Glam",
      tagline: "Anjali, Pandal Hopping & Aarti",
      discountHighlight: "FLAT 10% OFF • Sweat-Proof 12H Look",
      description: "Sweat-proof, smudge-proof high-impact glam customized for Puja night photography with flat 10% discount.",
      includedPerks: [
        "Flat 10% Festive Discount",
        "Waterproof Kohl & Shimmer Eyes",
        "Luminous Glass Skin Base",
        "All-Night 12H Makeup Lock"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-GLAM",
      image: "/assets/images/banners/party_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-facial-care",
      badge: "Festive Glow Offer",
      title: "Professional Facial Care",
      tagline: "Healthy Skin & Natural Festive Glow",
      discountHighlight: "FLAT 10% OFF • All Facial Types",
      description: "Multi-step deep hydration, tan removal, and skin rejuvenation for glowing, refreshed skin with flat 10% discount.",
      includedPerks: [
        "Flat 10% Festive Discount",
        "Choice of Gold / Diamond / Hydra Facial",
        "Free Threading Included",
        "Antioxidant Hydration Lock"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-FACIAL",
      image: "/assets/images/banners/facial_main.png",
      savingsBadge: "10% OFF"
    }
  ]
};
