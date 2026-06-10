import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: ['Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'SQL', 'HTML/CSS'],
  },
  {
    name: 'Data & ML',
    skills: ['Pandas', 'Spark', 'TensorFlow', 'Jupyter', 'dbt', 'Airflow', 'BigQuery', 'Redshift'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'GCP', 'Vercel', 'Supabase', 'Docker', 'Prisma', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    name: 'Product & Design',
    skills: ['Figma', 'Jira', 'Amplitude', 'Mixpanel', 'Notion', 'Linear', 'Miro'],
  },
  {
    name: 'AI & LLMs',
    skills: ['Claude / Anthropic API', 'GPT-4', 'LangChain', 'Prompt Engineering', 'RLHF', 'RAG', 'Claude Code'],
  },
  {
    name: 'AdTech & MarTech',
    skills: ['OpenRTB', 'VAST', 'Header Bidding', 'Prebid', 'DMP/CDP', 'Campaign Analytics'],
  },
];
