/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory, BridalPackage, TeamMember, Testimonial, GalleryItem } from "./types";

// Business general details
export const SALON_DETAILS = {
  name: "Zari Beauty Salon & Bridal Studio",
  tagline: "Your Private Haven of Luxury & Grace",
  ladiesOnlyMessage: "We operate strictly as a private, ladies-only space, ensuring complete comfort, privacy, and relaxation for all our sisters and brides.",
  mainPhone: "+92 321 8274799", // Sample Pakistani format
  whatsappNumber: "923218274799", // Raw number for API
  instagramUrl: "https://instagram.com/zaribeautysalon_demo",
  facebookUrl: "https://facebook.com/zaribeautysalon_demo",
  branches: [
    {
      name: "DHA Clifton Branch",
      address: "Main Bukhari Commercial, Lane 4, Phase 6, DHA, Karachi",
      phone: "+92 21 35248891",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14486.276229984924!2d67.06546375000001!3d24.7930906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cf106b0d9bb%3A0xc6cb1c7e2b71efc5!2sBukhari%20Commercial%20Area%20DHA%20Phase%206%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
    },
    {
      name: "Gulshan-e-Iqbal Branch",
      address: "Block 13-A, near Hassan Square, Gulshan-e-Iqbal, Karachi",
      phone: "+92 21 34981122",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14478.18835061699!2d67.0700547!3d24.879435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eed689f2cf3%3A0x89e2480ad30a9e99!2sGulshan-e-Iqbal%20Block%2013%20Karachi!5e0!3m2!1sen!2spk!4v1700000000001!5m2!1sen!2spk",
    }
  ],
  openingHours: {
    days: "Tuesday – Sunday",
    time: "11:00 AM – 8:00 PM",
    closed: "Monday Closed"
  }
};

// Rich service list with detailed pricing in PKR
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair & Styling",
    description: "Expert cuts, coloring, and strengthening treatments tailored to your hair type.",
    icon: "Scissors",
    services: [
      {
        id: "hair-1",
        name: "Signature Haircut & Blowdry",
        price: 4500,
        duration: "1 hour",
        description: "Personalized consultation, luxury hair wash, split-end removal, signature style-cut, and a bouncy professional blowdry.",
        popular: true
      },
      {
        id: "hair-2",
        name: "Premium Balayage & Highlights",
        price: 18500,
        duration: "3-4 hours",
        description: "Seamless hand-painted color melting tailored to your base tone. Includes bond protection (Olaplex treatment).",
        popular: true
      },
      {
        id: "hair-3",
        name: "Brazilian Keratin Treatment",
        price: 22000,
        duration: "3 hours",
        description: "Advanced smoothing treatment that eliminates frizz, restores shine, and straightens hair for up to 4-5 months.",
      },
      {
        id: "hair-4",
        name: "Intense Protein Hair Mask",
        price: 3500,
        duration: "45 mins",
        description: "Deep conditioning steam treatment for dry, damaged, or chemically processed hair to restore elasticity.",
      },
      {
        id: "hair-5",
        name: "Classic Blowdry & Styling",
        price: 2500,
        duration: "30 mins",
        description: "Inward/outward curls, sleek straight finish, or a messy textured look for party wear."
      }
    ]
  },
  {
    id: "skin",
    title: "Skin & Facials",
    description: "Clinical and organic skincare treatments for a radiant, glowing complexion.",
    icon: "Sparkles",
    services: [
      {
        id: "skin-1",
        name: "6-Step Advanced Hydrafacial",
        price: 8500,
        duration: "1 hour 15 mins",
        description: "Deep pore exfoliation, chemical peel, blackhead extraction, antioxidant hydration, and targeted LED light therapy for instant Karachi humidity glow.",
        popular: true
      },
      {
        id: "skin-2",
        name: "Dermaclear Whitening & Brightening Facial",
        price: 6000,
        duration: "1 hour",
        description: "Therapeutic facial using high-grade whitening serum concentrates, botanical extracts, and double-mask application to combat tan and pigmentation.",
      },
      {
        id: "skin-3",
        name: "Janssen Luxury Anti-Aging Facial",
        price: 7500,
        duration: "1 hour 15 mins",
        description: "Premium German Janssen facial system targeting fine lines, promoting collagen production, and tightening pores with lymphatic drainage massage.",
      },
      {
        id: "skin-4",
        name: "Quick Herbal Glow Facial",
        price: 3000,
        duration: "40 mins",
        description: "All-natural herbal facial scrub, massage, and cooling cucumber pack — perfect for sensitive skin and quick preparation."
      }
    ]
  },
  {
    id: "makeup",
    title: "Professional Makeup",
    description: "Flawless artistry for your big days or regular gatherings, styled to perfection.",
    icon: "Palette",
    services: [
      {
        id: "makeup-1",
        name: "Premium HD Bridal Makeup (per day)",
        price: 35000,
        duration: "3 hours",
        description: "Stunning airbrush/HD long-lasting makeup, hairstyling, dupatta settings, jewelry placement, nail polish, and customized eyelashes.",
        popular: true
      },
      {
        id: "makeup-2",
        name: "Traditional Barat Bridal Makeup",
        price: 45000,
        duration: "3.5 hours",
        description: "Classic majestic red bridal makeup by senior stylist, heavy lashes, hair extensions, detailed jewelry draping, and deluxe pre-makeup hydra-boost.",
      },
      {
        id: "makeup-3",
        name: "Elegant Signature Nikkah / Engagement Makeup",
        price: 20000,
        duration: "2 hours",
        description: "Soft, dewy, pastels-infused look. Includes clean soft hairdo or braids, flower setting, and delicate contouring.",
        popular: true
      },
      {
        id: "makeup-4",
        name: "Glamorous Party Makeup with Lashes",
        price: 8500,
        duration: "1.5 hours",
        description: "Bold smokey or cut-crease party makeup, customized styling blowdry/updo, and false mink lashes."
      }
    ]
  },
  {
    id: "nails",
    title: "Luxury Nails",
    description: "Indulgent hand and foot treatments with premium global nail care brands.",
    icon: "Sparkles",
    services: [
      {
        id: "nail-1",
        name: "Luxury Gel Mani-Pedi with Spa Scrub",
        price: 4500,
        duration: "1 hour 15 mins",
        description: "Therapeutic soak, organic scrub, filing, cuticle care, relaxing lavender oil massage, and long-lasting OPI gel color coat.",
        popular: true
      },
      {
        id: "nail-2",
        name: "Full Set Acrylic Nail Extensions",
        price: 6500,
        duration: "1.5 hours",
        description: "High-quality overlay acrylic extensions with customized shaping (coffin, almond, square) and single shade nail paint.",
      },
      {
        id: "nail-3",
        name: "Hand-Painted Nail Art & Chrome Finish",
        price: 1500,
        duration: "30 mins",
        description: "Detailed customized nail art, glitter gradients, stones, or premium mirror-finish chrome pigments on all 10 fingers."
      }
    ]
  },
  {
    id: "waxing",
    title: "Waxing & Threading",
    description: "Hygienic and precise hair removal services using quality hypoallergenic waxes.",
    icon: "Flower",
    services: [
      {
        id: "wax-1",
        name: "Full Body Rica Waxing (excluding bikini)",
        price: 7500,
        duration: "1.5 hours",
        description: "Premium Italian Rica liposoluble wax that is gentle on skin, reduces hair growth, and causes minimal pain. Hydrates skin instantly.",
        popular: true
      },
      {
        id: "wax-2",
        name: "Full Arms & Legs Rica Wax",
        price: 3500,
        duration: "45 mins",
        description: "Premium wax application for smooth hair-free skin without irritation."
      },
      {
        id: "wax-3",
        name: "Eyebrow & Upper Lip Threading",
        price: 600,
        duration: "15 mins",
        description: "Flawless threading to shape brows and remove unwanted facial hair cleanly."
      },
      {
        id: "wax-4",
        name: "Full Face Threading & Soothing Mask",
        price: 1800,
        duration: "30 mins",
        description: "Full facial threading followed by a chilled aloe vera cooling mask to prevent redness."
      }
    ]
  }
];

// Bridal and Party Packages
export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "pkg-1",
    name: "Classic Bridal Elegance",
    price: 55000,
    tagline: "The perfect curation for your big day",
    description: "A flawless, durable makeup look crafted for your Barat or Valima, ensuring you glow under every camera angle and spotlight.",
    servicesIncluded: [
      "HD/3D Premium Bridal Makeup by Senior Artist",
      "Signature Hairdos & Custom Extensions",
      "Dupatta Settings, Veil pinning & Jewelry Draping",
      "Hydrating Collagen Eye Treatment",
      "OPI Nail Polish Application (Hands & Feet)",
      "Premium False Mink Lashes"
    ],
    bestValue: false
  },
  {
    id: "pkg-2",
    name: "Royal Majestic Bridal (Duo-Day Package)",
    price: 85000,
    tagline: "Our ultimate, stress-free royal experience",
    description: "Covering both your Barat & Valima. This package offers supreme attention, custom prep facials, and two entirely unique looks.",
    servicesIncluded: [
      "Barat Bridal Makeup & Valima Bridal Makeup",
      "Complimentary Janssen Skin Prep Facial (worth 7.5k)",
      "Senior Makeup Artist Exclusive Attention",
      "Deluxe Hair Styling, Back-combing, & Traditional Hair Ornaments placement",
      "Premium Acrylic Nail Extensions or Custom Gel Manicure",
      "Dupatta Setting & Heavy Jewelry draping on both days",
      "Private VIP Bridal Suite access with refreshments"
    ],
    bestValue: true
  },
  {
    id: "pkg-3",
    name: "Elegant Nikkah & Shendi Combo",
    price: 38000,
    tagline: "Soft, romantic glow for intimate events",
    description: "Designed for modern brides looking for breezy, romantic pastel makeup with gorgeous, natural hair locks.",
    servicesIncluded: [
      "Signature Nikkah or Engagement Dewy Makeup",
      "Intimate Shendi Hairdo (Half updo or elegant curls)",
      "Flower/Gajra adjustment & Jewelry placement",
      "Deluxe Glow Mask application prior to makeup",
      "Nail paint & luxury eyelash extensions"
    ],
    bestValue: false
  }
];

// Stylist profiles
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Zari Khan",
    role: "Founder & Master Bridal Artist",
    specialty: "Bridal Makeup & Aesthetics",
    bio: "With over 12 years of hands-on experience in high-fashion and bridal cosmetics across London and Karachi, Zari leads the artistic direction, specializing in creating flawless, radiant complexions that last through long events.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "team-2",
    name: "Anum Rizvi",
    role: "Senior Hair Therapist & Stylist",
    specialty: "Creative Color (Balayage) & Keratin",
    bio: "Anum is our color magician. Trained at L'Oréal Academy, she is known for her precise sectioning and deep understanding of South Asian hair pigment, delivering perfect blonde melts and frizz-free keratin smooths.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "team-3",
    name: "Sana Malik",
    role: "Lead Skincare specialist",
    specialty: "Advanced Hydrafacials & Dermaclear",
    bio: "Sana is a certified aesthetician dedicated to skin health. She analyzes your skin barrier and designs personalized treatments, specializing in hydration therapy to tackle Karachi's humid climate issues.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "team-4",
    name: "Maria Joseph",
    role: "Nail Care & Lash Specialist",
    specialty: "Acrylic Extensions & Detailed Nail Art",
    bio: "Maria brings international nail art trends directly to Karachi. From subtle pastel gel manicures to dramatic rhinestone acrylic extensions, her precision and hygienic standards are unmatched.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

// Authentic Customer Reviews
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Ayesha Siddiqui",
    location: "DHA Phase 5, Karachi",
    rating: 5,
    review: "I booked Zari for my Barat makeup, and she did an absolutely stunning job. My skin looked so smooth and glowing, not cakey at all! The ladies-only environment made my bridesmaids and mother feel completely at ease while getting ready. Highly recommended!",
    serviceReceived: "Traditional Barat Bridal Makeup"
  },
  {
    id: "rev-2",
    name: "Marium Sohail",
    location: "Gulshan-e-Iqbal, Karachi",
    rating: 5,
    review: "Their 6-step Advanced Hydrafacial is a lifesaver in Karachi's weather! Sana is so detailed and patient. My skin immediately felt clean and radiant. Best salon experience in Karachi so far, very clean and peaceful.",
    serviceReceived: "6-Step Advanced Hydrafacial"
  },
  {
    id: "rev-3",
    name: "Zehra Naqvi",
    location: "Clifton, Karachi",
    rating: 5,
    review: "Anum is absolute magic with hair! I was very scared of getting highlights as my hair is naturally fine, but she did a beautiful balayage that did zero damage. The bounce in the blowdry is legendary!",
    serviceReceived: "Premium Balayage & Highlights"
  },
  {
    id: "rev-4",
    name: "Farah Sheikh",
    location: "KDA Scheme 1, Karachi",
    rating: 5,
    review: "I booked the Nikkah Package for my sister, and she looked like a dream. The pastel look was perfectly customized to her dress and jewelry. The staff is extremely polite and pampering.",
    serviceReceived: "Elegant Nikkah Package"
  }
];

// Gallery Images (using high quality Unsplash visual items and generated assets)
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxurious Salon Interior Bukhari Branch",
    category: "salon",
    imageUrl: "/src/assets/images/salon_hero_banner_1783922144043.jpg", // Generated
    alt: "Elegantly lit rose gold beauty salon interior in Karachi"
  },
  {
    id: "gal-2",
    title: "Signature Royal Barat Bride",
    category: "bridal",
    imageUrl: "/src/assets/images/karachi_bridal_makeup_1783922158981.jpg", // Generated
    alt: "South Asian bride with glowing warm gold wedding makeup"
  },
  {
    id: "gal-3",
    title: "Bouncy Signature Styling Cut & Color",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    alt: "Premium smooth hair blowdry styling at Karachi salon"
  },
  {
    id: "gal-4",
    title: "Soothing Advanced Hydrafacial Treatment",
    category: "skin",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    alt: "Skincare treatment and facial massage"
  },
  {
    id: "gal-5",
    title: "Premium Acrylic Chrome Nails",
    category: "nails",
    imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    alt: "Elegant hand-painted gel manicure"
  },
  {
    id: "gal-6",
    title: "Deluxe Balayage & Caramel Melting",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1605497746444-ac9dbd324ce8?auto=format&fit=crop&q=80&w=800",
    alt: "Warm blonde and caramel balayage highlight work on customer"
  },
  {
    id: "gal-7",
    title: "Soft Glamorous Pastel Nikkah Bride",
    category: "bridal",
    imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=800",
    alt: "Intimate Nikkah makeup look with glowing skin"
  },
  {
    id: "gal-8",
    title: "Relaxing Styling and Mirror Stations",
    category: "salon",
    imageUrl: "https://images.unsplash.com/photo-1521590832167-7bcbfea4a3a9?auto=format&fit=crop&q=80&w=800",
    alt: "Modern minimalist mirror station at Bukhari Phase 6 salon"
  }
];
