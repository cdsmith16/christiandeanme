import type { Persona } from './types';

export const personas: Persona[] = [
  {
    id: 'product-manager',
    label: 'Product Manager',
    shortLabel: 'PM',
    description: 'Roadmaps, stakeholder alignment, 0→1 product launches',
    icon: 'LayoutGrid',
    color: '#F5A623',
  },
  {
    id: 'solutions-architect',
    label: 'Solutions Architect',
    shortLabel: 'SA',
    description: 'System design, technical pre-sales, platform integration',
    icon: 'Network',
    color: '#F5A623',
  },
  {
    id: 'technical-account-strategist',
    label: 'Technical Account Strategist',
    shortLabel: 'TAS',
    description: 'Client-facing strategy, CSM, enterprise relationship management',
    icon: 'Users',
    color: '#F5A623',
  },
  {
    id: 'data-engineer',
    label: 'Data Engineer',
    shortLabel: 'DE',
    description: 'Data pipelines, ML infrastructure, analytics platforms',
    icon: 'Database',
    color: '#F5A623',
  },
  {
    id: 'ai-product-engineer',
    label: 'AI Product Engineer',
    shortLabel: 'AI',
    description: 'Full-stack AI applications, LLM integration, prompt engineering',
    icon: 'Cpu',
    color: '#F5A623',
  },
];
