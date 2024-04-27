import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero2';
import { heroHome } from '~/shared/data/pages/home.data';
import Features from '~/components/widgets/Features3';
import { featuresHome } from '~/shared/data/pages/home.data';
import Newsletter from '~/components/widgets/NewsletterCTA';
import { NewsletterHome } from '~/shared/data/pages/home.data';
import Header from '~/components/widgets/Header';

export const metadata: Metadata = {
  title: SITE.title,
};

export default async function Page() {
  return (
    <>
      <Header />
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Newsletter {...NewsletterHome} />
    </>
  );
}
