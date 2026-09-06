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
    title: 'The Crimson Royal Bride',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85',
    description: 'A regal traditional Indian bridal look with sculpted bone structure, rich crimson lip styling, and waterproof gold-flecked eye artistry.',
    techniques: ['Ultra HD Base', 'Cut Crease', 'Mink Lashes', 'Smudgeproof Lip'],
    featured: true
  },
  {
    id: 'port-2',
    title: 'Luminous Champagne Engagement',
    category: 'ENGAGEMENT',
    categoryLabel: 'Engagement',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
    description: 'Dreamy, romantic engagement makeup featuring soft champagne lids, feathered brows, and a glass-skin finish.',
    techniques: ['Dewy Prep', 'Soft Glam Eyes', 'Cream Blush', 'Nude Satin Lip'],
    featured: true
  },
  {
    id: 'port-3',
    title: 'Midnight Velvet Reception Glam',
    category: 'RECEPTION',
    categoryLabel: 'Reception',
    imageUrl: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1200&q=85',
    description: 'Dramatic smokey eye paired with flawless matte skin and defined high cheekbones, tailored for evening ballroom lights.',
    techniques: ['Smokey Gradient', 'Precision Contour', 'HD Base', 'Matte Lip'],
    featured: true
  },
  {
    id: 'port-4',
    title: 'Sunset Gold Festive Charm',
    category: 'TRADITIONAL',
    categoryLabel: 'Traditional',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85',
    description: 'Traditional elegance honoring cultural roots with radiant warm tones, subtle bindi placement, and classic kohl liner.',
    techniques: ['Traditional Draping Match', 'Kohl Wing', 'Warm Glow', 'Long-Wear Base'],
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
