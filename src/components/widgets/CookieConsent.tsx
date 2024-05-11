// TODO Implement logic with the backend to store user preferences and serve cookies occordingly
'use client';

import React, { useState, useEffect } from 'react';
import CookieSettings from '../common/CookieSettings';
import { CookieSettingsType } from '~/shared/types'

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [cookies, setCookies] = useState<CookieSettingsType>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiePrefs = localStorage.getItem('cookiePrefs');
    if (cookiePrefs) {
      setCookies(JSON.parse(cookiePrefs));
      setShowBanner(false); // Hide banner if preferences are already set
    } else {
      setShowBanner(true); // Show banner if no preferences are stored
    }
  }, []);

  const handleAccept = () => {
    const defaultPrefs: CookieSettingsType = { necessary: true, analytics: true, marketing: true };
    setCookies(defaultPrefs);
    localStorage.setItem('cookiePrefs', JSON.stringify(defaultPrefs));
    setShowBanner(false);
  };

  const handleSaveAndAccept = (newSettings: CookieSettingsType) => {
    setCookies(newSettings);
    localStorage.setItem('cookiePrefs', JSON.stringify(newSettings));
    setShowSettings(false);
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4 text-center z-50">
          <p>
            We use cookies to improve your experience. By continuing, you agree to our{' '}
            <a href="/cookie-policy" className="underline">
              cookie policy
            </a>
            .
          </p>
          <button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 m-2">
            Accept All
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="bg-gray-300 text-gray-800 hover:bg-gray-400 rounded px-4 py-2 m-2"
          >
            Cookie Settings
          </button>
        </div>
      )}
      {showSettings && (
        <CookieSettings
          onSave={handleSaveAndAccept}
          initialCookies={cookies}
          setShowSettings={setShowSettings}
          onAccept={() => setShowBanner(false)} // Optional if needed based on your actual CookieSettings component
        />
      )}
    </div>
  );
};

export default CookieConsent;
