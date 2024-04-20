// src/components/widgets/BookingModal.tsx

import React, { ReactNode } from 'react';

interface BookingModalProps {
  onClose: () => void;
  children: ReactNode;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose, children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '80%',
          height: '80%',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()} // Prevents modal close when clicking inside the modal
      >
        {children}
      </div>
    </div>
  );
};

export default BookingModal;
