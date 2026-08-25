export type NavPage = 
  | 'home'
  | 'about'
  | 'services'
  | 'industries'
  | 'equipment'
  | 'projects'
  | 'quote'
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  capabilities: {
    label: string;
    value: string;
  }[];
  specifications: string[];
  image: string;
  iconName: string;
  typicalTurnaround: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Pumps' | 'Gears & Drives' | 'Air & Gas' | 'Processing & Extrusion' | 'Heavy Components';
  tagline: string;
  description: string;
  commonIssues: string[];
  repairSolutions: string[];
  image: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  primaryEquipment: string[];
  commonFailures: string[];
  primeSolution: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Gearbox' | 'Pump' | 'Machining' | 'Welding' | 'Grinding' | 'Metal Spray' | 'Balancing' | 'Finished';
  industry: string;
  equipmentType: string;
  challenge: string;
  solution: string;
  turnaroundTime: string;
  image: string;
  hasBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  action: string;
  description: string;
  keyChecks: string[];
  iconName: string;
  standardTime: string;
  image?: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
  image?: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  equipmentType: string;
  modelPartNumber: string;
  descriptionOfRepair: string;
  urgency: 'standard' | 'rush' | 'emergency';
  location: string;
  uploadedFiles: {
    name: string;
    size: string;
    previewUrl?: string;
  }[];
}

export interface TestimonialItem {
  quote: string;
  role: string;
  companyType: string;
  location: string;
  highlight: string;
}
