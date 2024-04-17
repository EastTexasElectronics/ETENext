const SITE = require('./src/config.js').SITE;

/**
 * Configuration options for Next.js.
 * @type {import('next').NextConfig}
 */
module.exports = {
  // Enable React strict mode for better development practices.
  reactStrictMode: true,

  // Enable trailing slashes for all generated routes.
  trailingSlash: SITE.trailingSlash,

  // Set base path if SITE.basePathname is not root.
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  // Enable SWC minification for faster build times.
  swcMinify: true,

  // Disable the X-Powered-By header for improved security.
  poweredByHeader: false,

  // Configuration for handling images.
  // YOU MUST ADD YOUR DOMAIN TO THE `remotePatterns` ARRAY. This is a security measure. See https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    // Define remote patterns for image optimization.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  },
};
