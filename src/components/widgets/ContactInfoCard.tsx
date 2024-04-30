import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

export function ContactInfoCard() {
  return (
    <Card className="w-1/4 bg-white dark:bg-secondary-500 p-4 shadow rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-secondary-950 dark:text-secondary-100">Contact Info</CardTitle>
      </CardHeader>
      <CardContent className="text-secondary-950 dark:text-secondary-100">
        <div className="space-y-2">
          <p>Phone: (903) 471-1575</p>
          <p>Email: Contact@EastTexasElectronics.com</p>
          <p>
            eCommerce Website:
            <Link
              href="http://www.EastTexasElectronics.com"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              www.EastTexasElectronics.com
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
