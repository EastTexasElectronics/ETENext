import { Suspense } from 'react';
import Loading from '../app/loading';
import ThemeProviders from '~/components/atoms/ThemeProviders';
import Footer from '~/components/widgets/Footer';
import Announcement from '~/components/widgets/Announcement';
import { Inter as CustomFont } from 'next/font/google';
import { Inter } from 'next/font/google'
import '~/assets/styles/base.css';
// TODO Causing Hydration Error
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import BookingButton from '~/components/atoms/BookingButton';
import { ClerkProvider } from '@clerk/nextjs';

// Custom font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// TODO Import Metadata from src/shared/data/metadata/metadata.tsx
// Metadata for the site

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {/* TODO remove className from HTML tag, this causes hydration issues. Find another way to implement.*/}
      <html lang="en" className={inter.className}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
          <ThemeProviders>
            <Announcement />
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
