import type { Persona } from './types';

export const personas: Persona[] = [
  {
    id: 'product-manager',
    label: 'Product Manager',
    shortLabel: 'PM',
    description: 'Roadmaps, stakeholder alignment, 0→1 product launches',
    narrative:
      'Product leadership from quiet internal infrastructure to 0→1 launches: Windows 8.1 at Microsoft, Campaign API at Kahuna, a $3M mobile product at TripleLift, and a deal platform processing $6B+ at AWS. Stanford HCI and an Emory MBA: user needs, translated into business value.',
    icon: 'LayoutGrid',
    color: '#F5A623',
  },
  {
    id: 'solutions-architect',
    label: 'Solutions Architect',
    shortLabel: 'SA',
    description: 'System design, technical pre-sales, platform integration',
    narrative:
      'AWS Certified Solutions Architect who has owned revenue-critical integrations at every layer of the stack: 200M+ MAU mobile SDKs, omnichannel DMP pipelines, programmatic ad exchanges, and enterprise deal systems.',
    icon: 'Network',
    color: '#F5A623',
  },
  {
    id: 'technical-account-manager',
    label: 'Technical Account Manager',
    shortLabel: 'TAM',
    description: 'Client-facing strategy, enterprise relationships, account growth',
    narrative:
      'The technical counterpart enterprise accounts trust: 125% net revenue retention at Kahuna, $224M defended at TripleLift, $225M renewals structured at AWS. A decade of relationships kept (and grown) through technical credibility.',
    icon: 'Users',
    color: '#F5A623',
  },
  {
    id: 'data-engineer',
    label: 'Data Engineer',
    shortLabel: 'DE',
    description: 'Data pipelines, BI ownership, analytics platforms',
    narrative:
      'Hands-on with the modern data stack (Snowflake, BigQuery, ELK, Looker), owning ETL pipelines and BI that recouped 24% of lost revenue at Nielsen and produced the analysis that unlocked 24% Y1 growth at AWS.',
    icon: 'Database',
    color: '#F5A623',
  },
  {
    id: 'ai-product-engineer',
    label: 'AI Product Engineer',
    shortLabel: 'AI',
    description: 'Full-stack AI applications, LLM integration, agentic pipelines',
    narrative:
      'Full-stack AI builder: agentic pipelines with Claude Code, LLM-powered products, Next.js/Vercel deployments. Smith Labs is the culmination of 12+ years shipping production software, now with AI as the daily anchor.',
    icon: 'Cpu',
    color: '#F5A623',
  },
  {
    id: 'venture-strategist',
    label: 'Venture & Strategy',
    shortLabel: 'VC',
    description: 'Deal structuring, financial modeling, investment theses',
    narrative:
      "An operator's lens on capital: structured $225M AWS renewals, built the financial model behind a $45M product bet, won VCIC Atlanta 2021, VP of Emory's Entrepreneurship & VC Club, now developing investment theses at Smith Labs.",
    icon: 'TrendingUp',
    color: '#F5A623',
  },
];
