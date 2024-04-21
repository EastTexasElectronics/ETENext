// This file contains common URLs used throughout the application.

// Usage:
// This file exports an object named `URLs` that contains all the URLs used across the application.
// You can import this object in any component where you need to reference these URLs.

// Example:
// import URLs from './URLs';
// function Navigation() {
//   return <a href={URLs.HOME_PAGE}>Home</a>;
// }

// Modifying URLs:
// To change any URL, simply modify the value associated with its key.
// For example, to update the contact us page URL, locate the `CONTACT_US` key and modify its value.

// Adding New URLs:
// To add new URLs, append them to the `URLs` object with a unique key and its URL value.
// Make sure the key is self-explanatory to facilitate its identification throughout the application.

const URLs = {
    // Navigation Links
    CONTACT_US: '/contact',
    FAQ_PAGE: '/faqs',
    HOME_PAGE: '/',
    ABOUT_US: '/about',
    SERVICES: '/services',
    BLOG: '/blog',
    CAREERS: '/careers',
    SHOP: '/shop',
    PORTFOLIO: '/portfolio',
    TESTIMONIALS: '/testimonials',
    SITE_MAP: '/site-map',

    // Social Profiles
    FACEBOOK: 'https://www.facebook.com/',
    TWITTER: 'https://twitter.com/',
    INSTAGRAM: 'https://www.instagram.com/',
    LINKEDIN: 'https://www.linkedin.com/',
    YOUTUBE: 'https://www.youtube.com/',
    GITHUB: 'https://www.github.com/',
    PINTEREST: 'https://www.pinterest.com/',
    SNAPCHAT: 'https://www.snapchat.com/',
    TIKTOK: 'https://www.tiktok.com/',
    LINKEDIN_JOBS: 'https://www.linkedin.com/',

    // Store Links
    AMAZON: 'https://www.amazon.com/',
    EBAY: 'https://www.ebay.com/',
    WALMART: 'https://www.walmart.com/',
    TARGET: 'https://www.target.com/',
    PINTERESTSHOP: 'https://www.pinterest.com/shop',
    ETSY: 'https://www.etsy.com/',

    // Legal Links
    PRIVACY_POLICY_COMPANY: '/privacy-policy',
    TERMS_AND_CONDITIONS_COMPANY: '/terms-and-conditions',
    RETURN_POLICY_COMPANY: '/return-policy',
    SHIPPING_INFO_COMPANY: '/shipping-info',

    // Other Links
    HELP_CENTER: '/help-center',
    LOCATIONS: '/locations',
    NEWSLETTER_SIGNUP: '/newsletter-signup',
    DOWNLOAD_APP: '/download-app',
    CUSTOMER_REVIEWS: '/customer-reviews',
    APPOINTMENTS: 'https://easttexaselectronics.setmore.com/appt',

    // Images
    BLUE_WHITE_LOGO: 'https://imagedelivery.net/AeoYzlkbZrI9BgyLTuPWOw/ee73c571-1ae3-4f9a-ae0f-168657597a00/public',
};

export default URLs;

