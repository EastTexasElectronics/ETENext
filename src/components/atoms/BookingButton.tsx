import URLs from '~/utils/constants/urls';

const BookingButton: React.FC = () => {
  return (
    <>
      <button aria-label="Book an Appointment Button" className="p-[3px] relative overflow-hidden rounded-lg bg-black group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-fuchsia-700 rounded-lg group-hover:bg-transparent transition duration-200" />
        <div className="px-8 py-2 relative transition duration-200 text-white group-hover:bg-secondary-900 rounded-[6px] ">
          <a aria-label="Link to Appointments page." href={URLs.APPOINTMENT}>Book an Appointment</a>
        </div>
      </button>
    </>
  );
};

export default BookingButton;
