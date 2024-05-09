import { CallToActionProps, FAQsProps, FeaturesProps, HeroProps, ContentProps } from '~/shared/types';
import URLs from '~/utils/constants/urls';
import itSupportHero from '~/assets/images/itSupportHero.png';
import itSupportQuality from '~/assets/images/itSupportHero.png'; // Update this image if needed
import dataSecurity from '~/assets/images/dataSecurity.png'; // Update this image if needed
import dynamicIcons from '~/components/atoms/Icons';

// Hero data on IT page
export const heroIT: HeroProps = {
  title: 'Comprehensive IT Support Services',
  subtitle: 'Expert IT solutions that ensure your business stays connected and secure.',
  callToAction: {
    text: 'Discover Our Services',
    href: URLs.IT,
  },
  image: {
    src: itSupportHero,
    alt: 'IT Support Hero Image - Colorful Circuits and Technology Components',
  },
};

// Features data on IT page
export const features2IT: FeaturesProps = {
  columns: 3,

  header: {
    title: (
      <>
        <span className="text-primary-900 dark:text-secondary-200">Tailored IT Solutions</span>
      </>
    ),
    subtitle: (
      <>
        <span className="text-primary-900 dark:text-secondary-300">
          We&apos;re here to help you with all your IT needs. From website design and management to network setup,
          we&apos;ve got you covered.
        </span>
      </>
    ),
    tagline: (
      <>
        <span className="text-primary-900 dark:text-secondary-300">Services</span>
      </>
    ),
  },
  items: [
    {
      title: 'Technical Support',
      description: 'Round-the-clock technical support for all your hardware and software issues.',
      icon: dynamicIcons.help,
    },
    {
      title: 'Network Solutions',
      description: 'Robust network management services to keep your operations smooth and secure.',
      icon: dynamicIcons.network,
    },
    {
      title: 'Software Services',
      description: 'Custom software solutions tailored to meet the unique needs of your business.',
      icon: dynamicIcons.code,
    },
    {
      title: 'Security & Compliance',
      description: 'Advanced security measures to protect your data and ensure compliance with regulations.',
      icon: dynamicIcons.shieldLock,
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud services to enhance your data accessibility and disaster recovery strategies.',
      icon: dynamicIcons.cloudCode,
    },
    {
      title: 'IT Consultations',
      description: 'Expert IT consulting to help you navigate the complex world of technology effectively.',
      icon: dynamicIcons.messages,
    },
  ],
};

// Content data on IT page for Data Privacy
export const contentITOne: ContentProps = {
  id: 'contentOne-on-it-one',
  hasBackground: true,
  header: {
    title: (
      <>
        <span className="text-primary-900 dark:text-secondary-200">Data Best Practices</span>
      </>
    ),
    subtitle: (
      <>
        <span className="text-primary-900 dark:text-secondary-300">
          Your data&apos;s security is our top priority, and we take comprehensive steps to protect it.
        </span>
      </>
    ),
    tagline: (
      <>
        <span className="text-primary-900 dark:text-secondary-300">Effective Data Management</span>
      </>
    ),
  },
  content: 'Commitment to Data Security and Privacy',
  items: [
    {
      title: 'Robust Data Handling',
      description: 'We adhere to strict data handling protocols to ensure the utmost security and confidentiality.',
    },
    {
      title: 'Ongoing Compliance Reviews',
      description: 'We conduct regular audits to ensure compliance with evolving industry standards and regulations.',
    },
    {
      title: 'Tailored Security Solutions',
      description:
        'We offer security solutions customized to meet the unique requirements and challenges of your business.',
    },
  ],

  image: {
    src: dataSecurity,
    alt: 'Data Security Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on IT page for Quality Standards
export const contentITTwo: ContentProps = {
  id: 'contentOne-on-it-two',
  hasBackground: false,
  content: 'Commitment to Service Excellence',
  items: [
    { title: '24/7 Support Availability' },
    { title: 'Guaranteed Response Times' },
    { title: 'Experienced Professionals' },
    { title: 'Proactive Monitoring' },
    { title: 'Transparent Reporting' },
    { title: 'Continuous Improvement Practices' },
  ],
  image: {
    src: itSupportQuality,
    alt: 'IT Service Excellence Standards Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// FAQs data on IT page
export const faqsIT: FAQsProps = {
  hasBackground: true,
  columns: 1,
  header: {
    title: 'Frequently Asked IT Questions',
    subtitle: 'Answers to common queries about our IT services. For more info, please contact us.',
  },
  items: [
    {
      title: 'What IT services do you offer?',
      description:
        'We provide a wide range of IT services from technical support to complete IT infrastructure management.',
      icon: dynamicIcons.infoCircle,
    },
    {
      title: 'How can you improve our IT security?',
      description: 'We implement cutting-edge security measures tailored to your specific business needs.',
      icon: dynamicIcons.security,
    },
    {
      title: 'What support do you offer for networks?',
      description:
        'From initial setup to ongoing management, our network services ensure reliable and secure connectivity.',
      icon: dynamicIcons.networkCheck,
    },
    {
      title: 'Do you offer cloud storage solutions?',
      description: 'Yes, we provide secure and scalable cloud storage solutions for businesses of all sizes.',
      icon: dynamicIcons.cloud,
    },
  ],
};

// Call to Action data on IT page
export const callToActionIT: CallToActionProps = {
  hasBackground: false,
  title: 'Get Started with Our IT Services',
  subtitle: 'Contact us today to learn how we can help your business thrive.',
  callToAction: {
    text: 'Contact Our Team',
    href: URLs.CONTACT,
  },
};
