import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero2';
import {
  callToActionRecycling,
  contentRecyclingOne,
  contentRecyclingTwo,
  faqsRecycling,
  features2Recycling,
  heroRecycling,
} from '~/shared/data/pages/eWasteRecycling.data';
import Header from '~/components/widgets/Header';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Header />
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
