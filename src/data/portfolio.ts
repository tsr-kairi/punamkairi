export type PortfolioCategory = 'ALL' | 'BRIDAL' | 'PARTY' | 'ENGAGEMENT' | 'RECEPTION' | 'GLAM' | 'TRADITIONAL' | 'PHOTOSHOOT';

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
  { id: 'ALL', label: 'All Looks' },
  { id: 'BRIDAL', label: 'Bridal' },
  { id: 'ENGAGEMENT', label: 'Engagement' },
  { id: 'RECEPTION', label: 'Reception' },
  { id: 'PARTY', label: 'Party' },
  { id: 'GLAM', label: 'Soft & Full Glam' },
  { id: 'TRADITIONAL', label: 'Traditional' },
  { id: 'PHOTOSHOOT', label: 'Photoshoot' },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Royal Bridal Artistry & Traditional Grace',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    imageUrl: '/assets/images/banners/banner-bridal-makeup.jpg',
    description: 'A regal traditional Indian bridal look with sculpted bone structure, rich crimson lip styling, and waterproof gold-flecked eye artistry.',
    techniques: ['Ultra HD Base', 'Cut Crease', 'Mink Lashes', 'Smudgeproof Lip'],
    featured: true
  },
  {
    id: 'port-2',
    title: 'Pre-Wedding Picture-Perfect Natural Glam',
    category: 'ENGAGEMENT',
    categoryLabel: 'Engagement & Pre-Wedding',
    imageUrl: '/assets/images/banners/banner-prewedding-makeup.jpg',
    description: 'Dreamy, romantic pre-wedding and engagement makeup featuring soft champagne lids, feathered brows, and a glass-skin finish.',
    techniques: ['Dewy Prep', 'Camera-Ready Base', 'Cream Blush', 'Natural Glow'],
    featured: true
  },
  {
    id: 'port-3',
    title: 'Professional Facial Care & Rejuvenation',
    category: 'GLAM',
    categoryLabel: 'Facials & Skin Care',
    imageUrl: '/assets/images/banners/banner-facial-care.jpg',
    description: 'Deep pore cleansing, 24K Gold and Diamond De-Tan skin renewal treatments for a glowing, youthful canvas.',
    techniques: ['Deep Cleansing', 'Gold Infusion', 'Lymphatic Massage', 'Antioxidant Lock'],
    featured: true
  },
  {
    id: 'port-4',
    title: 'Signature Party Glam For Every Occasion',
    category: 'PARTY',
    categoryLabel: 'Party & Festive',
    imageUrl: '/assets/images/banners/banner-party-makeup.jpg',
    description: 'Vibrant party-ready makeup with intense lash volume, illuminated cheekbones, and long-lasting transfer-proof finish.',
    techniques: ['High-Impact Glow', 'Volume Lashes', 'Bold Eye Art', '12-Hr Lock'],
    featured: true
  },
  {
    id: 'port-5',
    title: 'Rose Gold High-Fashion Editorial',
    category: 'PHOTOSHOOT',
    categoryLabel: 'Photoshoot',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
    description: 'Camera-calibrated editorial makeup designed for high-resolution studio flash with zero flashback and razor-sharp detailing.',
    techniques: ['Studio Anti-Flash', 'Graphic Accents', 'Satin Skin', 'Micro-Pigments'],
    featured: true
  },
  {
    id: 'port-6',
    title: 'Modern Soft Glam & Dewy Glow',
    category: 'GLAM',
    categoryLabel: 'Soft Glam',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
    description: 'Effortless luxury focusing on skin health, natural brow definition, and subtle monochromatic rose-gold tones.',
    techniques: ['Skin Tint Base', 'Feathered Brows', 'Hydrating Gloss', 'Liquid Highlight'],
    featured: true
  },
  {
    id: 'port-7',
    title: 'Classic Cocktail Night Party Glam',
    category: 'PARTY',
    categoryLabel: 'Party Glam',
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85',
    description: 'Vibrant party-ready makeup with intense lash volume, illuminated cheekbones, and long-lasting transfer-proof finish.',
    techniques: ['Volume Lashes', 'High-Impact Glow', 'Bold Liner', 'Transfer Lock']
  },
  {
    id: 'port-8',
    title: 'Porcelain Airbrush Bridal Radiance',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    description: 'Velvety airbrushed complexion that remains immaculate through humidity, emotion, and close-up cinematic videography.',
    techniques: ['Airbrush Foundation', 'Waterproof Seal', 'Dimensional Eye', 'Jewelry Styling']
  }
];
