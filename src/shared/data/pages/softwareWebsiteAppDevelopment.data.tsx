import { CallToActionProps, FAQsProps, FeaturesProps, HeroProps, ContentProps } from '~/shared/types';
import URLs from '~/constants/urls';
import softwareHero from '~/assets/images/heroSoftware.png';
import repairQuality from '~/assets/images/repairQuality.png';
import dataPrivacy from '~/assets/images/dataPrivacy.png';
import dynamicIcons from '~/components/atoms/Icons';

// Hero data on Software page
export const heroSoftware: HeroProps = {
  title: 'Advanced Software Development Services',
  subtitle: 'Leading-edge software solutions to drive business efficiency and growth.',
  callToAction: {
    text: 'Consult Our Experts',
    href: URLs.APPOINTMENT,
  },
  image: {
    src: softwareHero,
    alt: 'Software Development Services Image',
  },
};

// Features data on Software page
export const features2Software: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Custom Software & App Development',
  },
  items: [
    {
      title: 'Enterprise Software Solutions',
      description: 'Tailored software development services to enhance business operations and productivity.',
      icon: dynamicIcons.cpu,
    },
    {
      title: 'Mobile and Web Applications',
      description: 'Custom app development to create seamless mobile and web experiences for your business.',
      icon: dynamicIcons.code,
    },
    {
      title: 'Infrastructure Management',
      description:
        'Efficient solutions for server and workstation management to ensure maximum uptime and performance.',
      icon: dynamicIcons.heartHandshake,
    },
    {
      title: 'Technical Precision Services',
      description: 'Expert precision services for specialized software and hardware integrations.',
      icon: dynamicIcons.appWindow,
    },
    {
      title: 'Integrated Solutions',
      description: 'Comprehensive solutions for integrating and managing all your business technology needs.',
      icon: dynamicIcons.hipChat,
    },
    {
      title: 'Circuit and System Integration',
      description: 'Advanced circuit and system integration services for robust tech solutions.',
      icon: dynamicIcons.recycle,
    },
  ],
};

// Content data on Repair page for Data Privacy
export const contentSoftwareOne: ContentProps = {
  id: 'contentOne-on-Software-one',
  hasBackground: true,
  content: 'Your Business Data Is Secure With Us',
  items: [
    {
      title: 'Data Security Compliance',
      description:
        'Complete adherence to industry data security standards, ensuring your business data is protected during and after our services.',
    },
    {
      title: 'Controlled Data Access',
      description: 'Data access is meticulously managed, guaranteeing minimal exposure and maximum privacy.',
    },
    {
      title: 'Contractual Confidentiality',
      description:
        'We offer contractual NDAs to safeguard your sensitive information, maintaining strict confidentiality under all circumstances.',
    },
  ],
  image: {
    src: dataPrivacy,
    alt: 'Data Security and Privacy Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Repair page for Software Standards
export const contentSoftwareTwo: ContentProps = {
  id: 'contentOne-on-repair-two',
  hasBackground: false,
  content: 'Guaranteed Excellence in Our Digital Solutions',
  items: [
    { title: 'Warranty on Technical Services' },
    { title: 'Top-Tier Components & Methodologies' },
    { title: 'Rapid Development Cycles' },
    { title: 'Transparent Pricing Models' },
    { title: 'Certified Development Professionals' },
    { title: 'Commitment to Technological Advancement' },
  ],
  image: {
    src: repairQuality,
    alt: 'High-Quality Development Standards Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// FAQs data on Software page
export const faqsSoftware: FAQsProps = {
  hasBackground: true,
  columns: 1,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Immediate answers to your technical and service-related questions.',
  },
  items: [
    {
      title: 'What technology stacks do you specialize in?',
      description:
        'We offer expertise across a wide range of technologies, catering to custom software and system development needs.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'What are your development rates?',
      description:
        'Our rates are competitive and reflect the bespoke nature of our services. Contact us for a tailored proposal.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'What kind of post-development support do you offer?',
      description:
        'We provide comprehensive warranties and support for all our services to ensure your continued satisfaction.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'Can you develop custom solutions for unique business needs?',
      description:
        'We specialize in creating customized software solutions tailored to meet the specific demands of your business.',
      icon: dynamicIcons.helpHexagon,
    },
  ],
};

// Call to Action data on Software page
export const callToActionSoftware: CallToActionProps = {
  hasBackground: false,
  title: 'Ready to Elevate Your Business?',
  subtitle: 'Contact us today and let\’s transform your business with cutting-edge technology.',
  callToAction: {
    text: 'Start Your Project',
    href: URLs.APPOINTMENT,
  },
};
