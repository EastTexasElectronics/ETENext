'use client';

import { IconMenu, IconX } from '@tabler/icons-react';
import { ToggleMenuProps } from '~/shared/types';

/**
 * A functional component to render a toggle menu button with dynamic icon based on state.
 * This button allows users to open or collapse a mobile navigation menu.
 *
 * @param {ToggleMenuProps} props - Component props including event handlers and state indicators.
 */
const ToggleMenu = ({ handleToggleMenuOnClick, isToggleMenuOpen }: ToggleMenuProps) => {
  const buttonStyle =
    'ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700';

  return (
    <button
      type="button" // Explicitly specifying the button type as a regular button
      className={buttonStyle} // Applying the defined CSS classes for styling
      aria-label="Open or Collapse Mobile Menu" // Accessibility label for the button
      aria-expanded={isToggleMenuOpen} // Accessibility state indicating if the associated menu is open
      onClick={handleToggleMenuOnClick} // Event handler for click events
    >
      {/* Conditionally rendering the icon based on the menu's open/close state */}
      {isToggleMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
    </button>
  );
};

export default ToggleMenu;
