import type { Metadata } from 'next';
import Header from '~/components/widgets/Header';
import ContactUsForm from '~/components/widgets/ContactForm';
import Features2 from '~/components/widgets/Features2';
import { features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Page = () => {
  return (
    <>
      <Header />
      <Features2 {...features2Contact} />
      <ContactUsForm />
    </>
  );
};

export default Page;
