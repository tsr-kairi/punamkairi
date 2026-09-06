export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  iconName: string;
}

export interface SiteConfig {
  brandName: string;
  businessDescriptor: string;
  artistName: string;
  artistTitle: string;
  tagline: string;
  alternativeTaglines: string[];
  experience: string;
  experienceYears: number;
  phone: string;
  whatsappNumber: string; // international format without plus for wa.me
  whatsappDisplay: string;
  email?: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  googleMapsUrl: string;
  socialLinks: SocialLink[];
  productionUrl: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  branding: {
    monogram: string;
    logoImage: string;
    artistHeroImage: string;
    artistPortraitSquare: string;
    banners: {
      bridal: string;
      preWedding: string;
      facialCare: string;
      party: string;
    };
  };
  policy: {
    advanceBooking: string;
    cancellation: string;
    onLocationTravel: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "PUNAM KAIRI",
  businessDescriptor: "MAKEUP ARTISTRY",
  artistName: "Mrs. Punam Kairi",
  artistTitle: "Professional Makeup Artist & Beauty Stylist",
  tagline: "WHERE BEAUTY MEETS ARTISTRY.",
  alternativeTaglines: [
    "Beauty, Defined by Artistry.",
    "Your Beauty. Her Artistry.",
    "Crafted to Make You Unforgettable.",
    "Every Face. A Work of Art."
  ],
  experience: "4+ Years",
  experienceYears: 4,
  phone: "+91 6003756297",
  whatsappNumber: "916003756297",
  whatsappDisplay: "+91 6003756297",
  email: "contact@punamkairi.com",
  address: {
    line1: "Lowairpoa Kanmoon Road, Near Longai Bridge",
    line2: "Sribhumi",
    city: "Sribhumi",
    state: "Assam",
    pincode: "788726",
    full: "Lowairpoa Kanmoon Road, Near Longai Bridge, Sribhumi, Assam – 788726"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lowairpoa+Kanmoon+Road+Near+Longai+Bridge+Sribhumi+Assam+788726",
  socialLinks: [
    {
      id: "instagram",
      platform: "Instagram",
      handle: "@punamkoiri2000",
      url: "https://www.instagram.com/punamkoiri2000",
      iconName: "Instagram"
    },
    {
      id: "facebook",
      platform: "Facebook",
      handle: "punamkairiofficial",
      url: "https://www.facebook.com/punamkairiofficial",
      iconName: "Facebook"
    }
  ],
  productionUrl: "https://punamkairi.com",
  meta: {
    title: "Punam Kairi Makeup Artistry | Professional Makeup Artist in Sribhumi, Assam",
    description: "Punam Kairi Makeup Artistry offers professional bridal, party, engagement, reception, HD, airbrush and occasion makeup services in Sribhumi, Assam.",
    ogImage: "/assets/images/punam-kairi-logo.jpg"
  },
  branding: {
    monogram: "PK",
    logoImage: "/assets/images/punam-kairi-logo.jpg",
    artistHeroImage: "/assets/images/punam-kairi-portrait.jpg",
    artistPortraitSquare: "/assets/images/punam-kairi-portrait.jpg",
    banners: {
      bridal: "/assets/images/banners/banner-bridal-makeup.jpg",
      preWedding: "/assets/images/banners/banner-prewedding-makeup.jpg",
      facialCare: "/assets/images/banners/banner-facial-care.jpg",
      party: "/assets/images/banners/banner-party-makeup.jpg"
    }
  },
  policy: {
    advanceBooking: "Prior booking requested to secure desired event date and time slot.",
    cancellation: "Please notify at least 72 hours prior for date adjustments subject to schedule availability.",
    onLocationTravel: "On-location wedding venue & home bridal styling available across Sribhumi, Karimganj, Silchar & surrounding regions upon request."
  }
};
