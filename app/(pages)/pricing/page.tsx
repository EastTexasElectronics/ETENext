import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero2';
import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import { heroPricing, comparisonPricing, faqs3Pricing, pricingPricing } from '~/shared/data/pages/pricing.data';
import Header from '~/components/widgets/Header';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Page = () => {
  return (
    <>
      <Header />
      <Hero {...heroPricing} />
      <Pricing {...pricingPricing} />
      <Comparison {...comparisonPricing} />
      <FAQs3 {...faqs3Pricing} />
    </>
  );
};

export default Page;
