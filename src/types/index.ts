export type ServiceCategory = 
  | 'shopify'
  | 'digital-product'
  | 'website-design'
  | 'seo'
  | 'funnels'
  | 'automation';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  features: string[];
  icon: string;
  whatsappTemplate: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  platform: string;
  category: string;
  categorySlug: 'all' | 'shopify' | 'digital' | 'redesign' | 'seo' | 'funnel';
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  image: string;
  demoLabel: string;
  clientLiveUrl?: string;
}

export interface ResultMetric {
  id: string;
  title: string;
  category: string;
  description: string;
  focusArea: string;
  metricType: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  image: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  displayLabel: string;
  icon: string;
}
