// CookieSettings.tsx
'use client';

import React, { useState } from 'react';
import { IconDeviceFloppy, IconXboxX } from '@tabler/icons-react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface Props {
  onSave: (settings: CookieSettings) => void;
  onAccept: () => void;
  initialCookies: CookieSettings;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const CookieSettings: React.FC<Props> = ({ onSave, onAccept, initialCookies, setShowSettings }) => {
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>(initialCookies);

  // Handle changes in checkbox values
  const handleChange = (type: keyof CookieSettings) => {
    setCookieSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };

  // Save settings and close the modal, also hide the banner
  const handleSaveAndAccept = () => {
    onSave(cookieSettings);
    localStorage.setItem('cookiePrefs', JSON.stringify(cookieSettings));
    setShowSettings(false);
    onAccept(); // This will also hide the consent banner
  };

  return (
    <div className="fixed inset-x-0 bottom-20 w-11/12 max-w-4xl mx-auto bg-white rounded-t-lg p-6 shadow-xl text-gray-800">
      <button onClick={() => setShowSettings(false)} className="absolute top-3 right-3 text-gray-800 hover:text-black">
        <IconXboxX size={24} /> {/* Close icon */}
      </button>
      <h4 className="font-bold text-lg mb-4">Cookie Preferences</h4>
      {(Object.keys(cookieSettings) as (keyof CookieSettings)[]).map((key) => (
        <div key={key} className="flex items-center justify-between mb-2">
          <a href={`/cookie-policy#${key}`} className="text-sm flex-grow">
            {key.charAt(0).toUpperCase() + key.slice(1)} Cookies
          </a>
          <input
            type="checkbox"
            checked={cookieSettings[key]}
            onChange={() => handleChange(key)}
            disabled={key === 'necessary'}
            className="toggle toggle-lg toggle-primary"
          />
        </div>
      ))}
      <p className="my-4">
        Customize how we use cookies to improve your experience. For more details, visit our{' '}
        <a href="/cookie-policy" className="underline">
          Cookie Policy
        </a>{' '}
        and{' '}
        <a href="/terms-and-conditions" className="underline">
          Terms and Conditions
        </a>
        .
      </p>
      <button
        onClick={handleSaveAndAccept}
        className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-4 flex items-center justify-center"
      >
        <IconDeviceFloppy size={20} className="mr-2" /> {/* Save icon */}
        Save and Accept
      </button>
    </div>
  );
};

export default CookieSettings;
