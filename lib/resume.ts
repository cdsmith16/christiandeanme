import type { PersonaId } from './types';
import { personas } from './personas';

const ORDER: PersonaId[] = personas.map((p) => p.id);

/**
 * Filenames must stay in sync with scripts/generate-resumes.ts, which
 * pre-builds one PDF per persona combination into public/resumes/.
 */
export function resumeSlug(selected: PersonaId[]): string {
  if (selected.length === 0) return 'christian-d-smith-resume';
  const parts = ORDER.filter((id) => selected.includes(id)).map(
    (id) => personas.find((p) => p.id === id)!.shortLabel.toLowerCase()
  );
  return `christian-d-smith-resume-${parts.join('-')}`;
}

export function resumePath(selected: PersonaId[]): string {
  return `/resumes/${resumeSlug(selected)}.pdf`;
}
