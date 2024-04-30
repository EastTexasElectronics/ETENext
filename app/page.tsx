import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import ServiceCards from '~/components/widgets/ServiceCards';
import { featuresHome } from '~/shared/data/pages/home.data';
import Newsletter from '~/components/widgets/NewsletterCTA';
import { NewsletterHome } from '~/shared/data/pages/home.data';
import Header from '~/components/widgets/Header';
import { HomeHero } from '~/components/widgets/HomeHero';

export const metadata: Metadata = {
  title: SITE.title,
};

export default async function Page() {
  return (
    <>
      <Header />
      <HomeHero />
      <ServiceCards {...featuresHome} />
      <Newsletter {...NewsletterHome} />
    </>
  );
}
