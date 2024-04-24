import { Metadata } from 'next';
import CallToAction from '~/components/widgets/callToAction/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/faq/FAQs';
import Features2 from '~/components/widgets/features/Features2';
import Hero from '~/components/widgets/heros/Hero2';
import {
  callToActionSoftware,
  contentSoftwareOne,
  contentSoftwareTwo,
  faqsSoftware,
  features2Software,
  heroSoftware,
} from '~/shared/data/pages/softwareWebsiteAppDevelopment.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroSoftware} />
      <Features2 {...features2Software} /> {/* Services component */}
      <Content {...contentSoftwareOne} /> {/* Data Privacy component */}
      <Content {...contentSoftwareTwo} /> {/* Quality component */}
      <FAQs {...faqsSoftware} /> {/* FAW component */}
      <CallToAction {...callToActionSoftware} /> {/* Book Now component */}
    </>
  );
};

export default Page;