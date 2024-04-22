import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book an Appointment',
};

const Page = () => {
  return (
    <div className="h-screen px-4 sm:px-10 md:px-20">
      <iframe src="https://easttexaselectronics.setmore.com/beta" className="w-full h-full" allowFullScreen />
    </div>
  );
};

export default Page;
