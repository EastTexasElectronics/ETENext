import React, { useState } from 'react';
import RequestModal from './RequestModal';

interface LeaveRequest {
  id: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  type: string;
  status: 'Pending' | 'Approved' | 'Denied'; // Added a status field to the leave request
}

const statusStyles = {
  Pending: 'bg-yellow-500 text-yellow-900',
  Approved: 'bg-green-500 text-green-900',
  Denied: 'bg-red-500 text-red-900',
};

// Example data with statuses
const initialRequests: LeaveRequest[] = [
  {
    id: 'req1',
    employeeName: 'John Doe',
    startDate: '2023-10-10',
    endDate: '2023-10-15',
    type: 'Vacation',
    status: 'Pending',
  },
  {
    id: 'req2',
    employeeName: 'Jane Smith',
    startDate: '2023-11-01',
    endDate: '2023-11-05',
    type: 'Sick Leave',
    status: 'Approved',
  },
];

const LeaveRequestFeed: React.FC = () => {
  const [requests, setRequests] = useState<LeaveRequest[]>(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(null);

  const updateRequestStatus = (id: string, status: LeaveRequest['status']) => {
    setRequests((reqs) => reqs.map((req) => (req.id === id ? { ...req, status } : req)));
  };

  return (
    <div className="flex justify-between p-4">
      {['Pending', 'Approved', 'Denied'].map(status => (
        <div key={status} className={`w-1/3 flex flex-col items-center p-2`}>
          <h2 className="text-xl font-bold uppercase mb-4">{status}</h2>
          {requests
            .filter((req) => req.status === status)
            .map((request) => (
              <div
                key={request.id}
                className={`cursor-pointer text-center p-2 w-full rounded-md mb-2 ${statusStyles[status]} border`}
                onClick={() => setSelectedRequest(request)}
              >
                {request.employeeName}
              </div>
            ))}
        </div>
      ))}
      {selectedRequest && (
        <RequestModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          onApprove={() => updateRequestStatus(selectedRequest.id, 'Approved')}
          onDeny={() => updateRequestStatus(selectedRequest.id, 'Denied')}
        />
      )}
    </div>
  );
};

export default LeaveRequestFeed;
