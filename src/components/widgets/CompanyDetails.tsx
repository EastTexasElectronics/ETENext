import React, { useState } from 'react';
import { CompanyDetailsProps } from '~/shared/types';
import { IconInfoCircle, IconEdit } from '@tabler/icons-react'; 
// Import appropriate icons

const initialDetails: CompanyDetailsProps = {
  name: 'Acme Corporation',
  website: 'https://www.acmecorp.com',
  websiteDashboard: 'https://dashboard.acmecorp.com',
  domainDashboard: 'https://domains.acmecorp.com',
  businessNumber: '123-456-7890',
  street: '123 Business Rd.',
  city: 'Business City',
  state: 'BS',
  zip: '12345',
  mainContactName: 'Main Contact Name',
  mainContactPhone: '123-456-7890',
  mainContactEmail: 'abc@fake.com',
  secondaryContactName: 'Secondary Contact Name',
  secondaryContactPhone: '123-456-7890',
  secondaryContactEmail: 'abc@fake.com',
};

const CompanyDetails: React.FC = () => {
  const [details, setDetails] = useState<CompanyDetailsProps>(initialDetails);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  // Define which keys belong to company and contact information for rendering separation
  const companyKeys = ['name', 'website', 'websiteDashboard', 'domainDashboard', 'businessNumber', 'street', 'city', 'state', 'zip'];
  const contactKeys = ['mainContactName', 'mainContactPhone', 'mainContactEmail', 'secondaryContactName', 'secondaryContactPhone', 'secondaryContactEmail'];

  return (
    <div className="dark:bg-slate-800 dark:text-white p-4 rounded-lg shadow-lg space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold shadow">Company and Contact Details</h1>
        <button onClick={toggleEdit} className="p-2">
          <IconEdit />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companyKeys.map((key) => (
          <InputField key={key} name={key} value={details[key]} handleChange={handleInputChange} isEditing={isEditing} />
        ))}
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactKeys.map((key) => (
          <InputField key={key} name={key} value={details[key]} handleChange={handleInputChange} isEditing={isEditing} />
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={toggleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

// InputField component for rendering each input
interface InputFieldProps {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ name, value, handleChange, isEditing }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="block text-sm font-medium capitalize">
      {name.replace(/([A-Z])/g, ' $1').trim()}
      {name.includes('Dashboard') && (
        <span className="inline-block ml-2">
          <IconInfoCircle />
        </span>
      )}
    </label>
    <input
      type={name.includes('website') || name.includes('Dashboard') ? 'url' : 'text'}
      name={name}
      id={name}
      value={value}
      onChange={handleChange}
      disabled={!isEditing}
      className="mt-1 block w-full rounded-md dark:bg-slate-700 dark:border-gray-600 dark:text-white"
      placeholder={name}
    />
  </div>
);

export default CompanyDetails;