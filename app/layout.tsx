import type { Metadata } from 'next';
import { Raleway, Oxygen, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oxygen',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteUrl = 'https://christiandean.me';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Christian Dean — Product Manager, Solutions Architect, AI Engineer',
  description:
    'Interactive resume for Christian Dean. 14 years building products, platforms, and data systems. Stanford SymSys, Emory MBA. Filter by role to see the experience that matters to you.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Christian Dean',
    description: 'Builder. Strategist. Polymath.',
    url: siteUrl,
    siteName: 'Christian Dean',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Dean',
    description: 'Builder. Strategist. Polymath.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christian Dean',
  jobTitle: [
    'Product Manager',
    'Solutions Architect',
    'Technical Account Strategist',
    'Data Engineer',
    'AI Product Engineer',
  ],
  url: siteUrl,
  sameAs: [
    'https://linkedin.com/in/chrsdsmth',
    'https://github.com/cdsmith16',
    'https://smithlabs.llc',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Stanford University' },
    { '@type': 'CollegeOrUniversity', name: 'Emory University, Goizueta Business School' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${oxygen.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
