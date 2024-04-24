import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/heros/Hero';
import { heroHome } from '~/shared/data/pages/home.data';
import Features from '~/components/widgets/features/Features3';
import { featuresHome } from '~/shared/data/pages/home.data';
import Newsletter from '~/components/widgets/callToAction/NewsletterCTA';
import { NewsletterHome } from '~/shared/data/pages/home.data';
import BookingButton from '~/components/atoms/BookingButton';

export const metadata: Metadata = {
  title: SITE.title,
};

export default async function Page() {

  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome}  />
      <Newsletter {...NewsletterHome} />
      <BookingButton />
    </>
  );
}
