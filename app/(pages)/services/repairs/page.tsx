import { Metadata } from 'next';
import CallToAction from '~/components/widgets/callToAction/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/faq/FAQs';
import Features2 from '~/components/widgets/features/Features2';
import Features4 from '~/components/widgets/features/Features4';
import Hero from '~/components/widgets/heros/Hero2';
import {
  callToActionRepair,
  contentRepairOne,
  contentRepairTwo,
  faqsRepair,
  features2Repair,
  heroRepair,
} from '~/shared/data/pages/repairServices.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroRepair} />
      <Features2 {...features2Repair} /> {/* Services component */}
      <Content {...contentRepairOne} /> {/* Data Privacy component */}
      <Content {...contentRepairTwo} /> {/* Quality component */}
      <FAQs {...faqsRepair} /> {/* FAW component */}
      <CallToAction {...callToActionRepair} /> {/* Book Now component */}
    </>
  );
};

export default Page;
