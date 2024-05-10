import { Suspense } from 'react';
import { SITE } from '~/config.js';
import { Metadata } from 'next';
import Loading from '../app/loading';
import ThemeProviders from '~/components/atoms/ThemeProviders';
import Footer from '~/components/widgets/Footer';
import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
// import { SpeedInsights } from '@vercel/speed-insights/next'; // TODO Enable when going live
// import { Analytics } from '@vercel/analytics/react'; // TODO Enable when going live
// import BookingButton from '~/components/atoms/BookingModalButton'; // TODO Fix or remove looks bad on mobile
import { ClerkProvider } from '@clerk/nextjs';
import { UnderConstruction } from '~/components/widgets/UnderConstruction';
import CookieConsent from '~/components/widgets/CookieConsent';
import { Toaster } from '~/components/ui/toaster';
// import ChatBotModal from '~/components/widgets/ChatBotModal';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Custom font
const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

// Metadata for the site
export const metadata: Metadata = {
  category: 'technology',
  assets: ['https://EastTexasElectronics.com/Public_Assets'],
  generator: 'Next.js',
  applicationName: 'East Texas Electronics Support',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'IT Support',
    'Computer Repair',
    'Network Support',
    'Web Design',
    'SEO',
    'Digital Marketing',
    'East Texas',
    'Tyler',
    'Longview',
    'Marshall',
    'Henderson',
    'Kilgore',
  ],
  publisher: 'East Texas Electronics, LLC.',
  title: {
    template: `${SITE?.name ? `%s — ${SITE.name}` : 'East Texas Electronics'}`,
    default: SITE?.title || 'East Texas Electronics',
  },
  description:
    SITE?.description ||
    'East Texas Electronics provides IT Support, Computer Repair, Network Support, Web Design, SEO, and Digital Marketing services to East Texas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
        suppressHydrationWarning
      >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>East Texas Electronics, LLC.</title>
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-secondary-300">
      {/*<ChatBotModal />*/}
      <ThemeProviders>
        <UnderConstruction />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        {/* <BookingButton /> */}
        <CookieConsent />
        <Footer />
        <Toaster />
      </ThemeProviders>
      </body>
      </html>
    </ClerkProvider>
  );
}

