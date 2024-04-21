"use client";
import React, { useState } from 'react';
import Modal from '../widgets/BookingModal';
import URLs from '~/constants/urls'


const BookingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        aria-label="Book an appointment"
        className="fixed right-0 top-1/2 z-50 bg-primary-600 text-white font-bold py-2 px-4 transform -translate-y-1/2 shadow-lg cursor-pointer"
      >
        {/* Apply arbitrary value for writing-mode */}
        <span className="[writing-mode:vertical-lr] bg-primary-600 ">
          Book Now
        </span>
      </button>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <iframe
            src= {URLs.APPOINTMENTS}
            title="Setmore Booking Page"
            className="w-full h-full border-none"
          ></iframe>
        </Modal>
      )}
    </>
  );
};

export default BookingButton;
