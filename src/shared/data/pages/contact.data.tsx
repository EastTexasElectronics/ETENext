import dynamicIcons from '~/components/atoms/Icons';
import { ContactProps, FeaturesProps, ContactUsFormProps } from '~/shared/types';
import { IconPhone, IconMail, IconGlobe } from '@tabler/icons-react';
import URLs from '~/utils/constants/urls';
import { Contact } from '~/components/SVG/contact'


const FORM_INPUTS = [
  { type: 'text', label: 'First name', name: 'name', autocomplete: 'on', placeholder: 'John' },
  { type: 'text', label: 'Last name', name: 'lastName', autocomplete: 'on', placeholder: 'Doe' },
  { type: 'email', label: 'Email address', name: 'email', autocomplete: 'on', placeholder: 'example@gmail.com' },
  { type: 'text', label: 'Company name', name: 'companyName', autocomplete: 'on', placeholder: 'Acme Inc.' },
  { type: 'text', label: 'Phone number', name: 'phone', autocomplete: 'on', placeholder: '(123) 456-7890' },
];

const RADIO_BUTTONS = {
  generalContact: [
    { label: 'General Inquiries' },
    { label: 'Service Inquiries' },
    { label: 'Product Inquiries' },
    { label: 'Other' },
  ],
  preferredContact: [{ label: 'Phone Call' }, { label: 'Text Message' }, { label: 'Email' }],
};

// Contact data on Contact page
// export const contact2Contact: ContactProps = {
//   id: 'contactTwo-on-contact',
//   hasBackground: true,
//   header: {
//     title: 'Get in Touch',
//     subtitle: <>We&apos;re here to help! Please fill out this form to let us know how we can assist you.</>,
//   },
//   items: [
//     { title: 'Servicing Areas Around:', description: ['Longview - Hallsville - Marshall'], icon: dynamicIcons.mapPin },
//     {
//       title: 'Contact Information:',
//       description: ['Mobile: (903) 471-1575', 'Mail: contact@easttexaselectronics.com'],
//       icon: dynamicIcons.phoneCall,
//     },
//     {
//       title: 'Standard Working Hours:',
//       description: ['Monday - Friday: 09:00am - 5:00pm', 'Saturday & Sunday: CLOSED'],
//       icon: dynamicIcons.clock,
//     },
//     { title: '24/7 Emergency Service:', description: ['Available for Contract Clients'], icon: dynamicIcons.urgent },
//   ],
//   form: {
//     title: 'Tell Us About Yourself',
//     inputs: FORM_INPUTS,
//     radioBtns: {
//       label: 'What is the reason for your contact?',
//       radios: RADIO_BUTTONS.generalContact,
//     },
//     preferredContact: {
//       label: 'Preferred Method of Contact?',
//       radios: RADIO_BUTTONS.preferredContact,
//     },
//     textarea: {
//       cols: 30,
//       rows: 5,
//       label: 'How May we assist you?',
//       name: 'textarea',
//       placeholder: 'Write your message...',
//     },
//     checkboxes: [{ label: 'Stay in the loop with exclusive updates! Sign up for our newsletter today.', value: '' }],
//     btn: { title: 'Send Message', type: 'submit' },
//   },
// };

// Feature data on Contact page
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Support Center',
    subtitle: 'How would you like to get in touch?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: dynamicIcons.help,
      callToAction: { text: 'Go to FAQ page', href: '/faqs' },
    },
    {
      title: 'Chat with Us (Coming Soon)',
      description: 'Experience instant support with our expertly trained Chat Bot',
      icon: dynamicIcons.messages,
      callToAction: { text: 'Chat Now', href: '/' },
    },
    {
      title: 'Contact Us',
      description: 'Speak to our team today by phone or email',
      icon: dynamicIcons.headset,
      callToAction: { text: 'Contact Information', href: '/contact#contact-form' },
    },
  ],
};

export const form2Contact: ContactUsFormProps = {
  id: 'contact-form-on-contact',
  header: {
    title: 'Support Center',
    subtitle: 'How would you like to get in touch?',
  },
  items: [
    {
      title: 'Give Us a Call',
      callToAction: {
        text: '(903) 471-1575',
        href: URLs.PHONE,
      },
    },
    {
      title: 'Send Us an Email',
      callToAction: {
        text: 'Support@ETXElectronics.com',
        href: URLs.SUPPORT_EMAIL,
      },
      
    },
    {
      title: 'Online Shop',
      callToAction: {
        text: 'Shop.ETXElectronics.com',
        href: URLs.SHOP,
      },
    },
    {
      title: 'Service Area',
      description: 'Free travel within 10 miles of our location; $0.87/mile travel fee beyond.',
    },
  ],
};

export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};