import type { Metadata } from 'next';

import Contact from '~/components/widgets/forms/Contact';
import Features2 from '~/components/widgets/features/Features2';
import { contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Page = () => {
  return (
    <>
      <Features2 {...features2Contact} />
      <Contact {...contact2Contact} />
    </>
  );
};

export default Page;
