import type { Metadata } from 'next';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';


import {
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,

} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About Us`,
  description: `We are a team of professionals who are dedicated to providing the best services to our clients.`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      {/* Mission */}
      <Features4 {...featuresFourAbout} />
      {/* Values */}
      <Features4 {...featuresFourAboutTwo} />
      {/* Culture */}
      <Features3 {...features3About} />
    </>
  );
};

export default Page;
