export type PersonaId =
  | 'product-manager'
  | 'solutions-architect'
  | 'technical-account-strategist'
  | 'data-engineer'
  | 'ai-product-engineer';

export interface Persona {
  id: PersonaId;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProjectLink {
  text: string;
  url: string;
  type: 'project' | 'blog' | 'repo' | 'demo';
}

export interface BulletPoint {
  id: string;
  text: string;
  personas: PersonaId[];
  links?: ProjectLink[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  logoPath?: string;
  bullets: BulletPoint[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  year: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
