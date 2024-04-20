// src/components/atoms/BookingButton.tsx

import React, { useState } from 'react';
import Modal from '../widgets/BookingModal'; // Adjust the import path as necessary

const BookingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        aria-label="Book an appointment"
        // Updated classes with Tailwind utility classes only
        className="fixed right-2 top-1/4 z-50 bg-black text-white text-lg font-bold p-2 shadow-lg cursor-pointer"
      >
        {/* Apply arbitrary value for writing-mode */}
        <span className="[writing-mode:vertical-lr]">
          Book Now
        </span>
      </button>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <iframe
            src="https://booking.setmore.com/scheduleappointment/ac3c543d-72b2-488b-a433-d45be62a3a03"
            title="Setmore Booking Page"
            className="w-full h-full border-none"
          ></iframe>
        </Modal>
      )}
    </>
  );
};

export default BookingButton;
