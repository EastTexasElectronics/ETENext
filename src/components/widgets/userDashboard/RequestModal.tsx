import React, { useState } from 'react';
import { IconX, IconCheck, IconBan } from '@tabler/icons-react'; // Assuming these icons are correctly imported

interface RequestModalProps {
  request: {
    id: string;
    employeeName: string;
    startDate: string;
    endDate: string;
    type: string;
  };
  onClose: () => void;
  onApprove: () => void;
  onDeny: () => void;
}

const RequestModal: React.FC<RequestModalProps> = ({ request, onClose, onApprove, onDeny }) => {
  const [note, setNote] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div
        className="relative bg-white text-black dark:bg-slate-800 dark:text-white w-full max-w-lg p-6 rounded-lg shadow-xl overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button onClick={onClose} aria-label="Close" className="p-1 text-gray-400 hover:text-gray-300">
            <IconX size={24} />
          </button>
        </div>

        <h1 className="text-xl font-bold text-center mb-4">Leave Request Details</h1>
        <div className="space-y-2">
          <p>
            <strong>Employee:</strong> {request.employeeName}
          </p>
          <p>
            <strong>ID #:</strong> {request.id}
          </p>
          <p>
            <strong>From:</strong> {request.startDate} <strong>to</strong> {request.endDate}
          </p>
          <p>
            <strong>Type:</strong> {request.type}
          </p>
        </div>

        <textarea
          placeholder="Optional note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-4 p-2 w-full border rounded bg-gray-50 dark:bg-slate-700 dark:border-gray-600 dark:text-white"
        />

        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => {
              onApprove();
              onClose();
            }}
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
          >
            Approve
            <IconCheck className="ml-2" />
          </button>
          <button
            onClick={() => {
              onDeny();
              onClose();
            }}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
          >
            Deny
            <IconBan className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
