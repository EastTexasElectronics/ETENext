import React from 'react';

const DocumentsTable: React.FC = () => {
  const documents = [
    { title: 'Resume and Applications' },
    { title: 'Signed Documents' },
    { title: 'Tasklist Attachments' },
    { title: 'Workflow Attachments' },
  ];
  return (
    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 sm:block">
      <div className="overflow-hidden border border-gray-200 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((doc, index) => (
              <tr key={index}>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <h2 className="font-medium text-gray-800">{doc.title}</h2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsTable;
