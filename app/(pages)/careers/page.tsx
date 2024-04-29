import type { Metadata } from 'next';
import URLs from '~/utils/constants/urls';
import Header from '~/components/widgets/Header';

export const metadata: Metadata = {
  title: 'Careers',
  keywords: [
    'job openings',
    'career opportunities',
    'professional growth',
    'join our team',
    'employment opportunities',
    'career development',
    'work with us',
    'hiring now',
    'vacancies',
    'job listings',
    'career paths',
    'company culture',
    'career advancement',
    'skill enhancement',
    'team roles',
    'open positions',
    'career at Our Company',
    'industry careers',
    'professional hiring',
    'apply now',
  ],
  description: 'Explore career opportunities and join our team to contribute to our success.',
};

const Page = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold mb-4 text-black dark:text-secondary-200">Careers at Our Company</h1>
        <p className="mb-3">
          Join our team of professionals who are dedicated to providing the best services to our clients. Discover how
          you can contribute to our ongoing success and grow your career with us.
        </p>
        <p className="mb-6">View our current job openings and find a role that aligns with your skills and passions:</p>
        <a
          href={URLs.LINKEDIN_JOBS}
          className="bg-blue-800 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          target="_blank"
          rel="noreferrer"
        >
          View jobs on LinkedIn
        </a>
      </div>
    </>
  );
};

export default Page;
