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
  bannerAnnouncement: "🌸 DURGA PUJA SPECIAL: Flat 10% OFF on all Facials, Threading & Cleanup! Valid from 15 September to 15 October.",
  subheading: "Flat 10% OFF on all Facials, Threading & Cleanup Services • 15 September to 15 October with Mrs. Punam Kairi.",
  offers: [
    {
      id: "puja-gold-facial",
      badge: "Festive Best Seller",
      title: "Lotus 24K Gold Luxury Facial",
      tagline: "Royal 24K Gold Leaf Radiance & Glow",
      discountHighlight: "FLAT 10% OFF • 24K Gold Luxury",
      description: "Opulent Lotus 24K gold leaf facial with botanical steam, lymphatic massage, and gold peel-off mask.",
      includedPerks: [
        "Flat 10% Festive Discount Applied",
        "24K Gold Leaf Serum Infusion",
        "Herbal Steam & Lymphatic Massage",
        "Complimentary Eyebrow Shaping"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-GOLD",
      popular: true,
      image: "/assets/images/banners/lotus_gold_faicial_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-papaya-detan",
      badge: "Tan Removal Hit",
      title: "Papaya Enzyme De-Tan Facial",
      tagline: "Clear Sun Tan & Reveal Glowing Skin",
      discountHighlight: "FLAT 10% OFF • Deep Tan Removal",
      description: "Targeted papain fruit enzyme exfoliation and diamond polish to erase sun tan and brighten skin tone.",
      includedPerks: [
        "Flat 10% Festive Discount Applied",
        "Deep De-Tan Purifying Cleanse",
        "Papaya Bio-Enzyme Exfoliation",
        "Cryo-Ice Globe Cooling Soothe"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-DETAN",
      popular: true,
      image: "/assets/images/banners/papya_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-fruit-facial",
      badge: "Natural & Herbal",
      title: "Fresh Fruit Nourishing Facial",
      tagline: "Antioxidant Vitamin Boost for Dull Skin",
      discountHighlight: "FLAT 10% OFF • Pure Botanical Care",
      description: "Natural fruit extract therapy loaded with vitamins A, C, & E to replenish tired skin and impart natural radiance.",
      includedPerks: [
        "Flat 10% Festive Discount Applied",
        "Natural Fruit Extracts & Vitamins",
        "Gentle Dead Skin Cell Polish",
        "Hydrating Antioxidant Fruit Mask"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-FRUIT",
      image: "/assets/images/banners/fruit_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-hydra-facial",
      badge: "Korean Glass Skin",
      title: "Hydra-Dew Glass Skin Facial",
      tagline: "Plump, Dewy Complexion for Festive Nights",
      discountHighlight: "FLAT 10% OFF • Deep Hyaluronic Drench",
      description: "Intensive multi-step hydration therapy infusing hyaluronic acid and plant ceramides for luminous glass skin.",
      includedPerks: [
        "Flat 10% Festive Discount Applied",
        "Hyaluronic Acid Moisture Drench",
        "Facial Acupressure & Jade Roller",
        "Dewy Glass-Skin Moisture Shield"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-HYDRA",
      popular: true,
      image: "/assets/images/banners/facial_main.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-express-cleanup",
      badge: "Quick Skin Refresh",
      title: "Instant Glow Express Skin Cleanup",
      tagline: "Deep Blackhead Clearing & Instant Radiance",
      discountHighlight: "FLAT 10% OFF • 35-Min Express Prep",
      description: "Fast-action deep cleansing, exfoliating scrub, blackhead/whitehead extraction, and instant radiant mask.",
      includedPerks: [
        "Flat 10% Festive Discount Applied",
        "Gentle Foaming Deep Cleanse",
        "T-Zone Blackhead/Whitehead Extraction",
        "Chilled Rosewater Facial Refresh"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-CLEANUP",
      image: "/assets/images/banners/Cleanup_banner.png",
      savingsBadge: "10% OFF"
    },
    {
      id: "puja-precision-threading",
      badge: "Signature Framing",
      title: "Precision Threading & Brow Architecture",
      tagline: "Flawless Brow Arches & Silky Smooth Canvas",
      discountHighlight: "FLAT 10% OFF • Organic Thread & Aloe Soothe",
      description: "Custom brow mapping, organic cotton threading, and peach fuzz removal followed by cooling aloe therapy.",
      includedPerks: [
        "Flat 10% Festive Discount Applied",
        "Facial Proportion Brow Architecture",
        "Upper Lip & Chin Detailing",
        "Chilled Aloe Vera Soothing Massage"
      ],
      validTill: "15 Sep – 15 Oct",
      code: "PUJA10-THREADING",
      image: "/assets/images/banners/threading_banner.png",
      savingsBadge: "10% OFF"
    }
  ]
};
