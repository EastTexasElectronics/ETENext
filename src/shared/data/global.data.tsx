import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconCalendar,
  IconChevronDown,
  IconUsers,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps, CPortalHeaderProps } from '../types';
import URLs from '~/constants/urls';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'READE ME',
  callToAction: {
    text: 'THIS WEBSITE IS UNDER CONSTRUCTION IF YOU ARE LOOKING FOR OUR ECOMMERCE STORE PLEASE VISIT OUR SHOP',
    href: 'https://www.easttexaselectronics.com',
  },
  callToAction2: {
    text: 'Visit',
    href: 'https://www.easttexaselectronics.com',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Services',
      icon: IconChevronDown,
      links: [
        {
          label: 'IT Support',
          href: URLs.IT,
        },
        {
          label: 'Electronics Repair',
          href: URLs.REPAIRS,
        },
        {
          label: 'Web & App Development',
          href: URLs.WEB_DEVELOPMENT,
        },
        {
          label: 'Software Development',
          href: URLs.SOFTWARE,
        },
        {
          label: 'Electronics Recycling',
          href: URLs.RECYCLING,
        },
        {
          label: 'Data Recovery',
          href: URLs.DATA_RECOVERY,
        },
      ],
    },
    // TODO - Add blog link when ready
    {
      label: 'Blog',
      href: URLs.BLOG,
    },
    {
      label: 'Contact',
      href: URLs.CONTACT,
    },
    {
      label: 'HR Portal',
      href: URLs.CONTACT,
    },
    {
      label: 'Visit Our Shop',
      href: URLs.ETE,
    },
  ],
  actions: [
    {
      text: 'Customer Portal',
      href: URLs.CPORTAL,
      icon: IconUsers,
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  position: 'center',
};

// Footer data
export const footerData: FooterProps = {
  title: 'East Texas Electronics',
  links: [
    {
      label: 'Terms & Conditions',
      href: URLs.TERMS,
    },
    {
      label: 'Privacy Policy',
      href: URLs.PRIVACY,
    },
  ],
  columns: [
    {
      title: 'Top Services',
      links: [
        {
          label: 'Tech Support',
          href: URLs.IT,
        },
        {
          label: 'Electronics Repair',
          href: URLs.REPAIRS,
        },
        {
          label: 'Data Storage',
          href: URLs.FAQ_PAGE,
        },
        {
          label: 'Web & App Development',
          href: URLs.WEB_DEVELOPMENT,
        },
      ],
    },
    {
      title: 'Upcoming',
      links: [
        {
          label: 'Employee Portal',
          href: '/upcoming',
        },
        {
          label: 'Employee Management',
          href: '/upcoming',
        },
        {
          label: 'Asset Management',
          href: '/upcoming',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Contact Us',
          href: URLs.CONTACT,
        },
        {
          label: 'Book an Appointment',
          href: URLs.APPOINTMENT,
        },
        {
          label: 'Request a Consultation',
          href: URLs.CONSULTATIONS,
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: URLs.ABOUT,
        },
        {
          label: 'Blog',
          href: URLs.BLOG,
        },
        {
          label: 'Careers',
          href: URLs.CAREERS,
        },
        {
          label: 'Online Store',
          href: URLs.SHOP,
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: URLs.TWITTER },
    { label: 'Instagram', icon: IconBrandInstagram, href: URLs.INSTAGRAM },
    { label: 'Facebook', icon: IconBrandFacebook, href: URLs.FACEBOOK },
    { label: 'Github', icon: IconBrandGithub, href: URLs.GITHUB },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <a className="text-blue-600 hover:underline dark:text-gray-200" href={URLs.ETE}>
        {' '}
        East Texas Electronics, LLC.
      </a>{' '}
      · All Rights Reserved. <span className="text-xs text-gray-600 dark:text-slate-300">©2022</span>
    </div>
  ),
};

export const cPortalHeaderData: CPortalHeaderProps = {
  links: [
    {
      label: 'My Business',
      icon: IconChevronDown,
      links: [
        {
          label: 'Company Profile',
          href: URLs.IT,
        },
        {
          label: 'Electronics Repair',
          href: URLs.REPAIRS,
        },
        {
          label: 'Web & App Development',
          href: URLs.WEB_DEVELOPMENT,
        },
        {
          label: 'Software Development',
          href: URLs.SOFTWARE,
        },
        {
          label: 'Electronics Recycling',
          href: URLs.RECYCLING,
        },
        {
          label: 'Data Recovery',
          href: URLs.DATA_RECOVERY,
        },
      ],
    },
    {
      label: 'Employees',
      icon: IconChevronDown,
      links: [
        {
          label: 'Employee List',
          href: URLs.IT,
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Book an Appointment',
      href: URLs.APPOINTMENT,
      icon: IconCalendar,
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  position: 'center',
};
