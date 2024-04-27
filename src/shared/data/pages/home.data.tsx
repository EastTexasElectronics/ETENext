import { IconMail, IconCalendarEvent, IconHeartHandshake, IconCodeCircle2, IconCpu } from '@tabler/icons-react';
import { NewsletterProps, FeaturesProps, HeroProps } from '../../types';
import heroImg from '~/assets/images/welcomeRobot.webp';
import URLs from '~/constants/urls';
import Link from 'next/link';

// Hero data on Home page
export const heroHome: HeroProps = {
  title: (
    <>
      <span className="font-semibold text-5xl md:text-5xl lg:text-7xl">East Texas Electronics, LLC.</span>
    </>
  ),
  subtitle: (
    <>
      <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-800/60 to-50% to-slate-400 dark:from-slate-200/60 dark:to-50% dark:to-slate-200">
        Assisting you with{' '}
        <span className="text-primary-500 dark:text-primary-300 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li>
              <Link href={URLs.HOME}>Repairs</Link>
            </li>
            <li>
              <Link href={URLs.HOME}>Support</Link>
            </li>
            <li>
              <Link href={URLs.HOME}>Websites</Link>
            </li>
            <li>
              <Link href={URLs.HOME}>Software</Link>
            </li>
            <li>
              <Link href={URLs.HOME}>eCommerce</Link>
            </li>
            <li aria-hidden="true">
              <Link href={URLs.HOME}>Recycling</Link>
            </li>
          </ul>
        </span>
      </div>
    </>
  ),
  callToAction: {
    text: 'Book an Appointment',
    href: URLs.APPOINTMENT,
    icon: IconCalendarEvent,
    ariaLabel: 'Book an Appointment',
  },
  callToAction2: {
    text: 'Learn More',
    href: URLs.ABOUT,
    ariaLabel: 'About Us',
  },
  image: {
    src: heroImg,
    alt: 'Banner Image - Line Graphic with Technology Icons',
  },
};

// Features data on Home page
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">East Texas Electronics</span>
      </>
    ),
    subtitle:
      "We're here to help you with all your IT needs. From computer repair to network setup, we've got you covered.",
    tagline: 'Services',
  },
  items: [
    {
      title: 'Electronic Repairs',
      description:
        'We repair all types of electronics, from circuit boards to machinery. Our team of experts can fix any issue you may have.',
      icon: IconCpu,
      callToAction: {
        text: 'Discover now',
        href: URLs.HOME,
      },
    },
    {
      title: 'Web Development',
      description:
        'We create beautiful websites that are easy to use and look great on any device. Our team of experts can help you build the perfect website for your business.',
      icon: IconCodeCircle2,
      callToAction: {
        text: 'Discover now',
        href: URLs.HOME,
      },
    },
    {
      title: 'IT Services',
      description:
        'We offer a wide range of IT services, from network setup to data recovery. Our team of experts can help you with any IT issue.',
      icon: IconHeartHandshake,
      callToAction: {
        text: 'Discover now',
        href: URLs.HOME,
      },
    },
  ],
};

// Newsletter data on Home page
export const NewsletterHome: NewsletterProps = {
  title: 'Get In Touch With Us',
  subtitle:
    'Lets make your IT journey a success. Get in touch with us to learn more about our services and how we can help you.',
  items: [
    {
      title: 'Book an Appointment',
      description: 'Book an appointment with us to get started on your IT journey.',
      href: URLs.APPOINTMENT,
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with us to learn more about our services and how we can help you.',
      href: URLs.CONTACT,
    },
    {
      title: 'Subscribe',
      description:
        'Sign up for our newsletter to get the latest news and updates on our services. We promise not to spam you!',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
