import URLs from '~/utils/constants/urls';

const LearnMoreButton: React.FC = () => {
  return (
    <>
      <button aria-label="Learn More Button" className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-fuchsia-700 rounded-lg" />
        <div className="px-8 py-2  bg-secondary-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          <a aria-label="Link to about us page." href={URLs.ABOUT}>
            Learn More
          </a>
        </div>
      </button>
    </>
  );
};

export default LearnMoreButton;
