'use client';

import React, { useState, memo } from 'react';
import Modal from '../widgets/modals/BookingModal';
import URLs from '~/constants/urls';

// Define the BookingButton component using React Functional Component type
const BookingButton: React.FC = () => {
  // State hook for managing modal open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the isOpen state
  const toggleModal = () => setIsOpen(!isOpen);

  // Render method returning JSX
  return (
    <>
      {/* Button element that triggers the modal open/close */}
      <button
        onClick={toggleModal} // Event handler for click event to toggle modal visibility
        aria-label="Book an appointment" // Accessibility label for screen readers
        className="fixed right-0 top-1/2 z-50 p-2 bg-primary-600 hover:bg-primary-500 text-white font-bold pt-1.5 pb-1 pl-0.5 transform -translate-y-1/2 shadow-lg cursor-pointer rounded-tl-lg rounded-bl-lg text-xs transition duration-300 ease-in-out hover:scale-105"
      >
        {/* Span element for button text, with custom styling */}
        <span className="[writing-mode:vertical-lr] bg-primary-600">Book Appointment</span>
      </button>

      {/* Conditional rendering of Modal based on isOpen state */}
      {isOpen && (
        <Modal onClose={toggleModal}> {/* Modal component with close handler */}
          {/* Iframe for embedding an external booking page, styled to fill Modal */}
          <iframe src={URLs.APPOINTMENT} title="Setmore Booking Page" className="w-full h-full border-none"></iframe>
        </Modal>
      )}
    </>
  );
};

// Using React.memo to optimize the component by preventing unnecessary re-renders https://react.dev/reference/react/memo
const MemoizedBookingButton = memo(BookingButton);

// Export the memoized component to be used elsewhere in the application
export default MemoizedBookingButton;
