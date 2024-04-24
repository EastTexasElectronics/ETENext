// React specific imports for type definitions
import { ComponentType, ReactElement, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

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

/**
 * Defines properties for a button component with optional icon and accessibility features.
 */
type BookingButtonType = {
  text: string;
  icon?: ComponentType;
  onClick: () => void;
  containerClass?: string;
  buttonClass?: string;
  ariaLabel?: string;
};

/**
 * Base interface for components that may optionally have a background.
 */
type Widget = {
  id?: string;
  hasBackground?: boolean;
};

/**
 * Props for components that act as containers for other elements, supporting optional classes.
 */
type WrapperTagProps = Widget & {
  children: ReactNode;
  containerClass?: string;
};

/**
 * Props for components that may or may not contain children and a background.
 */
type BackgroundProps = {
  children?: ReactNode;
  hasBackground?: boolean;
};

/**
 * Type definition for SVG icons in React components.
 */
type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

/**
 * Represents header information with optional alignment.
 */
type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

/**
 * Props for a headline component with optional custom class names for styling.
 */
type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

/**
 * Type for call to action components with optional modal trigger and accessibility features.
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
 * Defines link or button elements with optional styling and icon properties.
 */
type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

/**
 * Represents a basic button component in forms.
 */
type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

/**
 * Defines properties for input fields with support for HTML5 autocomplete.
 */
type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

/**
 * Props for textarea elements with optional labels.
 */
type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

/**
 * Represents a checkbox element with label and value.
 */
type Checkbox = {
  label: string;
  value: string;
};

/**
 * Defines a radio button with a label.
 */
type Radio = {
  label: string;
};

/**
 * Container for a group of radio buttons with optional label.
 */
type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

/**
 * Represents a small form element that may include an icon.
 */
type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

/**
 * Defines form properties including input fields, radio buttons, checkboxes, and buttons.
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

/**
 * Type definition for image elements, supporting both static and dynamic images.
 */
type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

/**
 * Generic item definition that can represent various types of content and actions.
 */
type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon | string;
  callToAction?: CallToActionType;
};

/**
 * File type declarations for static image assets.
 */
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
