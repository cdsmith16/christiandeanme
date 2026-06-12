export type PersonaId =
  | 'product-manager'
  | 'solutions-architect'
  | 'technical-account-strategist'
  | 'data-engineer'
  | 'ai-product-engineer'
  | 'venture-strategist';

export interface Persona {
  id: PersonaId;
  label: string;
  shortLabel: string;
  description: string;
  /** Positioning statement shown when this lens is selected; the persona's "profile" paragraph. */
  narrative: string;
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
  /** One-line company/chapter context shown under the role — the story's connective tissue. */
  summary?: string;
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
