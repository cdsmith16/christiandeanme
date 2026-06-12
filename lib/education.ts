import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    institution: 'Emory University, Goizueta Business School',
    degree: 'M.B.A.',
    field: 'Product Management & Entrepreneurship Concentration',
    year: '2022',
    highlights: [
      'Consortium for Graduate Study in Management, Fellow (Full Scholarship)',
      'GMAT 730',
      'VCIC Atlanta 2021 — 1st Place (Venture Capital Investment Competition)',
      'VP, Entrepreneurship & Venture Capital Club',
    ],
  },
  {
    institution: 'Stanford University',
    degree: 'B.S.',
    field: 'Symbolic Systems (Human-Computer Interaction & Learning)',
    year: '2012',
    highlights: [
      'Interdisciplinary program spanning computer science, psychology, philosophy, and linguistics',
      'Built Markov chain text generator and reinforcement learning research paper — predating modern RLHF techniques by a decade',
      'Co-Founder & Course Instructor, Haas Center Alternative Spring Break — Education Reform & Design Thinking',
      'President & Co-Founder, Stanford Hip Hop Congress · Wight Foundation Scholar',
    ],
  },
];
