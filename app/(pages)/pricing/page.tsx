import type { Metadata } from 'next';

import Hero from '~/components/widgets/heros/Hero2';
import Pricing from '~/components/widgets/pricing/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/faq/FAQs3';
import { heroPricing, comparisonPricing, faqs3Pricing, pricingPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Page = () => {
  return (
    <>
      <Hero {...heroPricing} />
      <Pricing {...pricingPricing} />
      <Comparison {...comparisonPricing} />
      <FAQs3 {...faqs3Pricing} />
    </>
  );
};

export default Page;
