import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import ServiceCards from '~/components/widgets/ServiceCards';import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero2';
import {
  callToActionIT,
  contentITOne,
  faqsIT,
  features2IT,
  heroIT,
} from '~/shared/data/pages/itServices.data';
import Header from '~/components/widgets/Header';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Header />
      <Hero {...heroIT} />
      <ServiceCards {...features2IT} /> {/* Services component */}
      <Content {...contentITOne} /> {/* Data Privacy component */}
      {/* <Content {...contentITTwo} /> Quality component */}
      <FAQs {...faqsIT} /> {/* FAW component */}
      <CallToAction {...callToActionIT} /> {/* Book Now component */}
    </>
  );
};

export default Page;
