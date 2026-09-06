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
}

export const durgaPujaFestiveOffers = {
  enabled: true,
  festivalName: "Durga Puja & Grand Opening Special",
  bannerAnnouncement: "🌸 DURGA PUJA SPECIAL: Book your Pre-Puja 24K Gold Facial, De-Tan Glow & Bridal Slots Early! Exclusive Festive Deals Active.",
  subheading: "Get festival-ready glowing skin & pandal-hopping glam with Mrs. Punam Kairi.",
  offers: [
    {
      id: "puja-facial-combo",
      badge: "Festive Skincare Best Seller",
      title: "Pre-Puja 24K Gold Facial + Free Threading",
      tagline: "Instant Radiant Glow & Tan Removal Before Navami",
      discountHighlight: "SPECIAL FESTIVE PRICE + FREE EYEBROW & UPPER LIP THREADING",
      description: "Complete pre-puja skin revival: 24K Gold Leaf Facial, tan clearing scrub, lymphatic massage, and complimentary brow arch & upper lip shaping.",
      includedPerks: [
        "24K Gold Foil Deep Glow Facial",
        "De-Tan Brightening Exfoliation",
        "Free Eyebrow Arch Shaping & Upper Lip Threading",
        "Chilled Rosewater & Cryo-Globe Soothing"
      ],
      validTill: "Valid till Durga Puja Festive Season",
      code: "PUJA-GOLD-GLOW",
      popular: true
    },
    {
      id: "puja-bridal-grand",
      badge: "Grand Launch Bridal Deal",
      title: "Royal Sharodiya Bridal Package",
      tagline: "For Autumn & Winter Brides Booking During Puja",
      discountHighlight: "SPECIAL FESTIVE DISCOUNT + FREE MINK LASHES & FACIAL PREP",
      description: "Exclusive grand opening concession on Full HD / Airbrush Bridal looks with complimentary pre-wedding skin consultation & premium veil styling.",
      includedPerks: [
        "Free 3D Silk/Mink False Lash Upgrade",
        "Complimentary Pre-Bridal Skin Prep Session",
        "Free Saree / Dupatta & Royal Jewelry Setting",
        "Priority Date Slot Reservation"
      ],
      validTill: "Valid till Vijaya Dashami (Limited Slots)",
      code: "PUJA-BRIDAL-SPECIAL",
      popular: true
    },
    {
      id: "ashtami-navami-glam",
      badge: "Festive Pandal Glam",
      title: "Mahashtami & Navami Night Glam Pass",
      tagline: "Dazzle the crowd for Anjali, Pandal Hopping & Sandhya Aarti",
      discountHighlight: "SPECIAL FESTIVE COMBO PRICING",
      description: "Sweat-proof, smudge-proof, 12-hour high-impact festive glam customized for Durga Puja night pandal hopping and photography.",
      includedPerks: [
        "Waterproof Kohl & Shimmer Eye Artistry",
        "Highlighter & Luminous Dewy Base",
        "All-Night Lock Setting Mist",
        "Bindi & Traditional Styling Match"
      ],
      validTill: "Special Puja Days Only",
      code: "ASHTAMI-GLAM-PASS"
    },
    {
      id: "puja-duo-facial",
      badge: "Duo & Group Skincare",
      title: "Pre-Puja Duo Glow (Mother & Daughter / Friends)",
      tagline: "Book Any 2 Luxury Facials & Get Extra Savings",
      discountHighlight: "EXTRA 20% OFF ON 2ND FACIAL + FREE THREADING FOR BOTH",
      description: "Share the festive glow ritual with your mother, sister, or best friend. Choose from 24K Gold, Diamond De-Tan, or O3+ Vitamin-C Facials.",
      includedPerks: [
        "Choice of Diamond De-Tan or 24K Gold Facial",
        "Free Full Eyebrow & Forehead Threading for both",
        "Antioxidant Hydration Lock"
      ],
      validTill: "Festive Season Pre-Booking",
      code: "PUJA-DUO-FACIAL"
    }
  ]
};
