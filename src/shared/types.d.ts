// TODO Find and remove unused types and declarations

/**
 * Type definitions for various UI components and data structures used across the application.
 */
import { ComponentType, ReactElement, ReactNode, MouseEventHandler, SVGProps } from 'react';
import { StaticImageData } from 'next/image';

/** Generic icon component type, widely used for SVG icons across UI components. */
type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

/** Base properties for widgets, which can optionally have a background. */
type Widget = {
  id?: string;
  hasBackground?: boolean;
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

// TODO see if this gets used if not remove it
type NavLink = {
  label: string;
  href: string;
  icon?: React.ComponentType;
  links?: NavLink[];
};

type CallToActionProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
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

type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

/**
 * Props for components that act as containers for other elements.
 * Supports optional CSS class for styling the container.
 */
type WrapperTagProps = Widget & {
  children: ReactNode;
  containerClass?: string;
};

/** Props for components that may include children elements and a background option. */
type BackgroundProps = {
  children?: ReactNode;
  hasBackground?: boolean;
};

/** Represents header information, including optional alignment. */
type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

/** Props for a headline component, potentially including custom class names for CSS styling. */
type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

/**
 * Type for call to action components, possibly including modal trigger and accessibility features.
 * Used in buttons or links that trigger major actions.
 */
type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
  ariaLabel?: string;
  modalOpen?: () => void;
};

/**
 * Type definition for elements that can be either a link or a button,
 * with optional styles and icon properties.
 */
type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

/** Standard button properties for forms and interactions. */
type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

/** Input field properties, supporting HTML5 autocomplete attributes. */
type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

/** Properties for textarea elements, with optional labels and placeholder text. */
type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

/** Checkbox element properties, including label and value. */
type Checkbox = {
  label: string;
  value: string;
};

/** Radio button properties, primarily consisting of a label. */
type Radio = {
  label: string;
};

/** Container for a group of radio buttons, optionally with a label. */
type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

/** Represents a small form element that may include an icon. */
type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

/**
 * Defines properties for comprehensive forms,
 * including input fields, radio buttons, checkboxes, and action buttons.
 */
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

/** Properties for image elements, supporting both static and dynamic image sources. */
type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

/** Generic item type that can represent various types of content and actions. */
type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon | string;
  callToAction?: CallToActionType;
};

/** Detailed contact properties, supporting secondary contacts and dynamic properties. */
type ContactDetailProps = {
  mainContactName: string;
  mainContactPhone: string;
  mainContactEmail: string;
  secondaryContactName: string;
  secondaryContactPhone: string;
  secondaryContactEmail: string;
  [key: string]: string;
};

/** Company information properties, useful for displaying core business details dynamically. */
type CompanyInfoProps = {
  name: string;
  website: string;
  websiteDashboard: string;
  domainDashboard: string;
  businessNumber: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  [key: string]: string;
};

/**
 * Price details for items, often used in commercial applications to display pricing information.
 */
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

/**
 * Column layout for structured content, commonly used in multi-column layouts like dashboards or comparative displays.
 */
type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

/**
 * Links container, which can include multiple links and texts, often used in footers or menu lists.
 */
type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

/**
 * Represents a tab structure, combining links and items for tabbed interfaces.
 */
type Tab = {
  link?: Link;
  items: Array<Item>;
};

/**
 * Dropdown menu properties, encapsulating options as tabs and handling state for active tab selection.
 */
type Dropdown = {
  options: Array<Tab>;
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

/**
 * Toggle menu properties, typically used for responsive or mobile menu implementations.
 */
type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

/**
 * Window size properties, used for responsive designs or components that adjust based on window dimensions.
 */
type WindowSize = {
  width: number;
  height: number;
};

/**
 * Hero component properties, used for prominent display areas often at the top of web pages.
 */
type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
  image?: Image;
};

/**
 * Frequently Asked Questions (FAQ) component, used to display questions and answers in an organized format.
 */
type FAQsProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToActionType;
};

/**
 * Newsletter component properties, used for email subscription sections.
 */
type NewsletterProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

/**
 * Features component properties, used to highlight different features or services.
 */
type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: 1 | 2 | 3;
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

/**
 * Content properties, used for sections that primarily display text content.
 */
type ContentProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
};

/**
 * Steps properties, used for displaying a series of steps or processes.
 */
type StepsProps = Widget & {
  header?: Header;
  items: Array<Item>;
  isImageDisplayed?: boolean;
  image?: Image;
  isReversed?: boolean;
};

/**
 * Team properties, used to display team member information within a grouped widget.
 */
type TeamProps = Widget & {
  header?: Header;
  teams: Array<Team>;
};

/**
 * Announcement properties, used for displaying important or urgent messages.
 */
type AnnouncementProps = {
  title: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
};

/**
 * Testimonials properties, used for displaying customer or client testimonials.
 */
type TestimonialsProps = Widget & {
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToActionType;
};

/**
 * Pricing properties, used for displaying pricing options in a structured format.
 */
type PricingProps = Widget & {
  header?: Header;
  prices: Array<Price>;
};

/**
 * Comparison properties, used for comparative displays of products or services.
 */
type ComparisonProps = Widget & {
  header?: Header;
  columns: Array<Column>;
};

/**
 * Statistics properties, used for displaying numerical data or statistics.
 */
type StatsProps = Widget & {
  items: Array<Item>;
};

/**
 * Social proof properties, used to display a collection of images or logos to build trust.
 */
type SocialProofProps = Widget & {
  images: Array<Image>;
};

/**
 * Contact properties, used for contact forms or contact information displays.
 */
type ContactProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
};

/**
 * Footer properties, used for the bottom part of web pages to include links, social media icons, and copyrights.
 */
type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

/**
 * Header properties, used for the top part of web pages, including navigation links and optional actions.
 */
type HeaderProps = {
  links?: Array<Link>;
  actions?: Array<CallToActionType>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};

/** File type declarations for static image assets. */
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


type Widget = {
  id?: string;
  /** Does it have a background? */
  hasBackground?: boolean;
};

type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
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
  icon?: Icon;
  callToAction?: CallToActionType;
};

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
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
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

type MenuLink = Link & {
  links?: Array<Link>;
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
  options: Tab[];
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

// WIDGETS
type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
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

type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  /** How many columns should it have? */
  columns?: 1 | 2 | 3;
  /** Do you want the image to be displayed? */
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
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  /** Do you want to reverse the widget? */
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
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};