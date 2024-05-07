import { CallToActionProps, FAQsProps, FeaturesProps, HeroProps, TestimonialsProps } from '~/shared/types';
import URLs from '~/utils/constants/urls';
import servicesHero from '~/assets/images/aboutHero.webp';
import dynamicIcons from '~/components/atoms/Icons';

// Hero data on Services page
export const heroServices: HeroProps = {
  title: 'What We Offer',
  subtitle:
    'From Hardware to Software, we have you covered. Our services are designed to help you build your dream infrastructure with ease.',
  callToAction: {
    text: 'Book an Appointment',
    href: URLs.APPOINTMENT,
  },
  image: {
    src: servicesHero,
    alt: 'Services Hero Image',
  },
};

// Features data on Services page
export const features2Services: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Our Services',
  },
  items: [
    {
      title: 'Hardware Solutions',
      description:
        'We provide the best hardware solutions for your business. From servers to circuit boards, we have you covered.',
      icon: dynamicIcons.cpu,
      callToAction: { text: 'Learn More', href: URLs.REPAIRS },
    },
    {
      title: 'Software Solutions',
      description:
        'From custom software to off-the-shelf solutions, we have the expertise to help you build the perfect software for your business.',
      icon: dynamicIcons.code,
      callToAction: { text: 'Learn More', href: URLs.SOFTWARE },
    },
    {
      title: 'IT Solutions',
      description:
        'Let us help you build the perfect IT infrastructure for your business. From networking to security, we have you covered.',
      icon: dynamicIcons.heartHandshake,
      callToAction: { text: 'Learn More', href: URLs.IT },
    },
    {
      title: 'Web Development',
      description:
        'We provide the best web development services for your business. From e-commerce to custom websites, we have you covered.',
      icon: dynamicIcons.appWindow,
      callToAction: { text: 'Learn More', href: URLs.WEB_DEVELOPMENT },
    },
    {
      title: 'Tech Consulting',
      description:
        "Don't know where to start? Let us help you build the perfect tech strategy for your business. From planning to execution, we have you covered.",
      icon: dynamicIcons.hipChat,
      callToAction: { text: 'Learn More', href: URLs.CONSULTATIONS },
    },
    {
      title: 'Electronics Recycling',
      description:
        "Don't let your old electronics go to waste. Let us help you recycle them in an environmentally friendly way.",
      icon: dynamicIcons.recycle,
      callToAction: { text: 'Learn More', href: URLs.RECYCLING },
    },
  ],
};

// Testimonials data on Services page
export const testimonialsServices: TestimonialsProps = {
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'What Our Clients Say',
    subtitle: "Don't just take our word for it. Here's what our clients have to say about our services.",
  },
  testimonials: [
    {
      name: 'Cortnie B.',
      job: 'Google Maps',
      testimonial:
        'Robert was very helpful! He explained the things that needed fixing and helped me out a lot. The repair was speedy, and he has excellent service. I hope I won’t need his assistance again, but if I do I know exactly where to go for help if I need it. Thank you so much.\nOh, and for people curious, he fixes more than electronics. He can repair amplifiers as well, which is really cool.',
      href: URLs.TESTIMONIAL1,
    },
    {
      name: 'Eric T.',
      job: 'Google Maps',
      testimonial:
        "100% Customer satisfaction and detail oriented. Robert does outstanding work.\nIf it's broke, he can fix it. Give him a call for all your electronic headaches.",
      href: URLs.TESTIMONIAL2,
    },
    {
      name: 'Kevin R.',
      job: 'Google Maps',
      testimonial:
        'The service was absolutely great. Robert was able to fix my computer and save me a ton of money in the process. He also kept me informed all throughout the process. I could not have asked for a better experience.',
      href: URLs.TESTIMONIAL3,
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More Testimonials...',
    href: URLs.GOOGLE_REVIEWS,
  },
};

// FAQs data on Services page
export const faqsServices: FAQsProps = {
  hasBackground: true,
  columns: 1,
  header: {
    title: 'Answers to Common Questions',
    subtitle:
      "Have a question? Check out our FAQs to see if we have an answer for you. If you don't see your question here, feel free to contact us. We're happy to help.",
  },
  items: [
    {
      title: 'What do you repair?',
      description:
        'We repair a wide range of electronics, including computers, smartphones, tablets, circuit boards and much more. If you have a question about a specific device, feel free to contact us.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'What are your rates?',
      description:
        'Our rates vary depending on the service you need. We offer competitive pricing and are committed to providing the best value for our clients. For a quote, please contact us.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'Do you offer warranties on your repairs?',
      description:
        'Yes, we stand by our labor for 1 year, and help with any warranty issues with parts we install. We also offer extended warranties on some repairs. Please contact us for more information.',
      icon: dynamicIcons.helpHexagon,
    },
    {
      title: 'How much does it cost to get a website?',
      description:
        'The cost of a website varies depending on the complexity of the project. We offer competitive pricing and are committed to providing the best value for our clients. For a quote, please contact us.',
      icon: dynamicIcons.helpHexagon,
    },
  ],
};

// Call to Action data on Services page
export const callToActionServices: CallToActionProps = {
  hasBackground: false,
  title: 'Still Have Questions?',
  subtitle:
    "We're here to help. Contact us to learn more about our services and how we can help you build your dream infrastructure.",
  callToAction: {
    text: 'Contact Us',
    href: URLs.CONTACT,
  },
};
