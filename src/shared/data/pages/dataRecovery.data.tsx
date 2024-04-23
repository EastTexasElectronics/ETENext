import { CallToActionProps, FAQsProps, FeaturesProps, HeroProps, ContentProps } from '~/shared/types';
import URLs from '~/constants/urls';
import dataHero from '~/assets/images/dataHero.png';
import repairQuality from '~/assets/images/repairQuality.png';
import dataPrivacy from '~/assets/images/dataPrivacy.png';
import dynamicIcons from '~/components/atoms/Icons';

// Hero data on Data page
export const heroData: HeroProps = {
  title: 'Premier Electronic Repair Services',
  subtitle: 'Expert repair solutions for all electronic equipment. Ensuring optimal performance with every fix.',
  callToAction: {
    text: 'Schedule Your Repair',
    href: URLs.APPOINTMENT,
  },
  image: {
    src: dataHero,
    alt: 'Repair Services Image',
  },
};

// Features data on Data page
export const features2Data: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Our Specialized Services',
  },
  items: [
    {
      title: 'Computers & Laptops',
      description:
        'Comprehensive repair services for all computer and laptop issues, from hardware malfunctions to software glitches.',
      icon: dynamicIcons.cpu,
    },
    {
      title: 'Mobile Devices',
      description:
        'Expert repairs for smartphones and tablets, specializing in screen replacements, battery issues, and more.',
      icon: dynamicIcons.code,
    },
    {
      title: 'Servers & Workstations',
      description:
        'Rapid recovery solutions for servers and workstations to minimize downtime and maintain business continuity.',
      icon: dynamicIcons.heartHandshake,
    },
    {
      title: 'Precision Soldering',
      description: 'High-quality soldering for electronic components requiring detailed and meticulous attention.',
      icon: dynamicIcons.appWindow,
    },
    {
      title: 'All Electronic Devices',
      description:
        'A one-stop-shop for all electronic device repairs, handling everything from common gadgets to unique and rare equipment.',
      icon: dynamicIcons.hipChat,
    },
    {
      title: 'Circuit Board Repair',
      description: 'Specialized circuit board repairs, focusing on delivering durable and reliable fixes.',
      icon: dynamicIcons.recycle,
    },
  ],
};

// Content data on Data page for Data Privacy
export const contentDataOne: ContentProps = {
  id: 'contentOne-on-Software-one',
  hasBackground: true,
  content: 'Your Data Privacy & Security Guaranteed',
  items: [
    {
      title: 'No Data Retention',
      description:
        'We ensure any data necessary for repairs is securely deleted post-service. Your privacy is paramount.',
    },
    {
      title: 'Minimal Data Access',
      description:
        'Access to data is strictly limited to what is necessary for repairs. We respect your digital privacy at all times.',
    },
    {
      title: 'NDA Provision',
      description:
        'Available NDAs for sensitive information, ensuring your data remains confidential and protected under all circumstances.',
    },
  ],
  image: {
    src: dataPrivacy,
    alt: 'Privacy Assurance Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Data page for Recycling Standards
export const contentDataTwo: ContentProps = {
  id: 'contentOne-on-repair-two',
  hasBackground: false,
  content: 'Expect Excellence in Every Repair',
  items: [
    { title: 'Guaranteed Labor for 1 Year' },
    { title: 'High-Quality Parts & Materials' },
    { title: 'Efficient Turnaround Times' },
    { title: 'Competitive Pricing' },
    { title: 'Professional & Experienced Technicians' },
    { title: 'Dedication to Innovation and Quality' },
  ],
  image: {
    src: repairQuality,
    alt: 'Quality Repair Standards Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// FAQs data on Data page
export const faqsData: FAQsProps = {
  hasBackground: true,
  columns: 1,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Quick answers to your common repair queries. For more detailed inquiries, feel free to reach out.',
  },
  items: [
    {
      title: 'What can you repair?',
      description:
        'We handle repairs across a broad spectrum of electronics, from everyday gadgets to specialized industrial equipment.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'What will it cost?',
      description:
        'Our pricing is competitive and transparent. Contact us for detailed quotes tailored to your specific repair needs.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'Do you provide warranties?',
      description:
        'Every repair comes with a one-year warranty on labor. We also manage warranty claims for parts used in repairs.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'Cost of a custom website?',
      description:
        'Custom website costs vary based on complexity and specific requirements. Get in touch for a comprehensive quote.',
      icon: dynamicIcons.helpHexagon,
    },
  ],
};

// Call to Action data on Data page
export const callToActionData: CallToActionProps = {
  hasBackground: false,
  title: 'Ready for a Repair?',
  subtitle: 'Book an appointment today and experience premier electronic repair services.',
  callToAction: {
    text: 'Schedule a Service',
    href: URLs.APPOINTMENT,
  },
};
