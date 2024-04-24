import { Metadata } from 'next';
import CallToAction from '~/components/widgets/callToAction/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/faq/FAQs';
import Features2 from '~/components/widgets/features/Features2';
import Features4 from '~/components/widgets/features/Features4';
import Hero from '~/components/widgets/heros/Hero2';
import {
  callToActionIT,
  contentITOne,
  contentITTwo,
  faqsIT,
  features2IT,
  heroIT,
} from '~/shared/data/pages/itServices.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroIT} />
      <Features2 {...features2IT} /> {/* Services component */}
      <Content {...contentITOne} /> {/* Data Privacy component */}
      <Content {...contentITTwo} /> {/* Quality component */}
      <FAQs {...faqsIT} /> {/* FAW component */}
      <CallToAction {...callToActionIT} /> {/* Book Now component */}
    </>
  );
};

export default Page;
