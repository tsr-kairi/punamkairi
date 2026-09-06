export interface SkillCategory {
  category: string;
  items: {
    name: string;
    description: string;
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Signature Techniques",
    items: [
      { name: "Bridal HD Artistry", description: "Seamless 4K camera-ready base formulation with zero cakeiness" },
      { name: "Airbrush Application", description: "Featherweight, sweat-resistant, all-day water-sealed finish" },
      { name: "Precision Cut-Crease", description: "Crisp, dimensional eye tailoring that enhances eye symmetry" },
      { name: "Editorial Smokey Eyes", description: "Velvet blending of deep pigments for dramatic evening elegance" }
    ]
  },
  {
    category: "Complexion & Color Mastery",
    items: [
      { name: "Skin Tone Calibration", description: "Accurate undertone matching across all Indian skin complexities" },
      { name: "Color Correction", description: "Neutralizing pigmentation, dark circles, and redness naturally" },
      { name: "Structural Contouring", description: "Sculpting facial bone structure with micro-placement technique" },
      { name: "Hydrating Skin Prep", description: "Custom skincare prep to ensure 16+ hour makeup durability" }
    ]
  },
  {
    category: "Finishing & Styling",
    items: [
      { name: "Lash Architecture", description: "Custom stacking of mink and silk lashes for eye shape optimization" },
      { name: "Ombré Lip Sculpting", description: "Long-wear, transfer-proof lip artistry with defined contours" },
      { name: "Dupatta & Jewelry Draping", description: "Complete royal bridal styling, veil setting, and ornamentation" },
      { name: "Zero-Flashback Setting", description: "Engineered specifically for heavy photography flashes and video" }
    ]
  }
];

export const signatureFeatures = [
  {
    title: "4+ Years of Artistry",
    description: "Extensive hands-on experience crafting personalized looks for brides, party guests, and festive occasions.",
    icon: "Award"
  },
  {
    title: "Skin-Tone-Aware Formulation",
    description: "Mastery in undertone analysis ensuring your base looks like radiant second skin, never ashy or mismatched.",
    icon: "Sparkles"
  },
  {
    title: "International Luxury Products",
    description: "Strictly high-end, dermatologist-tested, long-wearing cosmetic formulas curated for all skin types.",
    icon: "ShieldCheck"
  },
  {
    title: "Strict Hygiene Protocol",
    description: "Sanitized brushes, disposable applicators, and immaculate product hygiene maintained at every step.",
    icon: "CheckCircle2"
  },
  {
    title: "On-Location Availability",
    description: "Comfortable doorstep and venue bridal makeup services across Sribhumi, Karimganj, Silchar, and beyond.",
    icon: "MapPin"
  },
  {
    title: "Camera & Flash Calibrated",
    description: "Engineered to look breathtaking in person and flawless in high-resolution photography and 4K video.",
    icon: "Camera"
  }
];
