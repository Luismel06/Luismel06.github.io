export type Locale = "en" | "es";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProofPoint {
  value: string;
  detail: string;
}

export interface Capability {
  index: string;
  title: string;
  description: string;
  tools: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
}

export interface PortfolioContent {
  locale: Locale;
  languageLabel: string;
  alternateLanguageLabel: string;
  skipLink: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    statement: string;
    introduction: string;
    stack: string;
    primaryAction: string;
    secondaryAction: string;
    availability: string;
  };
  proof: ProofPoint[];
  experience: {
    index: string;
    eyebrow: string;
    title: string;
    introduction: string;
    items: ExperienceItem[];
  };
  systems: {
    index: string;
    eyebrow: string;
    title: string;
    introduction: string;
    capabilities: Capability[];
    stackTitle: string;
    stack: Array<{ label: string; items: string[] }>;
  };
  development: {
    index: string;
    eyebrow: string;
    title: string;
    introduction: string;
    projects: ProjectItem[];
  };
  about: {
    index: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    educationTitle: string;
    education: string;
    educationStatus: string;
    certificationsTitle: string;
    certifications: string[];
    languagesTitle: string;
    languages: string;
  };
  contact: {
    index: string;
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    socialLabel: string;
  };
  footer: string;
}
