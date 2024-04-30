import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

export function ServiceAreaMap() {
  return (
    <Card className="w-1/4 bg-white dark:bg-secondary-500 p-4 shadow rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-secondary-950 dark:text-secondary-100">Service Area</CardTitle>
      </CardHeader>
      <CardContent>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=12SLhv5MuY04w72mg-AOD7-Zev9VXnAE&ehbc=2E312F"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </CardContent>
    </Card>
  );
}
