'use client';

// TODO Fix width, it is way too wide.
// TODO Add a close button to the modal
// TODO make input boxes larger and easier to see.
// TODO make it to where each cookie category is a link and goes to the policy page saying what each cookie does.
// TODO fix all styles and make this look professional.
// TODO add spacing under save Settings button. also add tabler IconFloppy for save settings button. it should be to the left of the text centered.

import React, { useState } from 'react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface Props {
  onSave: (settings: CookieSettings) => void;
  initialCookies: CookieSettings;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const CookieSettings: React.FC<Props> = ({ onSave, initialCookies, setShowSettings }) => {
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>(initialCookies);

  // Handle changes in checkbox values
  const handleChange = (type: keyof CookieSettings) => {
    setCookieSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };

  // Save settings and close the modal
  const handleSave = () => {
    onSave(cookieSettings);
    setShowSettings(false);
    localStorage.setItem('cookiePrefs', JSON.stringify(cookieSettings));
  };

  return (
    <div className="fixed inset-x-0 bottom-20 bg-white rounded-t-lg p-6 shadow-xl text-gray-800">
      <h4 className="font-bold text-lg mb-4">Cookie Preferences</h4>
      {(Object.keys(cookieSettings) as (keyof CookieSettings)[]).map((key) => (
        <div key={key} className="flex items-center justify-between mb-2">
          <label className="text-sm">{key.charAt(0).toUpperCase() + key.slice(1)} Cookies</label>
          <input
            type="checkbox"
            checked={cookieSettings[key]}
            onChange={() => handleChange(key)}
            disabled={key === 'necessary'}
            className="toggle toggle-primary"
          />
        </div>
      ))}
      <p>
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
      <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-4">
        Save Settings
      </button>
    </div>
  );
};

export default CookieSettings;
