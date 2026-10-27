import {
  ServiceItem,
  PlatformItem,
  PortfolioProject,
  ResultMetric,
  CaseStudyItem,
  ProcessStep,
  TrustItem,
  FaqItem,
  SocialLink
} from '../types';

export const BRAND = {
  name: "Sammie Techie Studio",
  shortName: "Sammie Techie",
  eyebrow: "SAMMIE TECHIE STUDIO | E-COMMERCE & DIGITAL GROWTH",
  tagline: "I Build, Optimize & Grow Your Digital Store.",
  subtitle: "From Shopify storefronts and digital product platforms to SEO, sales funnels, and marketing automation, I help turn online business ideas into professional selling experiences.",
  personalQuote: "I build, fix & improve the places you sell online.",
  footerSummary: "Helping businesses build, launch, and improve their digital stores through thoughtful design, optimization, and marketing systems.",
};

export const CONTACT = {
  whatsappPhone: "+234 808 629 7379",
  whatsappRaw: "2348086297379",
  instagram: {
    url: "https://www.instagram.com/sammiettechy?srtk=MTZ3c3BsdjgyMm9pMg==",
    handle: "@sammiettechy",
  },
  upwork: {
    url: "https://www.upwork.com/freelancers/~01f996032a2a2a94da",
    label: "Upwork Profile",
  },
  facebook: {
    url: "https://www.facebook.com/profile.php?id=61557344897279",
    label: "Facebook Page",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/abiodun-samuel-4837b83a2/",
    label: "LinkedIn Profile",
  },
};

import portrait from '../assets/images/IMG-20261019-WA0257.jpg';
import heroWorkspace from '../assets/images/hero_ecommerce_studio_1792080142796.jpg';
import shopifyFashion from '../assets/images/showcase_shopify_fashion_1792080143612.jpg';
import digitalCreator from '../assets/images/showcase_digital_creator_1792080145113.jpg';
import funnelAnalytics from '../assets/images/showcase_funnel_analytics_1792080145257.jpg';
import artisanDecor from '../assets/images/showcase_artisan_decor_1792080415326.jpg';
import fitnessGear from '../assets/images/showcase_fitness_gear_1792080415744.jpg';

export const ASSETS = {
  portrait,
  heroWorkspace,
  shopifyFashion,
  digitalCreator,
  funnelAnalytics,
  artisanDecor,
  fitnessGear,
};


export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    platform: "Instagram",
    url: CONTACT.instagram.url,
    displayLabel: CONTACT.instagram.handle,
    icon: "Instagram",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: CONTACT.linkedin.url,
    displayLabel: "Samuel Abiodun",
    icon: "Linkedin",
  },
  {
    id: "upwork",
    platform: "Upwork",
    url: CONTACT.upwork.url,
    displayLabel: "Top Rated Freelancer",
    icon: "Briefcase",
  },
  {
    id: "facebook",
    platform: "Facebook",
    url: CONTACT.facebook.url,
    displayLabel: "Sammie Techie Studio",
    icon: "Facebook",
  },
];

/**
 * WhatsApp message generation utility
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encoded}`;
}

export const WHATSAPP_TEMPLATES = {
  general: "Hi Sammie! I visited your portfolio and I'm interested in your services. I'd like to discuss my project and understand how you can help. Here are a few details about what I need:",
  shopify: "Hi Sammie! I'm interested in your Shopify store setup service. I'd like to discuss my business, the store I want to build, and the next steps. Here are my project details:",
  digitalProduct: "Hi Sammie! I'm interested in setting up a digital product store using a suitable platform such as Stan Store, Gumroad, Payhip, or Etsy. I'd like to discuss my products and requirements.",
  seo: "Hi Sammie! I'd like help improving my website's SEO, user experience, or overall store performance. Here is my website and what I'd like to improve:",
  funnel: "Hi Sammie! I'm interested in sales funnel setup or marketing automation for my business. I'd like to discuss my goals, current tools, and requirements.",
  booking: "Hi Sammie! I'd like to discuss a potential project with Sammie Techie Studio. Please let me know the next steps.",
  faqQuestion: "Hi Sammie! I went through your FAQ on your portfolio and have a specific question regarding my store project:",
};

export const QUICK_HERO_HIGHLIGHTS = [
  { title: "Shopify & E-commerce", description: "Modern, high-converting digital storefronts" },
  { title: "Digital Product Stores", description: "Stan Store, Payhip, Gumroad & Etsy setups" },
  { title: "SEO & Conversion Optimization", description: "Search readiness & seamless customer journeys" },
  { title: "Funnels & Marketing Automation", description: "Lead capture & automated follow-up sequences" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "shopify-store-setup",
    category: "shopify",
    title: "Shopify Store Setup & Development",
    description: "Launch a professional Shopify store with a thoughtful layout, product organization, responsive design, and the essential features needed to sell online.",
    features: [
      "New store setup & architecture",
      "Theme customization & styling",
      "Product & collection organization",
      "Essential store & checkout configuration",
      "Mobile-first responsive storefront design"
    ],
    icon: "ShoppingBag",
    whatsappTemplate: WHATSAPP_TEMPLATES.shopify,
  },
  {
    id: "digital-product-store",
    category: "digital-product",
    title: "Digital Product Store Setup",
    description: "Set up a streamlined digital storefront for creators, educators, and entrepreneurs who want to sell digital products online.",
    features: [
      "Stan Store, Gumroad, Payhip & Etsy setups",
      "Digital product listings & pricing",
      "Automated digital product delivery",
      "Custom creator store branding",
      "Frictionless customer purchase flow"
    ],
    icon: "Package",
    whatsappTemplate: WHATSAPP_TEMPLATES.digitalProduct,
  },
  {
    id: "website-design",
    category: "website-design",
    title: "Website Design & Optimization",
    description: "Create or improve a modern, responsive website that communicates your value clearly and helps visitors take action.",
    features: [
      "High-converting landing page design",
      "Storefront & website redesigns",
      "Flawless mobile responsiveness",
      "User experience & navigation hierarchy",
      "Speed & asset loading improvements"
    ],
    icon: "Layout",
    whatsappTemplate: "Hi Sammie! I'm interested in website design or redesign for my store. Here are the details of what I have in mind:",
  },
  {
    id: "seo-optimization",
    category: "seo",
    title: "SEO Optimization",
    description: "Improve your website's search readiness and help search engines better understand your content and products.",
    features: [
      "Strategic keyword research & mapping",
      "Page titles & compelling meta descriptions",
      "Clean heading hierarchy & content tags",
      "Product & collection page optimization",
      "Internal linking & image SEO foundations"
    ],
    icon: "Search",
    whatsappTemplate: WHATSAPP_TEMPLATES.seo,
  },
  {
    id: "sales-funnel-setup",
    category: "funnels",
    title: "Sales Funnel Setup",
    description: "Create a clearer path from visitor interest to inquiry, signup, or purchase with strategic conversion funnels.",
    features: [
      "Targeted lead capture pages",
      "Structured offer presentation & pricing",
      "Strategic call-to-action placement",
      "Checkout flow friction reduction",
      "Post-purchase upsells & thank you pages"
    ],
    icon: "Filter",
    whatsappTemplate: WHATSAPP_TEMPLATES.funnel,
  },
  {
    id: "marketing-automation",
    category: "automation",
    title: "Marketing Automation",
    description: "Reduce repetitive marketing tasks with practical automation and customer communication workflows.",
    features: [
      "Automated email signup & welcome flows",
      "Nurture & customer onboarding sequences",
      "Abandoned-cart recovery workflows",
      "Customer follow-up & review reminders",
      "Integration between CRM, store & email tools"
    ],
    icon: "Zap",
    whatsappTemplate: "Hi Sammie! I'm interested in marketing automation and email flows for my e-commerce business. Here is what I am looking to automate:",
  },
];

export const PLATFORMS: PlatformItem[] = [
  {
    id: "shopify",
    name: "Shopify",
    tagline: "Global E-Commerce Standard",
    description: "Full-featured physical and hybrid commerce with robust inventory and checkouts.",
    badge: "Official Platform",
  },
  {
    id: "stan-store",
    name: "Stan Store",
    tagline: "Creator Link-in-Bio Store",
    description: "Quick 1-tap mobile storefront for courses, bookings, and digital downloads.",
    badge: "Creator Economy",
  },
  {
    id: "gumroad",
    name: "Gumroad",
    tagline: "Direct Digital Sales",
    description: "Simple, battle-tested platform for software, ebooks, assets, and memberships.",
    badge: "Digital Products",
  },
  {
    id: "payhip",
    name: "Payhip",
    tagline: "Zero-Friction Selling",
    description: "Accessible digital downloads, courses, and coaching with flexible customer delivery.",
    badge: "Digital & Downloads",
  },
  {
    id: "etsy",
    name: "Etsy",
    tagline: "Marketplace Presence",
    description: "Optimized storefront presentation and listing SEO for creative & digital templates.",
    badge: "Marketplace Setup",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "aura-boutique",
    title: "Aura Boutique & Apparel",
    platform: "Shopify",
    category: "Shopify Store",
    categorySlug: "shopify",
    description: "A luxury lifestyle and apparel storefront featuring warm earth tones, seamless product filtering, and a streamlined mobile checkout flow.",
    challenge: "The brand struggled with high mobile bounce rates and low product engagement across multi-variant collections.",
    solution: "Rebuilt the collection navigation, improved product card legibility, implemented quick-add drawer, and refined the typography hierarchy.",
    features: ["Custom Theme Styling", "Mobile-First UX", "Collection Filtering", "Quick-Add Cart Drawer"],
    image: ASSETS.shopifyFashion,
    demoLabel: "Demo Concept",
  },
  {
    id: "creator-hub-digital",
    title: "Creator Hub Digital Shop",
    platform: "Stan Store / Gumroad",
    category: "Digital Product Store",
    categorySlug: "digital",
    description: "All-in-one digital goods storefront for a content creator selling video masterclasses, ebook guides, and Lightroom preset packs.",
    challenge: "Visitors were overwhelmed by disjointed link-in-bio pages and manual file fulfillment via email.",
    solution: "Consolidated all digital assets into a branded storefront with automated instant downloads and bundled checkout incentives.",
    features: ["Instant File Delivery", "Tiered Product Bundles", "Mobile 1-Tap Checkout", "Branded Visual Identity"],
    image: ASSETS.digitalCreator,
    demoLabel: "Demo Concept",
  },
  {
    id: "artisan-ceramics",
    title: "Artisan & Home Decor",
    platform: "Shopify",
    category: "Website Redesign",
    categorySlug: "redesign",
    description: "Editorial e-commerce experience for handmade ceramics, ceramic homeware, and artisanal lifestyle accessories.",
    challenge: "Existing website had poor image resolution scaling, cluttered menus, and slow page loading speeds.",
    solution: "Created an airy, editorial layout with balanced whitespace, optimized imagery, structured product stories, and clean category paths.",
    features: ["Editorial Storytelling", "Image Asset Optimization", "Responsive Grid Math", "Refined Checkout Path"],
    image: ASSETS.artisanDecor,
    demoLabel: "Demo Concept",
  },
  {
    id: "apex-athletic",
    title: "Apex Athletic Performance",
    platform: "Shopify",
    category: "Shopify Store",
    categorySlug: "shopify",
    description: "High-energy sports apparel and fitness equipment store built with bold athletic contrast and dynamic product showcases.",
    challenge: "Slow checkout journey and weak product discovery across seasonal workout collections.",
    solution: "Engineered high-contrast collection tabs, sticky buy buttons on mobile viewports, and automated inventory badges.",
    features: ["High-Contrast Theme", "Sticky Add-To-Cart", "Size Guide Modals", "Cross-Sell Modules"],
    image: ASSETS.fitnessGear,
    demoLabel: "Demo Concept",
  },
  {
    id: "funnel-conversion-lab",
    title: "Course Funnel & Conversion Engine",
    platform: "Funnel / Landing Page",
    category: "Sales Funnel",
    categorySlug: "funnel",
    description: "High-converting multi-step lead and sales funnel designed for an educational bootcamp with video sales letter and order bump.",
    challenge: "Low opt-in conversions on the initial landing page and lack of structured abandoned-checkout re-engagement.",
    solution: "Designed a distraction-free funnel page, added countdown trust markers, 1-click upsells, and automated reminder sequences.",
    features: ["Distraction-Free Funnel", "Order Bump Upsell", "Abandoned Recovery Setup", "Live Analytics Groundwork"],
    image: ASSETS.funnelAnalytics,
    demoLabel: "Demo Concept",
  },
  {
    id: "organic-seo-framework",
    title: "Storefront SEO & Visibility Overhaul",
    platform: "Shopify / Web",
    category: "SEO & Optimization",
    categorySlug: "seo",
    description: "Foundational search optimization and architecture upgrade across 40+ collection pages and core landing routes.",
    challenge: "Missing meta descriptions, unoptimized heading tags (H1/H2), and heavy uncompressed hero banners hurting search indexation.",
    solution: "Executed clean keyword mapping, standardized Schema.org product structured data, compressed assets, and resolved duplicate URLs.",
    features: ["Schema.org Structured Data", "Keyword Hierarchy Mapping", "Image Asset Compression", "Clean URL Architecture"],
    image: ASSETS.heroWorkspace,
    demoLabel: "Demo Concept",
  },
];

export const RESULTS_METRICS: ResultMetric[] = [
  {
    id: "store-speed",
    title: "Store Speed",
    category: "Performance",
    focusArea: "Asset & Script Loading",
    description: "Improve loading experience, eliminate render-blocking bloat, and reduce unnecessary visitor friction.",
    metricType: "Core Web Vitals Readiness",
  },
  {
    id: "conversion-journey",
    title: "Conversion Journey",
    category: "UX & Checkout",
    focusArea: "Action Clarity",
    description: "Make important purchasing actions intuitive and easy for visitors to discover across all devices.",
    metricType: "Frictionless Purchasing",
  },
  {
    id: "seo-readiness",
    title: "SEO Readiness",
    category: "Search Discovery",
    focusArea: "On-Page Foundations",
    description: "Structure semantic headings, meta information, and product schemas for search engine indexation.",
    metricType: "Search Architecture",
  },
  {
    id: "mobile-experience",
    title: "Mobile Experience",
    category: "Responsive Design",
    focusArea: "Touch Usability",
    description: "Ensure the storefront feels effortless on 360px to 430px smartphone viewports without awkward overflow.",
    metricType: "Touch-First Ergonomics",
  },
  {
    id: "product-presentation",
    title: "Product Presentation",
    category: "Merchandising",
    focusArea: "Visual Clarity",
    description: "Organize collections, high-clarity photography, and offer tiers to make product benefits obvious.",
    metricType: "Value Communication",
  },
  {
    id: "marketing-workflows",
    title: "Marketing Workflows",
    category: "Automation",
    focusArea: "Customer Retention",
    description: "Streamline customer communication, welcome sequences, and follow-up reminders automatically.",
    metricType: "Systemized Follow-Up",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-shopify-launch",
    title: "Boutique Apparel Store Launch",
    badge: "Shopify Launch",
    category: "E-Commerce Architecture",
    challenge: "The client needed a modern, trustworthy online presence to transition from informal social media DM orders to an automated, self-serve e-commerce platform.",
    solution: "Configured a customized responsive Shopify store with intuitive product categories, size recommendations, payment gateway integration, and shipping rates.",
    outcome: "Eliminated the friction of manual order taking and created a reliable 24/7 ordering experience that customers feel confident using.",
    tags: ["Shopify", "Theme Setup", "Mobile UX", "Payments"],
    image: ASSETS.shopifyFashion,
  },
  {
    id: "cs-digital-product",
    title: "Creator Digital Product Platform",
    badge: "Digital Products",
    category: "Creator Economy",
    challenge: "A creator with an engaged audience was losing potential sales because their downloadable guides were hosted across fragmented Google Drive links.",
    solution: "Created a dedicated digital storefront with instant automated download delivery, secure checkout, customer licensing notes, and clean mobile navigation.",
    outcome: "Turned passive audience clicks into an automated digital revenue channel with zero manual file sending required.",
    tags: ["Stan Store", "Gumroad", "Digital Delivery", "Creator Store"],
    image: ASSETS.digitalCreator,
  },
  {
    id: "cs-website-redesign",
    title: "Artisanal Home Store Redesign",
    badge: "Redesign & UX",
    category: "Storefront Optimization",
    challenge: "An existing home goods website had outdated styling, cluttered navigation, and sluggish page transitions that degraded customer perception.",
    solution: "Re-architected the store layout with balanced editorial typography, clean white space, optimized product galleries, and simplified checkout steps.",
    outcome: "Delivered a clean, premium brand feel that highlights product craftsmanship and keeps the buying journey straightforward.",
    tags: ["Store Redesign", "Visual Hierarchy", "Mobile Optimization", "Speed"],
    image: ASSETS.artisanDecor,
  },
  {
    id: "cs-funnels-automation",
    title: "Lead Funnel & Email Workflows",
    badge: "Funnels & Automation",
    category: "Conversion Engineering",
    challenge: "Visitor traffic from paid social ads was landing on an unfocused homepage with too many links, resulting in high drop-off before checkout.",
    solution: "Built a dedicated, distraction-free landing page with a clear single call-to-action, paired with an automated abandoned-interest email follow-up sequence.",
    outcome: "Established a clear, structured customer acquisition pathway that captures inquiries and automatically guides prospective buyers toward purchase.",
    tags: ["Sales Funnel", "Lead Capture", "Email Sequence", "Conversion"],
    image: ASSETS.funnelAnalytics,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discovery & Strategy",
    description: "Understand your business, target audience, offer, current challenges, and project goals through an initial deep-dive discussion.",
    deliverables: ["Goal alignment", "Audience review", "Scope specification"],
  },
  {
    stepNumber: "02",
    title: "Planning & Structure",
    description: "Define the platform, website structure, customer journey, required features, and project priorities before writing code.",
    deliverables: ["Platform selection", "Page hierarchy", "User flow mapping"],
  },
  {
    stepNumber: "03",
    title: "Design & Development",
    description: "Build the storefront or website with a clean design, responsive layout, reliable integrations, and relevant functionality.",
    deliverables: ["Custom store layout", "Mobile optimization", "Checkout setup"],
  },
  {
    stepNumber: "04",
    title: "Testing & Launch",
    description: "Review the website across devices, test links and forms, verify payment gateways, and check essential functionality before going live.",
    deliverables: ["Cross-browser testing", "Payment flow verification", "Live deployment"],
  },
  {
    stepNumber: "05",
    title: "Optimization & Growth",
    description: "Identify opportunities to improve usability, SEO readiness, customer journeys, and automated marketing workflows for sustained progress.",
    deliverables: ["On-page SEO check", "Follow-up workflows", "Growth guidance"],
  },
];

export const TRUST_EXPECTATIONS: TrustItem[] = [
  {
    id: "clear-communication",
    title: "Clear Communication",
    subtitle: "Transparent & Direct",
    description: "No vague agency jargon or unkept promises. You receive direct project updates, straightforward timelines, and clear explanations of every technical decision.",
    points: [
      "Direct WhatsApp contact throughout the project",
      "Regular milestone previews and walkthroughs",
      "Transparent recommendations based on your goals"
    ],
  },
  {
    id: "thoughtful-execution",
    title: "Thoughtful Execution",
    subtitle: "Quality & Attention to Detail",
    description: "Every storefront is built with care for real customer usability, fast loading speeds, clean layouts, and dependable mobile responsiveness.",
    points: [
      "Tested across modern mobile, tablet, and desktop viewports",
      "Organized product catalogs and readable typography",
      "Clean platform configuration tailored to what you sell"
    ],
  },
  {
    id: "practical-optimization",
    title: "Practical Optimization",
    subtitle: "Outcomes Over Hype",
    description: "Rather than relying on vanity metrics or empty hype, we focus on concrete improvements: fewer checkout hurdles, clearer messaging, and smarter automated workflows.",
    points: [
      "Frictionless customer purchase flow",
      "Essential on-page SEO foundations",
      "Practical automations that save time"
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-services",
    question: "What services do you offer?",
    answer: "I help with Shopify store setup, digital storefront configuration, website design, SEO optimization, sales funnels, and marketing automation.",
  },
  {
    id: "faq-platforms",
    question: "Which platforms do you work with?",
    answer: "My services can cover Shopify, Stan Store, Gumroad, Payhip, Etsy, and other suitable platforms, depending on the project requirements.",
  },
  {
    id: "faq-existing-store",
    question: "Can you improve an existing online store?",
    answer: "Yes. We can discuss your current website, identify the areas you want to improve, and determine an appropriate scope of work.",
  },
  {
    id: "faq-digital-products",
    question: "Can you build a digital product store?",
    answer: "Yes. I can help configure a suitable storefront for digital downloads, creator products, and other eligible digital offers.",
  },
  {
    id: "faq-seo",
    question: "Do you offer SEO services?",
    answer: "Yes. SEO work can include on-page optimization, keyword research, metadata, internal linking, image optimization, and relevant technical improvements.",
  },
  {
    id: "faq-funnels-automation",
    question: "Can you set up sales funnels and marketing automation?",
    answer: "Yes. Depending on the tools and platform, I can help structure landing pages, lead capture, email sequences, and customer follow-up workflows.",
  },
  {
    id: "faq-getting-started",
    question: "How do I get started?",
    answer: "Send me a message on WhatsApp with a short description of your project. We'll discuss your goals, requirements, timeline, and next steps.",
  },
  {
    id: "faq-pricing",
    question: "How much do your services cost?",
    answer: "Pricing depends on the service, project scope, required features, and timeline. Contact me with your requirements so we can discuss a suitable quote.",
  },
];
