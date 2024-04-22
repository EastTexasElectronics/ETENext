import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero2';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionRepair,
  contentRepairOne,
  contentRepairTwo,
  faqsRepair,
  features2Repair,
  features4Repair,
  heroRepair,
  testimonialsRepair,
} from '~/shared/data/pages/repairServices.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroRepair} />
      <Features2 {...features2Repair} />
      <Content {...contentRepairOne} />
      <Content {...contentRepairTwo} />
      <Features4 {...features4Repair} />
      <Testimonials {...testimonialsRepair} />
      <FAQs {...faqsRepair} />
      <CallToAction {...callToActionRepair} />
    </>
  );
};

export default Page;
