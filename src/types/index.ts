export interface NavItem {
  label: string;
  href: string;
}

export interface UserProblem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalNote: string;
  futureUrl: string;
}

export interface TreatmentStep {
  number: string;
  title: string;
  description: string;
  clinicalDetail: string;
}

export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detail: string;
  category: 'general' | 'practical' | 'cost' | 'clinical';
  futureUrl?: string;
}

export interface ComparisonRow {
  dimension: string;
  aligners: string;
  braces: string;
  clinicalContext: string;
}

export interface AssetSlot {
  id: string;
  name: string;
  aspectRatio: string;
  role: string;
  targetDimensions: string;
  specNotes: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}
