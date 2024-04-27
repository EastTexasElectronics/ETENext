

export const metadata: Metadata = {
    category: 'technology',
    assets: ['https://EastTexasElectronics.com/Public_Assets'],
    generator: 'Next.js',
    applicationName: 'East Texas Electronics Support',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'IT Support',
      'Computer Repair',
      'Network Support',
      'Web Design',
      'SEO',
      'Digital Marketing',
      'East Texas',
      'Tyler',
      'Longview',
      'Marshall',
      'Henderson',
      'Kilgore',
    ],
    authors: [{ name: 'Robert Havelaar', url: 'https://www.linkedin.com/in/robert-havelaar/' }],
    creator: 'Robert Havelaar',
    publisher: 'East Texas Electronics, LLC.',
    title: {
      template: `${SITE?.name ? `%s — ${SITE.name}` : 'East Texas Electronics'}`,
      default: SITE?.title || 'East Texas Electronics',
    },
    description:
      SITE?.description ||
      'East Texas Electronics provides IT Support, Computer Repair, Network Support, Web Design, SEO, and Digital Marketing services to East Texas.',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };