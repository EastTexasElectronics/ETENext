import { Metadata } from 'next';
import { Suspense } from 'react';

import { SITE } from '~/config.js';

import Loading from '../app/loading';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
// import Announcement from '~/components/widgets/Announcement';
import Footer from '~/components/widgets/Footer';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

// Custom font
const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

// Layout props
export interface LayoutProps {
  children: React.ReactNode;
}
// Metadata for the site
export const metadata: Metadata = {
  category: 'technology',
  assets: ['https://EastTexasElectronics.com/Public_Assets'],
  generator: 'Next.js',
  applicationName: 'East Texas Electronics Support',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'IT Support', 'Computer Repair', 'Network Support', 'Web Design', 
    'SEO', 'Digital Marketing', 'East Texas', 'Tyler', 'Longview', 
    'Marshall', 'Henderson', 'Kilgore'
  ],
  authors: [{ name: 'Robert Havelaar', url: 'https://www.linkedin.com/in/robert-havelaar/' }],
  creator: 'Robert Havelaar',
  publisher: 'East Texas Electronics, LLC.',
  title: {
    template: `${SITE?.name ? `%s — ${SITE.name}` : 'East Texas Electronics'}`,
    default: SITE?.title || 'East Texas Electronics',
  },
  description: SITE?.description || 'East Texas Electronics provides IT Support, Computer Repair, Network Support, Web Design, SEO, and Digital Marketing services to East Texas.',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }: LayoutProps) {
  return (
    // TODO This line is causing a warning in the console
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}> 
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}>
          <main>{children}</main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
