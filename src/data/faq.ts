export interface TestimonialItem {
  id: string;
  clientName: string;
  occasion: string;
  location?: string;
  quote: string;
  date?: string;
  rating: number;
}

// Configurable toggle: Only display real, verified client testimonials when provided
export const testimonialsConfig = {
  enabled: false, // Set to true once client testimonials are provided
  items: [] as TestimonialItem[]
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a makeup session with Punam Kairi?',
    answer: 'Simply select your desired service from our Digital Menu, choose your preferred date, enter your details, and tap "Send Booking Request on WhatsApp". Punam will review your date availability and connect directly with you to confirm.'
  },
  {
    id: 'faq-2',
    question: 'Do you travel to venues or client homes for bridal makeup?',
    answer: 'Yes, on-location wedding venue and home makeup services are available across Sribhumi, Karimganj, Silchar, and surrounding regions. Travel details can be discussed during booking confirmation.'
  },
  {
    id: 'faq-3',
    question: 'How far in advance should I book my bridal makeup?',
    answer: 'Wedding dates fill up rapidly during the auspicious wedding season. We recommend securing your bridal booking 1 to 3 months in advance to guarantee your preferred date and time slot.'
  },
  {
    id: 'faq-4',
    question: 'What makeup brands and products do you use?',
    answer: 'We use strictly authentic, premium, international and professional high-definition cosmetics suited for high-humidity conditions and 4K photography, formulated to be gentle on all skin types.'
  },
  {
    id: 'faq-5',
    question: 'Is dupatta draping, jewelry setting, and hair styling included?',
    answer: 'Yes! Full bridal packages include dupatta draping, veil placement, jewelry placement, and coordinated hair styling support to give you a complete, harmonious royal bridal finish.'
  }
];
