import { Metadata } from 'next';
import CallToAction from '~/components/widgets/callToAction/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/faq/FAQs';
import Features2 from '~/components/widgets/features/Features2';
import Hero from '~/components/widgets/heros/Hero2';
import {
  callToActionData,
  contentDataOne,
  contentDataTwo,
  faqsData,
  features2Data,
  heroData,
} from '~/shared/data/pages/dataRecovery.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroData} />
      <Features2 {...features2Data} /> {/* Services component */}
      <Content {...contentDataOne} /> {/* Data Privacy component */}
      <Content {...contentDataTwo} /> {/* Quality component */}
      <FAQs {...faqsData} /> {/* FAW component */}
      <CallToAction {...callToActionData} /> {/* Book Now component */}
    </>
  );
};

export default Page;
