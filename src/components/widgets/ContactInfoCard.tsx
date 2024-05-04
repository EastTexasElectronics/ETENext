import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { IconPhone, IconMail, IconGlobe } from '@tabler/icons-react';

export function ContactInfoCard() {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-secondary-900 bg-primary-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col">
      <Card className="max-w-md w-full mx-auto p-4 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-secondary-950 dark:text-secondary-100">

            {/* TODO Center Me */}
            Contact Info
          </CardTitle>
        </CardHeader>
        <CardContent className="text-secondary-950 dark:text-secondary-100">
          <div className="space-y-4">
            <div className="flex items-center">
              <IconPhone className="text-primary-500 mr-2" />
              <p>
                {' '}
                Phone:{' '}
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
            <div className="flex items-center">
              <IconMail className="text-primary-500 mr-2" />
              <p>
                Email:{' '}
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
            <div className="flex items-center text-wrap">
              <IconGlobe className="text-primary-500 mr-2" />
              <p>
                Online Shop:{' '}
                <Link
                  href="http://www.EastTexasElectronics.com"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 "
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
