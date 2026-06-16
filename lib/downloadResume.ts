import { track } from '@vercel/analytics';
import { resumePath, resumeSlug } from './resume';
import type { PersonaId } from './types';

export const LEAD_STORAGE_KEY = 'resumeLeadEmail';

export function triggerResumeDownload(selected: PersonaId[]) {
  const slug = resumeSlug(selected);
  const a = document.createElement('a');
  a.href = resumePath(selected);
  a.download = '';
  document.body.appendChild(a);
  a.click();
  a.remove();
  track('resume_download', { personas: selected.join(',') || 'all', slug });
}
