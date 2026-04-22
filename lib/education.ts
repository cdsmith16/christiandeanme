import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    institution: 'Stanford University',
    degree: 'B.S.',
    field: 'Symbolic Systems (Computer Science + Human-Computer Interaction)',
    year: '2012',
    highlights: [
      'Concentration in HCI and cognitive science',
      'Built Markov chain text generator and reinforcement learning research paper — predating modern RLHF techniques by a decade',
      'Coursework in NLP, machine learning, probability theory, and human factors',
    ],
  },
  {
    institution: 'Emory University, Goizueta Business School',
    degree: 'MBA',
    field: 'Business Administration',
    year: '2020',
    highlights: [
      'Strategy and management consulting focus',
      'Completed while working full-time in AdTech',
    ],
  },
];
