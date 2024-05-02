import type { Metadata } from 'next';
import Header from '~/components/widgets/Header';
import { ContactForm } from '~/components/widgets/SignInForm';
import Features2 from '~/components/widgets/Features2';
import { features2Contact } from '~/shared/data/pages/contact.data';
import { ContactInfoCard } from '~/components/widgets/ContactInfoCard';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Page = () => {
  return (
    <>
      <Header />
      <Features2 {...features2Contact} />
      <ContactInfoCard />
      <ContactForm />
    </>
  );
};

export default Page;
