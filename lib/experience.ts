import type { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    id: 'smith-labs',
    company: 'Smith Labs LLC',
    role: 'Founder & Product Developer',
    startDate: '2024',
    endDate: 'Present',
    location: 'New York, NY',
    bullets: [
      {
        id: 'sl-1',
        text: 'Founded product studio building consumer and productivity tools (JoLo, Card Benefits Map, Present, Link Strippa)',
        personas: ['product-manager', 'ai-product-engineer'],
        links: [{ text: 'smithlabs.llc', url: 'https://smithlabs.llc', type: 'project' }],
      },
      {
        id: 'sl-2',
        text: 'Architected autonomous AI-powered feature request pipeline using LLMs and Claude Code for rapid product iteration',
        personas: ['ai-product-engineer', 'data-engineer'],
      },
      {
        id: 'sl-3',
        text: 'Deployed full-stack Next.js applications on Vercel with Prisma/PostgreSQL, handling DNS migration, GitHub CI/CD, and branch protection strategy',
        personas: ['ai-product-engineer', 'solutions-architect'],
      },
      {
        id: 'sl-4',
        text: 'Developed investment thesis around "direct thought to execution" — convergence of brain-computer interfaces with orchestrated AI agents',
        personas: ['product-manager'],
      },
      {
        id: 'sl-5',
        text: 'Technical consultancy work including web development, product strategy, and brand identity for small business clients',
        personas: ['technical-account-strategist', 'solutions-architect'],
      },
    ],
  },
  {
    id: 'aws',
    company: 'Amazon Web Services (AWS)',
    role: 'Technical Product Manager, AdTech',
    startDate: '2022',
    endDate: '2024',
    location: 'New York, NY',
    bullets: [
      {
        id: 'aws-1',
        text: 'Owned internal tools platform serving 200+ sales reps, acting as product owner and de facto SRE for revenue-critical systems',
        personas: ['product-manager', 'solutions-architect'],
      },
      {
        id: 'aws-2',
        text: 'Designed and shipped data pipeline integrations connecting CRM, billing, and analytics platforms across AWS AdTech org',
        personas: ['data-engineer', 'solutions-architect'],
      },
      {
        id: 'aws-3',
        text: 'Led cross-functional stakeholder alignment across engineering, sales, and finance to prioritize platform roadmap',
        personas: ['product-manager', 'technical-account-strategist'],
      },
      {
        id: 'aws-4',
        text: 'Built dashboards and reporting tools translating complex data into actionable insights for sales leadership',
        personas: ['data-engineer', 'product-manager'],
      },
    ],
  },
  {
    id: 'triplelift',
    company: 'TripleLift',
    role: 'Senior Solutions Engineer',
    startDate: '2020',
    endDate: '2022',
    location: 'New York, NY',
    bullets: [
      {
        id: 'tl-1',
        text: 'Generated $2M+ net new ARR through technical pre-sales, custom integration design, and strategic account growth',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'tl-2',
        text: 'Architected programmatic advertising integrations (OpenRTB, VAST, header bidding) for enterprise publisher and DSP clients',
        personas: ['solutions-architect', 'data-engineer'],
      },
      {
        id: 'tl-3',
        text: 'Achieved 125% net revenue retention across managed book of business through proactive technical strategy and relationship management',
        personas: ['technical-account-strategist'],
      },
      {
        id: 'tl-4',
        text: 'Built internal tools and automation to reduce integration onboarding time, functioning as embedded product owner within engineering org',
        personas: ['product-manager', 'ai-product-engineer'],
      },
    ],
  },
  {
    id: 'nielsen',
    company: 'Nielsen Marketing Cloud (via Kahuna acquisition)',
    role: 'Solutions Engineer & Integration Lead',
    startDate: '2017',
    endDate: '2020',
    location: 'San Francisco, CA → New York, NY',
    bullets: [
      {
        id: 'nm-1',
        text: 'Architected omnichannel data integrations supporting 300M+ MAU across Nielsen Marketing Cloud platform',
        personas: ['data-engineer', 'solutions-architect'],
      },
      {
        id: 'nm-2',
        text: 'Led enterprise SDK/API integrations for Fortune 500 clients, translating complex technical requirements into implementation plans',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'nm-3',
        text: 'Survived acqui-hire from Kahuna → Nielsen, navigating org integration while maintaining client delivery continuity',
        personas: ['technical-account-strategist', 'product-manager'],
      },
    ],
  },
  {
    id: 'kahuna',
    company: 'Kahuna (acquired by Nielsen)',
    role: 'Solutions Engineer',
    startDate: '2015',
    endDate: '2017',
    location: 'San Francisco, CA',
    bullets: [
      {
        id: 'k-1',
        text: 'One of four founding solutions engineers at venture-backed mobile marketing automation startup',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'k-2',
        text: 'Built and owned technical onboarding process for enterprise clients, reducing time-to-value from weeks to days',
        personas: ['solutions-architect', 'product-manager'],
      },
      {
        id: 'k-3',
        text: 'Developed internal data tooling for campaign analytics and audience segmentation',
        personas: ['data-engineer', 'ai-product-engineer'],
      },
    ],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'Program Manager, Advertising Platform',
    startDate: '2012',
    endDate: '2015',
    location: 'Seattle, WA',
    bullets: [
      {
        id: 'ms-1',
        text: 'Product manager on Bing Ads platform, owning feature specs, A/B testing frameworks, and cross-team coordination across 100+ person engineering org',
        personas: ['product-manager'],
      },
      {
        id: 'ms-2',
        text: 'Designed and shipped advertiser-facing analytics dashboards used by thousands of SMB and enterprise advertisers',
        personas: ['product-manager', 'data-engineer'],
      },
      {
        id: 'ms-3',
        text: 'Drove platform integrations between Bing Ads, Microsoft Advertising Exchange, and third-party demand partners',
        personas: ['solutions-architect', 'data-engineer'],
      },
    ],
  },
];
