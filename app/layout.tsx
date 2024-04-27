import { Suspense } from 'react';
import Loading from '../app/loading';
import ThemeProviders from '~/components/atoms/ThemeProviders';
import Footer from '~/components/widgets/Footer';
import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
// TODO Causing Hydration Error
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import BookingButton from '~/components/atoms/BookingButton';
import { ClerkProvider } from '@clerk/nextjs';

// Custom font
const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

// TODO Import Metadata from src/shared/data/metadata/metadata.tsx
// Metadata for the site

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {/* TODO remove className from HTML tag, this causes hydration issues. Find another way to implement.*/}
      <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
          <ThemeProviders>
            <Suspense fallback={<Loading />}>
              <main>{children}</main>
            </Suspense>
            <BookingButton />
            <Footer />
          </ThemeProviders>
        </body>
      </html>
      {/* TODO Causing Hydration Error */}
      {/* <SpeedInsights /> */}
      <Analytics />
    </ClerkProvider>
  );
}
