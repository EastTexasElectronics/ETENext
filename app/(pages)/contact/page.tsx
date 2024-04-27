import type { Metadata } from 'next';
import Header from '~/components/widgets/Header';

import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';
import { contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Page = () => {
  return (
    <>
      <Header />
      <Features2 {...features2Contact} />
      <Contact {...contact2Contact} />
    </>
  );
};

export default Page;
