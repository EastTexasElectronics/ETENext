// This file contains common text strings used throughout the application.

// Usage:
// This file exports an object named `Texts` that contains all the text strings used in the application.
// You can import this object in any component where you need to use these strings.

// Example:
// import Texts from './constantTexts';
// function Welcome() {
//   return <h1>{Texts.WELCOME_MESSAGE}</h1>;
// }

// Modifying Text Strings:
// To change the text of any string, simply modify the value corresponding to its key.
// For example, to change the welcome message, find `WELCOME_MESSAGE` key and update its value.

// Adding New Text Strings:
// To add new text strings, append them to the `Texts` object with a unique key and its text value.
// Ensure the key is descriptive enough to be easily identifiable where it is used.

const Texts = {
  GENERAL_INQUIRIES: 'General Inquiries',
  SERVICE_INQUIRIES: 'Service Inquiries',
  PRODUCT_INQUIRIES: 'Product Inquiries',
  OTHER_INQUIRIES: 'Other',
  CONTACT_US: 'Contact Us',
  SEND_MESSAGE: 'Send Message',
  WRITE_MESSAGE: 'Write your message...',
  LEARN_MORE: 'Learn More',
  VIEW_MORE: 'View More',
  SUBMIT: 'Submit',
  CANCEL: 'Cancel',
  CONFIRM: 'Confirm',
  DELETE: 'Delete',
  SAVE_CHANGES: 'Save Changes',
  VIEW_JOBS: 'View Jobs',
  READ_MORE: 'Read More',
  PRIVACY_POLICY: 'Privacy Policy',
  TERMS_AND_CONDITIONS: 'Terms and Conditions',
  COPYRIGHT_NOTICE: `Copyright © ${new Date().getFullYear()} East Texas Electronics LLC. All rights reserved.`,
  WELCOME_MESSAGE: 'Welcome to East Texas Electronics!',
  ABOUT_US: 'About Us',
  OUR_TEAM: 'Our Team',
  FAQ: 'Frequently Asked Questions',
  HELP_CENTER: 'Help Center',
  LOCATIONS: 'Our Locations',
  NEWSLETTER_SIGNUP: 'Sign up for our Newsletter',
  FOLLOW_US: 'Follow Us',
  CONTACT_SUPPORT: 'Contact Support',
  DOWNLOAD_APP: 'Download Our App',
  RETURN_POLICY: 'Return Policy',
  SHIPPING_INFO: 'Shipping Information',
  CUSTOMER_REVIEWS: 'Customer Reviews',
  FEATURED_PRODUCTS: 'Featured Products',
  NEW_ARRIVALS: 'New Arrivals',
  BEST_SELLERS: 'Best Sellers',
  ERROR_MESSAGE: {
    FORM_ERROR: 'There was an error submitting the form. Please try again.',
    NETWORK_ERROR: 'Network error. Please check your connection and try again.',
    PAGE_NOT_FOUND: 'Page not found. Please check the URL and try again.',
  },
  SUCCESS_MESSAGE: {
    FORM_SUBMITTED: 'Form submitted successfully!',
    DATA_SAVED: 'Data saved successfully!',
  },
};

export default Texts;
