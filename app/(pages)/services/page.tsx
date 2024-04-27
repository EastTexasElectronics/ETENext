import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero2';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionServices,
  faqsServices,
  features2Services,
  heroServices,
  testimonialsServices,
} from '~/shared/data/pages/services.data';
import Header from '~/components/widgets/Header';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Discover top-notch Hardware Solutions, Software Solutions, IT Infrastructure, Web Development, and Tech Consulting services tailored for your business needs. East Texas Electronics offers reliable, professional, and innovative technology solutions with a focus on security, privacy, and eco-friendly practices.',
  keywords: [
    'hardware solutions',
    'software solutions',
    'IT infrastructure',
    'web development services',
    'tech consulting',
    'electronics recycling',
    'small business technology',
    'large scale tech projects',
    'service contracts',
    'professional IT services',
    'secure technology services',
    'innovative tech solutions',
    'customer satisfaction',
    'electronic repairs',
    'computer maintenance',
    'smartphone repair',
    'tablet repair',
    'circuit board repair',
    'competitive IT rates',
    'technology warranties',
    'website development costs',
    'tech strategy',
    'business infrastructure development',
    'environmentally friendly electronics disposal',
  ],
};

const Page = () => {
  return (
    <>
      <Header />
      <Hero {...heroServices} />
      <Features2 {...features2Services} />
      <Testimonials {...testimonialsServices} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
