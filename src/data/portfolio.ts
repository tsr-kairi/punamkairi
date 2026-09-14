export type PortfolioCategory =
  | 'ALL'
  | 'BRIDAL'
  | 'RECEPTION'
  | 'CEREMONY'
  | 'PARTY'
  | 'FACIALS'
  | 'THREADING';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  imageUrl: string;
  thumbnailUrl?: string;
  description: string;
  techniques: string[];
  featured?: boolean;
}

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: 'ALL', label: 'All Showcases' },
  { id: 'BRIDAL', label: 'Bridal Artistry' },
  { id: 'RECEPTION', label: 'Reception' },
  { id: 'CEREMONY', label: 'Haldi & Mehendi' },
  { id: 'PARTY', label: 'Party & Festive' },
  { id: 'FACIALS', label: 'Facials & Skin Glow' },
  { id: 'THREADING', label: 'Threading & Grooming' },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-main-opening',
    title: 'PK Makeup Artistry & Studio Grand Opening',
    category: 'BRIDAL',
    categoryLabel: 'Signature Studio',
    imageUrl: '/assets/images/banners/main_banner.png',
    description: 'Punam Kairi Makeup Artistry official banner showcase. Bespoke bridal, wedding, skin care, and festive transformations in Golaghat.',
    techniques: ['Signature Artistry', 'HD Base', 'Skin Prep', 'Bridal Masterclass'],
    featured: true
  },
  {
    id: 'port-bridal-artistry',
    title: 'Royal Indian Bridal Artistry & Traditional Elegance',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    imageUrl: '/assets/images/banners/bridal_banner.png',
    description: 'Flawless 16-hour royal bridal makeup featuring waterproof HD base, sculpted contouring, mink lashes, and jewel setting.',
    techniques: ['Regal HD Complexion', 'Cut Crease Art', 'Mink Lashes', 'Smudgeproof Lip'],
    featured: true
  },
  {
    id: 'port-reception-gala',
    title: 'Reception & Evening Gala Contemporary Glam',
    category: 'RECEPTION',
    categoryLabel: 'Reception & Gala',
    imageUrl: '/assets/images/banners/reaception_banner.png',
    description: 'High-fashion evening reception glam tailored for artificial lighting, featuring sculpted cheekbones and dramatic eye artistry.',
    techniques: ['Ballroom Lighting Ready', 'Smokey Shimmer', 'Sculpted Cheekbones', 'Transfer-Proof Base'],
    featured: true
  },
  {
    id: 'port-haldi-ceremony',
    title: 'Sunny Haldi Ceremony Fresh & Dewy Radiance',
    category: 'CEREMONY',
    categoryLabel: 'Haldi Ceremony',
    imageUrl: '/assets/images/banners/haldi_banner.png',
    description: 'Sun-kissed, sweat-resistant dewy styling designed for outdoor daytime Haldi festivities with a radiant natural flush.',
    techniques: ['Daylight Balanced', 'Sweat-Resistant Base', 'Coral Shimmer', 'Hydrated Glow'],
    featured: true
  },
  {
    id: 'port-mehendi-sangeet',
    title: 'Vibrant Mehendi & Sangeet Celebration Styling',
    category: 'CEREMONY',
    categoryLabel: 'Mehendi & Sangeet',
    imageUrl: '/assets/images/banners/mehendi_banner.png',
    description: 'Playful, vibrant makeup with long-lasting dance-proof formula, colored eyeliner accents, and feathered natural brows.',
    techniques: ['Dance-Proof Wear', 'Luminous Glow', 'Accent Eye Detail', 'Velvet Lip'],
    featured: true
  },
  {
    id: 'port-party-festive',
    title: 'High-Impact Party & Festive Red Carpet Glam',
    category: 'PARTY',
    categoryLabel: 'Party & Festive',
    imageUrl: '/assets/images/banners/party_banner.png',
    description: 'Bold and glamorous party makeup for birthdays, anniversaries, and festive Durga Puja pandal nights.',
    techniques: ['Ultra HD Base', 'Lash Volume Boost', 'Illuminated Glow', 'Transfer Lock'],
    featured: true
  },
  {
    id: 'port-facial-main',
    title: 'Professional Facials & Deep Skin Rejuvenation',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    imageUrl: '/assets/images/banners/facial_main.png',
    description: 'Comprehensive skin rejuvenation combining deep cleansing, botanical steam, facial massage, and active glow masks.',
    techniques: ['Deep Pore Cleansing', 'Lymphatic Massage', 'Herbal Steam', 'Antioxidant Infusion'],
    featured: true
  },
  {
    id: 'port-lotus-gold-facial',
    title: 'Lotus 24K Gold Luxury Radiance Facial',
    category: 'FACIALS',
    categoryLabel: '24K Gold Luxury',
    imageUrl: '/assets/images/banners/lotus_gold_faicial_banner.png',
    description: 'Opulent Lotus 24K gold foil therapy delivering an illuminated bridal glow, collagen stimulation, and silky skin texture.',
    techniques: ['24K Gold Foil Infusion', 'Deep Exfoliation', 'Cryo Soothing', 'Firming Mask'],
    featured: true
  },
  {
    id: 'port-fruit-facial',
    title: 'Nourishing Fresh Fruit Vitamin Glow Facial',
    category: 'FACIALS',
    categoryLabel: 'Fruit Nourishing',
    imageUrl: '/assets/images/banners/fruit_banner.png',
    description: 'Natural fruit extract therapy packed with vitamins A, C, and E to restore dull skin and impart a healthy natural flush.',
    techniques: ['Natural Fruit Enzymes', 'Vitamin Boost', 'Gentle Polish', 'Hydration Blanket']
  },
  {
    id: 'port-papaya-facial',
    title: 'Papaya Enzyme De-Tan & Deep Brightening Facial',
    category: 'FACIALS',
    categoryLabel: 'De-Tan Brightening',
    imageUrl: '/assets/images/banners/papya_banner.png',
    description: 'Targeted papaya papain enzyme treatment that gently clears stubborn sun tan, pigmentation, and uneven texture.',
    techniques: ['Papain Bio-Enzymes', 'Sun-Tan Clearing', 'Pore Tightening', 'Cooling Compress']
  },
  {
    id: 'port-express-cleanup',
    title: 'Instant Glow Express Skin Cleanup & Polishing',
    category: 'FACIALS',
    categoryLabel: 'Skin Cleanup',
    imageUrl: '/assets/images/banners/Cleanup_banner.png',
    description: 'Quick 35-minute revitalizing skin prep featuring blackhead extraction, dead cell polishing, and an instant glow pack.',
    techniques: ['T-Zone Extraction', 'Micro-Scrub Polish', 'Ice Globe Soothe', 'Instant Radiance Pack']
  },
  {
    id: 'port-threading-grooming',
    title: 'Precision Eyebrow Architecture & Grooming',
    category: 'THREADING',
    categoryLabel: 'Precision Grooming',
    imageUrl: '/assets/images/banners/threading_banner.png',
    description: 'Artisanal brow mapping, organic cotton threading, and peach fuzz removal followed by cooling chilled aloe therapy.',
    techniques: ['Brow Architecture', 'Organic Thread', 'Peach Fuzz Removal', 'Aloe Vera Calming'],
    featured: true
  }
];
