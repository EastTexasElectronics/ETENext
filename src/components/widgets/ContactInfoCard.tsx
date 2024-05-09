import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { IconPhone, IconMail, IconGlobe } from '@tabler/icons-react';

/**
 * Renders a card with contact information including phone, email, and website.
 *
 * @component
 * @returns {JSX.Element} The contact information card with styled components.
 */
export function ContactInfoCard() {
  return (
    // Outer wrapper for the contact info card with responsive design
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-secondary-900 bg-primary-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col">
      {/* Card component with maximum width and shadow styling */}
      <Card className="max-w-md w-full mx-auto p-4 shadow-lg rounded-xl">
        {/* CardHeader component for title encapsulation */}
        <CardHeader>
          {/* CardTitle component for displaying contact card title */}
          <CardTitle className="text-xl font-semibold text-secondary-950 dark:text-secondary-100">
            {/* Center alignment of the title is TODO */}
            Contact Info
          </CardTitle>
        </CardHeader>
        {/* CardContent for the details inside the card */}
        <CardContent className="text-secondary-950 dark:text-secondary-100">
          {/* Container for contact details with vertical spacing */}
          <div className="space-y-4">
            {/* Container for phone information */}
            <div className="flex items-center">
              <IconPhone className="text-primary-500 mr-2" />
              <p>
                Phone:{' '}
                {/* Link to phone number */}
                <a
                  href="phone:+19034711575"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 break-words"
                >
                  (903)-471-1575
                </a>
              </p>
            </div>
            {/* Container for email information */}
            <div className="flex items-center">
              <IconMail className="text-primary-500 mr-2" />
              <p>
                Email:{' '}
                {/* Mailto link for email */}
                <a
                  href="mailto:contact@EastTexasElectronics.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 break-words"
                >
                  Contact@EastTexasElectronics.com
                </a>
              </p>
            </div>
            {/* Container for website information */}
            <div className="flex items-center text-wrap">
              <IconGlobe className="text-primary-500 mr-2" />
              <p>
                Online Shop:{' '}
                {/* Link component for internal navigation */}
                <Link
                  href="http://www.EastTexasElectronics.com"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  EastTexasElectronics.com
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
