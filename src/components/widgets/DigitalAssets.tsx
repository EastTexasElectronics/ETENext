"use client";
import React, { useState, useRef, useEffect } from 'react';
import { IconEdit, IconPlus, IconDeviceFloppy, IconXboxX } from '@tabler/icons-react';

interface DigitalAssetsProps {
  [key: string]: string;
}

interface CustomField {
  title: string;
  value: string;
}

interface InputFieldProps {
  name: string;
  title: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete?: () => void;
  isEditing: boolean;
  titleRef?: React.RefObject<HTMLInputElement>;
  copyToClipboard?: (value: string) => void; // Add this line to include copyToClipboard in the props
}

const initialDetails: DigitalAssetsProps = {
  'Website:': 'https://www.acmecorp.com',
  'Website Provider:': 'https://cms.acmecorp.com',
  'Domain Provider:': 'https://provider.acmecorp.com',
  'Email Provider:': 'contact@acmecorp.com',
};

const DigitalAssets: React.FC = () => {
  const [details, setDetails] = useState<DigitalAssetsProps>(initialDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [customFields, setCustomFields] = useState<{ [key: string]: CustomField }>({});
  const newFieldRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = (value: string) => {
    if (!isEditing) {
      navigator.clipboard.writeText(value);
      alert('Copied to clipboard!');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCustomInputChange = (key: string, value: string) => {
    setCustomFields(prevFields => ({
      ...prevFields,
      [key]: { ...prevFields[key], value },
    }));
  };

  const handleCustomTitleChange = (key: string, title: string) => {
    setCustomFields(prevFields => ({
      ...prevFields,
      [key]: { ...prevFields[key], title },
    }));
  };

  const addCustomField = () => {
    if (Object.keys(customFields).length >= 12) {
      alert("You have reached the maximum number of custom fields allowed (12).");
      return;
    }
    setIsEditing(true);
    const newFieldKey = `customField${Object.keys(customFields).length + 1}`;
    setCustomFields(prevFields => ({
      ...prevFields,
      [newFieldKey]: { title: '', value: '' },
    }));
  };

  const handleDeleteField = (key: string) => {
    const {[key]: _, ...remainingFields} = customFields;
    setCustomFields(remainingFields);
  };

  useEffect(() => {
    if (isEditing && newFieldRef.current) {
      newFieldRef.current.focus();
    }
  }, [customFields, isEditing]);

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="dark:bg-secondary-800 dark:text-white p-4 rounded-lg shadow-lg space-y-4 text-center">
      <h1 className="text-2xl font-bold">Manage Your Digital Assets</h1>
      <p>Here you can manage links to your digital platforms. For security reasons, do not store passwords here.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(details).map((key) => (
          <InputField
            key={key}
            name={key}
            title={key}
            value={details[key]}
            handleChange={handleInputChange}
            isEditing={isEditing}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(customFields).map(([key, { title, value }]) => (
          <InputField
            key={key}
            name={key}
            title={title}
            value={value}
            handleChange={(e) => handleCustomInputChange(key, e.target.value)}
            handleTitleChange={(e) => handleCustomTitleChange(key, e.target.value)}
            handleDelete={() => handleDeleteField(key)}
            isEditing={isEditing}
            titleRef={newFieldRef}
            copyToClipboard={copyToClipboard}
          />
        ))}
      </div>

      <div className="flex justify-between space-x-4">
        {Object.keys(customFields).length < 12 && (
          <button onClick={addCustomField} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <IconPlus className="mr-2" /> Add Field
          </button>
        )}
        <button onClick={toggleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          {isEditing ? <IconDeviceFloppy className="mr-2" /> : <IconEdit className="mr-2" />} {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  name, title, value, handleChange, handleTitleChange, handleDelete, isEditing, titleRef, copyToClipboard
}) => (
  <div className="flex flex-col">
    <input
      type="text"
      name={`${name}_title`}
      value={title}
      onChange={handleTitleChange}
      disabled={!isEditing}
      className={`mt-1 block w-full ${
        isEditing ? 'rounded-md dark:bg-secondary-700 dark:border-gray-600 dark:text-white' : 'bg-transparent border-none shadow-none'
      }`}
      placeholder="Enter field title"
      ref={titleRef || undefined}
      style={{
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: isEditing ? undefined : 'inherit',
        cursor: isEditing ? 'text' : 'default',
      }}
    />
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      onClick={() => copyToClipboard ? copyToClipboard(value) : null}
      disabled={!isEditing}
      className={`mt-1 block w-full ${
        isEditing ? 'rounded-md dark:bg-secondary-700 dark:border-gray-600 dark:text-white' : 'bg-transparent border-none shadow-none'
      }`}
      placeholder="Enter field value"
      title="Click to Copy"  // Tooltip for copy functionality
    />
    {isEditing && handleDelete && (
      <button onClick={handleDelete} className="mt-2 text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded flex items-center justify-center">
        <IconXboxX className="mr-1" /> Delete
      </button>
    )}
  </div>
);

export default DigitalAssets;
