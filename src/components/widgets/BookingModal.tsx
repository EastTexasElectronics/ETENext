import React, { ReactNode } from 'react';
import { IconXboxX, IconInfoCircle } from '@tabler/icons-react';

interface BookingModalProps {
  onClose: () => void;
  children: ReactNode;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center " onClick={onClose}>
      <div
        className="relative bg-[#1A1A1A] w-full md:w-3/5 lg:w-2/5 xl:w-1/3 h-4/5 p-6 rounded-lg shadow-xl overflow-auto flex flex-col "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end space-x-2 top-1/2 transform -translate-y-1/2">
          <div className="group cursor-pointer">
            <IconInfoCircle size={24} className="text-gray-400 hover:text-gray-300" />
            <div className="hidden group-hover:block absolute right-0 z-10 w-64 p-2 pb-3 text-xs text-white bg-black rounded-md shadow-md">
              Creating an account with SetMore allows you to manage your appointments without needing to contact us but
              is NOT required. If you do not want to create an account, please press &quot;Skip login process&quot; when asked
              to create an account.
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-300 ">
            <IconXboxX size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BookingModal;
