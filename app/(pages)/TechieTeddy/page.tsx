import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us`,
  description: `We are a team of professionals who are dedicated to providing the best services to our clients.`,
};

const Page = () => {
  return (
    <>
      <script type='module'
              src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
      <zapier-interfaces-chatbot-embed is-popup='false' chatbot-id='clvwqfy4r000c10bmjp0yl7ir' height='100%'
                                       width='100%'></zapier-interfaces-chatbot-embed>
    </>
  );
};

export default Page;
