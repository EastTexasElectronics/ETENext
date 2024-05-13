import React, { ComponentType, ReactElement, ReactNode, MouseEventHandler, UseFormRegister } from 'react';
import { StaticImageData } from 'next/image';
import { z } from 'zod';

export type Timesheet = {
  id: number;
  clockIn: string;
  clockOut: string | null;
  duration: number;
  firstName: string;  // Assuming these fields are part of your timesheet data
  lastName: string;
};

interface TimesheetTableProps {
  startDate: Date | null;
  endDate: Date | null;
}

type CustomField = {
  title: string;
  value: string;
}

type InputFieldProps = {
  name: string;
  title: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete?: () => void;
  isEditing: boolean;
  titleRef?: React.RefObject<HTMLInputElement>;
  copyToClipboard?: (value: string) => void; // Add this line to include copyToClipboard in the props
}

type CookieSettingsType = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

type BookingModalProps = {
  onClose: () => void;
  children: ReactNode;
}

type ChatMessage = {
  message: string;
  sender: 'Me' | 'Techie Teddy';
}

type DashboardSidebarProps = {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

type LoggerStep = {
  stepNumber: number;
  description: string;
}

/**
 * Defines the data structure for instructions read from a JSON file.
 */
type InstructionsData = {
  role: string;
  objective: string;
  steps: LoggerStep[];
  integration: {
    bookingLink: string;
  };
}

type SVGReact = () => ReactElement;

type ContactUsFormProps = {
  id: string;
  hasBackground?: boolean;
  header?: Header;
  items: Array<Item>;
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type ItemListType = {
  id: string;
  items: Array<Item>;
  iconClass: string;
  titleClass: string;
  descriptionClass: string;
  containerClass: string;
  listItemClass: string;
  defaultIcon?: Icon | undefined;
  actionClass?: string;
};

type IFormInput = z.infer<typeof contactFormSchema>;

export type RadioItemWithLabelProps = {
  register: UseFormRegister<IFormInput>;
  value: string;
  label: string;
};

type CookieSettingsProps = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type TextGenerateEffectProps = {
  words: string[];
  className?: string;
};

type CTAProps = {
  containerClass: string;
  linkClass: string;
};

type DigitalAssetsProps = {
  [key: string]: string; // Allows string indexing
};

type LayoutProps = {
  children: React.ReactNode;
};

type ThemeProvidersProps = {
  children: React.ReactNode;
};

/**
 * Represents properties for company details, supporting dynamic properties via index signature.
 */
type CompanyDetailsProps = {
  name: string;
  website: string;
  websiteDashboard: string;
  domainDashboard: string;
  businessNumber: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  mainContactName: string;
  mainContactPhone: string;
  mainContactEmail: string;
  secondaryContactName: string;
  secondaryContactPhone: string;
  secondaryContactEmail: string;
  [key: string]: string; // Allows string indexing
};

type BookingButtonType = {
  text: string;
  icon?: ComponentType;
  onClick: () => void;
  containerClass?: string;
  buttonClass?: string;
  ariaLabel?: string;
};

type Widget = {
  id?: string;
  hasBackground?: boolean;
};

type WrapperTagProps = Widget & {
  children: ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: ReactNode;
  hasBackground?: boolean;
};

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string | ReactElement;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
  ariaLabel?: string;
  modalOpen?: () => void;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

type Checkbox = {
  label: string;
  value: string;
};

type Radio = {
  label: string;
};

type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

type FormProps = {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
  preferredContact?: RadioBtn;
};

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon | string | SVGReact;
  callToAction?: CallToActionType;
};

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

type ItemGrid = {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
};

type Timeline = {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

type Team = {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
  containerClass?: string;
  imageClass?: string;
  panelClass?: string;
  nameClass?: string;
  occupationClass?: string;
  itemsClass?: string;
};

type Testimonial = {
  testimonial?: string;
  startSlice?: number;
  endSlice?: number;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  name?: string;
  job?: string;
  image?: Image;
  href?: string;
  containerClass?: string;
  panelClass?: string;
  imageClass?: string;
  dataClass?: string;
  nameJobClass?: string;
  nameClass?: string;
  jobClass?: string;
  testimonialClass?: string;
};

type Link = {
  label: string;
  href?: string;
  icon?: Icon;
  links?: Array<Link>; // This is the new recursive reference for nested links.
  ariaLabel?: string;
};

type Price = {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToActionType;
  hasRibbon?: boolean;
  ribbonTitle?: string;
};

type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type Tab = {
  link?: Link;
  items: Array<Item>;
};

type Dropdown = {
  options: Array<Tab>;
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type WindowSize = {
  width: number;
  height: number;
};

type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string | ReactElement;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
  image?: Image;
};

type FAQsProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToActionType;
};

type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type CallToActionProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

type NewsletterProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: 1 | 2 | 3;
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type ContentProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
};

type StepsProps = Widget & {
  header?: Header;
  items: Array<Item>;
  isImageDisplayed?: boolean;
  image?: Image;
  isReversed?: boolean;
};

type TeamProps = Widget & {
  header?: Header;
  teams: Array<Team>;
};

type AnnouncementProps = {
  title: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
};

type TestimonialsProps = Widget & {
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToActionType;
};

type PricingProps = Widget & {
  header?: Header;
  prices: Array<Price>;
};

type ComparisonProps = Widget & {
  header?: Header;
  columns: Array<Column>;
};

type StatsProps = Widget & {
  items: Array<Item>;
};

type SocialProofProps = Widget & {
  images: Array<Image>;
};

type ContactProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

type HeaderProps = {
  links?: Array<Link>;
  actions?: Array<CallToActionType>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};

type CPortalHeaderProps = {
  links?: Array<Link>;
  actions?: Array<CallToActionType>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};


