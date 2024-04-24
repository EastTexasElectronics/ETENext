import { Metadata } from 'next';
import CallToAction from '~/components/widgets/callToAction/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/faq/FAQs';
import Features2 from '~/components/widgets/features/Features2';
import Hero from '~/components/widgets/heros/Hero2';
import {
  callToActionRecycling,
  contentRecyclingOne,
  contentRecyclingTwo,
  faqsRecycling,
  features2Recycling,
  heroRecycling,
} from '~/shared/data/pages/eWasteRecycling.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroRecycling} />
      <Features2 {...features2Recycling} /> {/* Services component */}
      <Content {...contentRecyclingOne} /> {/* Data Privacy component */}
      <Content {...contentRecyclingTwo} /> {/* Quality component */}
      <FAQs {...faqsRecycling} /> {/* FAW component */}
      <CallToAction {...callToActionRecycling} /> {/* Book Now component */}
    </>
  );
};

export default Page;
