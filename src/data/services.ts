export type ServiceCategory = 'BRIDAL' | 'WEDDING_EVENTS' | 'PARTY_OCCASION' | 'FACIALS' | 'THREADING' | 'SPECIALIZED';

export type PriceType = 'fixed' | 'starting' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  price: string;
  priceType: PriceType;
  duration: string;
  badge?: string;
  image: string;
  includedItems: string[];
  popular?: boolean;
  available: boolean;
}

export const serviceCategories: { id: ServiceCategory; label: string; description: string }[] = [
  { id: 'BRIDAL', label: 'Bridal Artistry', description: 'Royal, flawless, all-day camera-ready bridal looks customized for your special day.' },
  { id: 'WEDDING_EVENTS', label: 'Wedding Ceremonies', description: 'Graceful looks curated for Engagements, Receptions, Haldi, Sangeet & Cocktails.' },
  { id: 'PARTY_OCCASION', label: 'Party & Festive', description: 'High-impact glam or refined soft glow for birthdays, anniversaries & festive pandal nights.' },
  { id: 'FACIALS', label: 'Facials & Skin Glow', description: 'Pre-Puja luxury facials: 24K Gold, Diamond De-Tan, Hydra-Dew, O3+ Vitamin-C & Organic Herbal treatments.' },
  { id: 'THREADING', label: 'Threading & Grooming', description: 'Precision eyebrow architecture, upper lip, forehead, full face hair removal & calming aloe therapy.' },
  { id: 'SPECIALIZED', label: 'Specialized & Editorial', description: 'Ultra HD, airbrush, photoshoot, studio and camera-calibrated makeup styling.' },
];

export const servicesData: ServiceItem[] = [
  // BRIDAL
  {
    id: 'bridal-signature',
    name: 'Signature Royal Bridal Makeup',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    tagline: 'For your most unforgettable bridal transformation.',
    shortDescription: 'Complete customized royal bridal look designed to withstand lighting, tears of joy, and hours of celebration.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '3.5 - 4.5 Hours',
    badge: 'Signature Experience',
    popular: true,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Personalized Skin Prep & Deep Hydration Ritual',
      'Ultra HD / Airbrush Long-Wear Foundation Base',
      'Intricate Eye Artistry & Dimensional Cut Crease',
      'Premium Mink/Silk False Lash Application',
      'Sculpted Contouring & Champagne Highlighting',
      'Long-Wear Smudge-Proof Lip Artistry & Lining',
      'Dupatta Draping, Jewelry Setting & Hair Styling Support',
      'All-Weather Ultra Fixing Mist for 16-Hour Lock'
    ],
    available: true
  },
  {
    id: 'bridal-hd',
    name: 'Bridal High-Definition (HD) Makeup',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    tagline: 'Flawless 4K camera-ready skin with invisible texture.',
    shortDescription: 'High-definition bridal makeup crafted with micro-pigment luxury cosmetics that blend effortlessly under 4K studio lenses.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '3 - 3.5 Hours',
    badge: '4K Camera Ready',
    popular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'HD Skin Primer & Pore Refining Treatment',
      'Micro-Blend HD Base Matching Skin Undertones',
      'Smokey / Shimmer Eye Artistry with False Lashes',
      'Precision Cheek Sculpting & Soft Bronze Glow',
      'Velvet Matte / Glossy Lip Application',
      'Dupatta Setting & Hair Styling Consultation',
      'High-Definition Transfer-Proof Setting'
    ],
    available: true
  },
  {
    id: 'bridal-airbrush',
    name: 'Bridal Luxury Airbrush Makeup',
    category: 'BRIDAL',
    categoryLabel: 'Bridal Artistry',
    tagline: 'Weightless porcelain finish with extraordinary longevity.',
    shortDescription: 'Feather-light airbrush mist technique delivering a seamless, water-resistant, ultra-luminous finish for discerning brides.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '3.5 - 4 Hours',
    badge: 'Ultra Long-Wear',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Airbrush Moisture Barrier Preparation',
      'Precision Airbrush Foundation Spray Base',
      'Water-Resistant & Tear-Proof Formulation',
      'Custom Eye Look & Layered False Lashes',
      'Seamless Highlighting & Soft Blush Radiance',
      'Full Bridal Jewelry & Veil/Dupatta Draping',
      'Luxury Finish Mist'
    ],
    available: true
  },

  // WEDDING EVENTS
  {
    id: 'engagement-look',
    name: 'Engagement & Ring Ceremony Makeup',
    category: 'WEDDING_EVENTS',
    categoryLabel: 'Wedding Ceremonies',
    tagline: 'Romantic, radiant glam for your first big celebration.',
    shortDescription: 'A dreamy, luminous makeup styling that strikes the perfect balance between modern elegance and celebratory charm.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '2.5 - 3 Hours',
    badge: 'Popular Choice',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Skin Conditioning & Illuminating Primer',
      'Medium-to-Full HD Foundation Base',
      'Romantic Rose-Gold / Champagne Eye Look',
      'Soft Glam Contouring & Radiant Blush',
      'Custom Lip Color & Precision Liner',
      'Lashes & Eyebrow Framing',
      'Setting Spray for Extended Wear'
    ],
    available: true
  },
  {
    id: 'reception-makeup',
    name: 'Reception & Evening Gala Glam',
    category: 'WEDDING_EVENTS',
    categoryLabel: 'Wedding Ceremonies',
    tagline: 'Bold, regal evening elegance that turns heads.',
    shortDescription: 'Sophisticated evening glam tailored to artificial ballroom lighting, featuring defined eyes and luminous sculpted features.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '2.5 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Evening Skin Hydration & Velvet Prep',
      'Sculpted HD Foundation & High-Definition Concealing',
      'Dramatic Smokey Eye or Metallic Shimmer Art',
      'Fluffy Volume Lashes & Brow Definition',
      'Bold Classic or Modern Nude Lip Finish',
      'Outfit Setting & Hair Touch-Up Coordination'
    ],
    available: true
  },
  {
    id: 'haldi-mehendi',
    name: 'Haldi, Mehendi & Sangeet Styling',
    category: 'WEDDING_EVENTS',
    categoryLabel: 'Wedding Ceremonies',
    tagline: 'Fresh, dewy, cheerful look for daytime festivities.',
    shortDescription: 'Sweat-resistant, youthful, radiant makeup crafted to look vibrant in daylight photos and survive dance performances.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '2 - 2.5 Hours',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Sun-Protected Dewy Skin Base',
      'Lightweight Long-Wear Foundation',
      'Pastel / Coral Eye Highlights',
      'Natural Flush Blush & Bronzing',
      'Tinted Hydrating Lip Color',
      'Waterproof Eyeline & Mascara'
    ],
    available: true
  },

  // PARTY & OCCASION
  {
    id: 'party-glam',
    name: 'Signature Party & Red Carpet Glam',
    category: 'PARTY_OCCASION',
    categoryLabel: 'Party & Festive',
    tagline: 'Stand out effortlessly at every elite event.',
    shortDescription: 'Chic, contemporary makeup customized for parties, high-profile dinners, milestone birthdays, and festive galas.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '1.5 - 2 Hours',
    popular: true,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Quick Radiance Skin Preparation',
      'Flawless Medium-Coverage Foundation',
      'Custom Eye Makeup with Soft Lashes',
      'Cheek Sculpting & Highlighter',
      'Transfer-Resistant Lip Color',
      'All-Night Setting Mist'
    ],
    available: true
  },
  {
    id: 'traditional-makeup',
    name: 'Traditional Regional & Festive Look',
    category: 'PARTY_OCCASION',
    categoryLabel: 'Party & Festive',
    tagline: 'Authentic cultural grace tailored for festive occasions.',
    shortDescription: 'Honoring Assamese, Bengali, and Indian traditional aesthetics with clean skin, auspicious red/maroon accents, and heritage jewelry matching.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '2 Hours',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Dewy Traditional Prep Base',
      'Kohl-Rimmed Classic Eye Styling',
      'Bindi & Traditional Motifs Application Support',
      'Warm Gold & Rose Cheek Glow',
      'Long-Wear Traditional Red/Plum/Coral Lip',
      'Saree & Mekhela Chador Draping Guidance'
    ],
    available: true
  },
  {
    id: 'soft-glam',
    name: 'Soft Glam & Daytime Elegance',
    category: 'PARTY_OCCASION',
    categoryLabel: 'Party & Festive',
    tagline: 'Your natural beauty, refined to perfection.',
    shortDescription: 'Understated luxury with seamless skin, soft earthy eye tones, and a lit-from-within glow that looks effortlessly magnetic.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '1.5 Hours',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Glow-Boosting Serum Primer',
      'Skin-Like Weightless Tint Foundation',
      'Soft Neutral Buffed Eyeshadow',
      'Natural Feathered Brow Grooming',
      'Cream Blush & Pearlescent Highlight',
      'Nude Hydrated Lip Formulation'
    ],
    available: true
  },

  // FACIALS & SKIN GLOW (NEW DEDICATED CATEGORY)
  {
    id: 'facial-gold-radiance',
    name: '24K Gold Luxury Radiance Facial',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    tagline: 'Royal festival radiance with 24K gold foil infusion.',
    shortDescription: 'Ultra-luxurious facial combining deep pore cleansing, botanical steam, 24K gold leaf serum massage, and a peel-off gold mask for lit-from-within festival glow.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '60 - 75 Mins',
    badge: 'Durga Puja Special',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Double Cleansing & Warm Herbal Steam',
      'Exfoliating Gold Micro-Bead Scrub',
      '24K Gold Serum Lymphatic Facial Massage',
      'Pore Tightening Rose Toner Mist',
      'Gold Peel-Off Illuminating Mask',
      'Hydrating Eye Cream & SPF Barrier'
    ],
    available: true
  },
  {
    id: 'facial-diamond-tan-removal',
    name: 'Diamond Polishing & Anti-Tan Brightening Facial',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    tagline: 'Erase sun tan & reveal diamond-bright skin.',
    shortDescription: 'Intensive anti-tan and skin renewal therapy utilizing micro-crystal diamond exfoliation and active brightening enzymes for instant clarity before pandal hopping.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '60 Mins',
    badge: 'Tan Removal Hit',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be1c61834?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'De-Tan Deep Purifying Cleanser',
      'Diamond Micro-Crystal Exfoliation',
      'Brightening Papaya/Fruit Enzyme Pack',
      'Cryo-Ice Globe Cooling Soothe',
      'Skin Tone Lightening Vitamin Serum',
      'UV Shield Hydration Lock'
    ],
    available: true
  },
  {
    id: 'facial-hydra-glow',
    name: 'Hydra-Dew Glass Skin Deep Hydration Facial',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    tagline: 'Plump, dewy, glass-like complexion for festive nights.',
    shortDescription: 'Multi-step hydration therapy infusing hyaluronic acid, plant ceramides, and antioxidant mist to quench dull or tired skin.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '60 Mins',
    badge: 'Korean Glass Glow',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Hydrating Milk Foam Cleanse',
      'Gentle Lactic Acid Exfoliation',
      'Hyaluronic Acid Moisture Drench',
      'Facial Acupressure & Jade Roller Sculpt',
      'Dewy Sheet Mask Infusion',
      'Glass-Skin Moisture Shield'
    ],
    available: true
  },
  {
    id: 'facial-o3-vitaminc',
    name: 'O3+ Vitamin-C Antioxidant Glow Facial',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    tagline: 'High-impact glow & dark spot correction.',
    shortDescription: 'Professional grade O3+ Vitamin-C oxygenating facial that brightens pigmentation, tightens enlarged pores, and leaves skin camera-ready.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '60 Mins',
    badge: 'High Impact Glow',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Deep Oxygenating Cleanse',
      'Enzymatic Pore Refining Treatment',
      'Vitamin-C Radiance Boosting Ampoule',
      'Rejuvenating Facial Lymphatic Drainage',
      'Brightening Rubber/Alginate Mask',
      'Antioxidant Shield Finishing'
    ],
    available: true
  },
  {
    id: 'facial-organic-herbal',
    name: 'Organic Herbal Detox & Acne-Calming Facial',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    tagline: 'Gentle, soothing botanical care for sensitive skin.',
    shortDescription: 'Formulated with pure neem, tea tree, sandalwood, and aloe vera extracts to eliminate bacteria, soothe irritation, and restore balanced glow.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '50 Mins',
    badge: 'Acne & Sensitive Skin',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Herbal Neem Deep Cleanser',
      'Gentle Walnut & Oats Exfoliation',
      'Soothe & Calm Tea Tree Compress',
      'Pure Sandalwood & Turmeric Pack',
      'Rosewater Toning & Cooling Gel'
    ],
    available: true
  },
  {
    id: 'facial-express-cleanup',
    name: 'Instant Glow Express Cleanup & Polishing',
    category: 'FACIALS',
    categoryLabel: 'Facials & Skin Glow',
    tagline: 'Quick 30-minute skin prep & deep blackhead removal.',
    shortDescription: 'Fast-action deep cleansing, gentle scrubbing, blackhead removal and instant glow mask for immediate refreshment before events.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '35 Mins',
    badge: 'Quick Prep',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Gentle Foaming Deep Cleanser',
      'Micro-Exfoliating Walnut & Fruit Scrub',
      'T-Zone Blackhead/Whitehead Extraction',
      'Chilled Rose Facial Massage',
      'Instant Radiance Hydrating Mask'
    ],
    available: true
  },

  // THREADING & GROOMING (NEW DEDICATED CATEGORY)
  {
    id: 'threading-brow-architecture',
    name: 'Precision Eyebrow Architecture & Shaping',
    category: 'THREADING',
    categoryLabel: 'Threading & Grooming',
    tagline: 'Flawlessly sculpted brow arches that frame your face.',
    shortDescription: 'Custom brow mapping and precision threading using anti-bacterial organic thread, followed by scissor alignment and chilled aloe soothing.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '15 Mins',
    badge: 'Signature Framing',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Facial Proportion Brow Mapping',
      'Precision Organic Thread Shaping',
      'Micro-Trimming & Alignment',
      'Chilled Aloe Vera Soothing Massage'
    ],
    available: true
  },
  {
    id: 'threading-upperlip-chin',
    name: 'Upper Lip & Chin Precision Threading',
    category: 'THREADING',
    categoryLabel: 'Threading & Grooming',
    tagline: 'Clean, smooth canvas for seamless lipstick application.',
    shortDescription: 'Gentle and swift removal of unwanted upper lip and chin hair to ensure a clean, shadow-free foundation and lipstick finish.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '15 Mins',
    badge: 'Essential Prep',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Skin Powder Prep',
      'Upper Lip Precision Threading',
      'Chin & Jawline Fine Hair Removal',
      'Cooling Rosewater Compress'
    ],
    available: true
  },
  {
    id: 'threading-fullface-fuzz',
    name: 'Full Face Threading & Peach Fuzz Removal',
    category: 'THREADING',
    categoryLabel: 'Threading & Grooming',
    tagline: 'Silky smooth velvet canvas for 4K HD makeup.',
    shortDescription: 'Complete facial threading covering forehead, eyebrow arches, upper lip, chin, and sideburns to eliminate peach fuzz for glass-smooth makeup.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '30 Mins',
    badge: 'Flawless Canvas',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be1c61834?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Forehead Hairline Framing',
      'Eyebrow Arch Sculpting',
      'Upper Lip & Chin Threading',
      'Cheek & Sideburn Peach Fuzz Clearing',
      'Antiseptic Rose Mist & Ice Globe Calm'
    ],
    available: true
  },
  {
    id: 'threading-forehead-sides',
    name: 'Forehead & Sideburns Detailing',
    category: 'THREADING',
    categoryLabel: 'Threading & Grooming',
    tagline: 'Clean hairline contouring & sideburn shaping.',
    shortDescription: 'Refining the forehead perimeter and sideburn contours for clean updos, bridal hair styling, and traditional jewelry settings.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '20 Mins',
    badge: 'Contour Detailing',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Forehead Hairline Defining',
      'Sideburn Grooming & Tapering',
      'Pore Tightening Astringent Mist',
      'Aloe Hydration Touch'
    ],
    available: true
  },
  {
    id: 'threading-combo-soothing-pack',
    name: 'Full Face Grooming & Calming Rose Pack Combo',
    category: 'THREADING',
    categoryLabel: 'Threading & Grooming',
    tagline: 'Complete threading + anti-redness calming cooling pack.',
    shortDescription: 'Full face threading paired with an ice-globe lymphatic massage and chilled rosewater-cucumber pack to prevent any redness or breakouts.',
    price: 'Special Puja Price',
    priceType: 'starting',
    duration: '45 Mins',
    badge: 'Grooming Combo',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Complete Full Face Threading (All Zones)',
      'Cryo Ice-Globe Massage',
      'Cucumber & Rosewater Calming Pack',
      'Pore Refine Mist & Sun Shield'
    ],
    available: true
  },

  // SPECIALIZED
  {
    id: 'editorial-photoshoot',
    name: 'Editorial, Fashion & Studio Shoot Makeup',
    category: 'SPECIALIZED',
    categoryLabel: 'Specialized & Editorial',
    tagline: 'Calibrated specifically for flash, strobes & studio optics.',
    shortDescription: 'Masterful makeup artistry engineered for photography sessions, model portfolios, lookbooks, and high-flash environments without flashback.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '2 - 3 Hours',
    badge: 'Studio Calibrated',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Non-Reflective Matte/Satin Base Chemistry',
      'Zero-Flashback Powder Setting',
      'Graphic Liner / Editorial Eye Design',
      'High-Contrast Facial Contouring',
      'On-Set Quick Touch-Up Guidance',
      'Texture Minimization Technique'
    ],
    available: true
  },
  {
    id: 'eye-specialist',
    name: 'Signature Eye Artistry & Cut Crease',
    category: 'SPECIALIZED',
    categoryLabel: 'Specialized & Editorial',
    tagline: 'Hypnotic, precision eye makeup styling.',
    shortDescription: 'Specialized eye transformation including dramatic cut-crease, smokey gradient, Arabic eyeliner, glitter press, and custom lash stacking.',
    price: 'Contact for Quote',
    priceType: 'contact',
    duration: '1 Hour',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1000&q=80',
    includedItems: [
      'Eye Primer & Canvas Base Neutralization',
      'Precision Cut Crease / Halo / Gradient Technique',
      'Glitter Inlay or Matte Shadow Blending',
      'Waterproof Winged & Tightlined Kohl',
      'Custom Multi-Dimensional False Lashes'
    ],
    available: true
  }
];
