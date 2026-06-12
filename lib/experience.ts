import type { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    id: 'smith-labs',
    company: 'Smith Labs LLC',
    role: 'Founder & Tech Industry Consultant',
    startDate: '2021',
    endDate: 'Present',
    location: 'New York, NY',
    bullets: [
      {
        id: 'sl-1',
        text: 'Founded product studio building AI-powered consumer and productivity tools (JoLo, Card Benefits Map, Present, Link Strippa)',
        personas: ['product-manager', 'ai-product-engineer'],
        links: [{ text: 'smithlabs.llc', url: 'https://smithlabs.llc', type: 'project' }],
      },
      {
        id: 'sl-2',
        text: 'Accepted to Visible Hands NYC 2022, a pre-seed accelerator investing in underrepresented founders',
        personas: ['product-manager'],
      },
      {
        id: 'sl-3',
        text: 'Architected autonomous AI-powered feature request pipeline using LLMs and Claude Code for rapid product iteration',
        personas: ['ai-product-engineer', 'data-engineer'],
      },
      {
        id: 'sl-4',
        text: 'Deployed full-stack Next.js applications on Vercel with Prisma/PostgreSQL, handling DNS migration, GitHub CI/CD, and branch protection strategy',
        personas: ['ai-product-engineer', 'solutions-architect'],
      },
      {
        id: 'sl-5',
        text: 'Expert network consultant providing strategy, operations, and technical due diligence to growth-stage companies',
        personas: ['technical-account-strategist', 'solutions-architect'],
      },
    ],
  },
  {
    id: 'aws',
    company: 'Amazon Web Services (AWS)',
    role: 'Technical Business Developer, Strategic Customer Engagement',
    startDate: '2022',
    endDate: '2024',
    location: 'Seattle & New York',
    bullets: [
      {
        id: 'aws-1',
        text: 'Designed and launched Strategic Approvals platform from 0→1, processing $6B+ in enterprise deals (H2 2022) — defined requirements, led SCRUM development, and trained 50+ strategic sales users',
        personas: ['product-manager', 'solutions-architect'],
      },
      {
        id: 'aws-2',
        text: 'Structured and negotiated complex renewals averaging $225M revenue with 14% above-target growth across finance, travel, and tech verticals',
        personas: ['technical-account-strategist'],
      },
      {
        id: 'aws-3',
        text: 'Led organization-wide Early Renewals analysis, identifying data-driven policy changes that unlocked 24% Y1 growth',
        personas: ['data-engineer', 'product-manager'],
      },
      {
        id: 'aws-4',
        text: 'Managed Monthly Business Review reporting and led strategic investigations to optimize APAC growth',
        personas: ['data-engineer', 'technical-account-strategist'],
      },
      {
        id: 'aws-5',
        text: 'Partnered with AWS product teams to negotiate favorable terms and investments for strategic accounts',
        personas: ['technical-account-strategist', 'product-manager'],
      },
    ],
  },
  {
    id: 'triplelift',
    company: 'TripleLift',
    role: 'Sr. Solutions Engineer, Supply-Side & Mobile',
    startDate: '2019',
    endDate: '2020',
    location: 'New York, NY',
    bullets: [
      {
        id: 'tl-1',
        text: 'Spearheaded mobile product strategy for a $45M+ opportunity — developed roadmap, financial model, and pilot implementations from market research through launch, achieving $3M revenue',
        personas: ['product-manager'],
      },
      {
        id: 'tl-2',
        text: 'Managed technical partnerships with Google Open Bidding and Amazon APS, defending $224M revenue (80% of business)',
        personas: ['technical-account-strategist', 'solutions-architect'],
      },
      {
        id: 'tl-3',
        text: 'Architected strategic supply integrations like AdMob, accounting for $10M+ in new ad spend',
        personas: ['solutions-architect'],
      },
      {
        id: 'tl-4',
        text: 'Managed external engineers for CTV supply-side integrations, unblocking $4M in marketplace liquidity',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'tl-5',
        text: 'Architected batch optimization reducing annual API COGS by $250K; built IAB compliance Python crawler and Java exchange adapters',
        personas: ['data-engineer', 'solutions-architect'],
      },
      {
        id: 'tl-6',
        text: 'Enhanced supply-side health monitoring by integrating ELK logs into company-wide Looker dashboards and automated reports',
        personas: ['data-engineer'],
      },
      {
        id: 'tl-7',
        text: 'Mentored business development associate into a full-time software engineering role',
        personas: ['product-manager', 'technical-account-strategist'],
      },
    ],
  },
  {
    id: 'impact',
    company: 'Impact',
    role: 'Sr. Solutions Architect',
    startDate: '2018',
    endDate: '2019',
    location: 'New York, NY',
    bullets: [
      {
        id: 'im-1',
        text: "Led implementations for Forensiq, programmatic advertising's only full-funnel ad verification suite",
        personas: ['solutions-architect'],
      },
      {
        id: 'im-2',
        text: 'Managed pixel, JavaScript, and API implementations with DSPs, Networks, SSPs, and Publishers',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'im-3',
        text: 'Troubleshot integrations and analyzed terabytes of data using MongoDB and SQL tools (Snowflake, BigQuery)',
        personas: ['data-engineer'],
      },
    ],
  },
  {
    id: 'nielsen',
    company: 'Nielsen Marketing Cloud',
    role: 'Data Solutions Lead',
    startDate: '2017',
    endDate: '2019',
    location: 'New York, NY',
    bullets: [
      {
        id: 'nm-1',
        text: 'Architected expansion into omnichannel data integrations driving 300M+ MAU growth with Chobani, Walmart, and IPG Mediabrands',
        personas: ['data-engineer', 'solutions-architect'],
      },
      {
        id: 'nm-2',
        text: 'Built and maintained web-, API-, and file-based integrations with ad platforms including Google, Adobe, AppNexus, and The Trade Desk',
        personas: ['solutions-architect', 'data-engineer'],
      },
      {
        id: 'nm-3',
        text: 'Owned Business Intelligence (Snowflake, SiSense) and ETL pipeline serving global accounts — reduced discrepancies below 5%, recouping 24% of sales previously lost to make-goods',
        personas: ['data-engineer'],
      },
      {
        id: 'nm-4',
        text: 'Built on In-Flight Analytics feature (React, Python), focusing on backend relational DB integration and XML transformation automation',
        personas: ['ai-product-engineer', 'data-engineer'],
      },
      {
        id: 'nm-5',
        text: 'Led internal SCRUM development while providing external technical consultation to enterprise clients',
        personas: ['product-manager', 'technical-account-strategist'],
      },
    ],
  },
  {
    id: 'consulting-2017',
    company: 'Independent Technical Consulting',
    role: 'Consultant & Builder',
    startDate: '2017',
    endDate: '2017',
    location: 'Latin America & Newark, NJ',
    bullets: [
      {
        id: 'ic-1',
        text: 'Built TheFlipSide — full original website (HTML/CSS/JS) for the apolitical news newsletter',
        personas: ['ai-product-engineer'],
        links: [{ text: 'theflipside.io', url: 'https://www.theflipside.io/', type: 'project' }],
      },
      {
        id: 'ic-2',
        text: 'Analyzed 2016 National Election voter data using Python Dash, surfacing voter turnout opportunities',
        personas: ['data-engineer'],
      },
      {
        id: 'ic-3',
        text: 'Developed specification, brand style guide, React demo, and mission for Fireside Chat',
        personas: ['product-manager', 'ai-product-engineer'],
      },
    ],
  },
  {
    id: 'clever',
    company: 'Clever Inc.',
    role: 'Partner Engineer',
    startDate: '2016',
    endDate: '2017',
    location: 'San Francisco, CA',
    bullets: [
      {
        id: 'cl-1',
        text: 'Technical lead for developer relations at EdTech platform serving 60,000+ U.S. schools — led trainings for 200+ educational app companies and advised strategic accounts like Schoology',
        personas: ['technical-account-strategist', 'solutions-architect'],
      },
      {
        id: 'cl-2',
        text: 'Oversaw outreach, documentation, and full execution of legacy API deprecation, saving $50K+/yr in engineering labor',
        personas: ['product-manager', 'solutions-architect'],
      },
      {
        id: 'cl-3',
        text: 'Consulted EdTech developers on securely integrating roster data from U.S. School Information Systems via OAuth SSO; client-facing escalation point during Back to School',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'cl-4',
        text: 'Maintained and restructured developer documentation at dev.clever.com; wrote ETL scripts for customers without developer resources',
        personas: ['data-engineer', 'solutions-architect'],
      },
    ],
  },
  {
    id: 'kahuna',
    company: 'Kahuna (Sequoia Capital Portfolio)',
    role: 'Solutions Engineer → Sr. Solutions Engineer',
    startDate: '2014',
    endDate: '2016',
    location: 'Palo Alto / Redwood City, CA',
    bullets: [
      {
        id: 'k-1',
        text: 'Generated $2M net new ARR (33% of total) through Intelligent SDK rollout and strategic client integrations, from Series A through acquisition',
        personas: ['solutions-architect', 'technical-account-strategist'],
      },
      {
        id: 'k-2',
        text: 'Managed shipped-to-app-store integrations for 200M+ MAU across New York Times, Weather Channel, Zillow, Yelp, Yahoo!, Tumblr, and 50+ brands',
        personas: ['solutions-architect'],
      },
      {
        id: 'k-3',
        text: 'Led product discovery for Campaign API; aggregated user stories and shipped customer-driven features with engineering (AppleFeedback API, Push-All-Devices, Intelligent Attributes)',
        personas: ['product-manager'],
      },
      {
        id: 'k-4',
        text: 'Partnered with CTO to deprecate a 30M events/day API, saving $1.4M/yr while achieving 100% client migration',
        personas: ['solutions-architect', 'data-engineer'],
      },
      {
        id: 'k-5',
        text: 'Drove 125% net revenue retention of strategic partners through off-site trainings and global developer support',
        personas: ['technical-account-strategist'],
      },
      {
        id: 'k-6',
        text: 'Wrote custom Python solutions leveraging Kahuna APIs for content recommendations (Pluto TV, Seatgeek) and historical data imports',
        personas: ['data-engineer', 'ai-product-engineer'],
      },
      {
        id: 'k-7',
        text: 'Debugged and wrote client-side integrations in Android Java, iOS Swift, and Objective-C',
        personas: ['ai-product-engineer', 'solutions-architect'],
      },
    ],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'Program Manager, Windows Audio',
    startDate: '2013',
    endDate: '2014',
    location: 'Redmond, WA',
    bullets: [
      {
        id: 'ms-1',
        text: 'PM on Windows Audio team — shipped Windows 8.1 including the Surface 2 launch',
        personas: ['product-manager'],
      },
      {
        id: 'ms-2',
        text: 'Drove cross-team collaboration with independent hardware vendors (NVidia, Qualcomm) to deliver the audio experience on mobile form factors',
        personas: ['product-manager', 'solutions-architect'],
      },
      {
        id: 'ms-3',
        text: 'Worked with Windows Phone team to port and converge legacy Windows Audio APIs to WinJS',
        personas: ['solutions-architect'],
      },
      {
        id: 'ms-4',
        text: 'Led media user scenario testing for touch devices and debugged issues in C++ device drivers',
        personas: ['product-manager', 'ai-product-engineer'],
      },
    ],
  },
  {
    id: 'tivo',
    company: 'TiVo',
    role: 'User Experience Engineer (Intern)',
    startDate: '2011',
    endDate: '2011',
    location: 'Alviso, CA',
    bullets: [
      {
        id: 'tv-1',
        text: 'Bridged UI engineering and UX design teams during HDUI development — built ActionScript3 prototypes, wireframes, and mockups in agile workflow',
        personas: ['product-manager', 'ai-product-engineer'],
      },
    ],
  },
];
