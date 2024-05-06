import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { ItemListType } from '~/shared/types';
import CTA from './CTA';

// Define the ItemList component that accepts props of type ItemListType
const ItemList = ({
  id,
  items,
  titleClass,
  descriptionClass,
  containerClass,
  listItemClass,
  actionClass,
}: ItemListType) => {
  return (
    // Container for the list, styled with Tailwind CSS, with dynamically merged classes
    <div className={twMerge('divide-y divide-gray-200', containerClass)}>
      {/* Maps over the items array and renders each item as a part of the list */}
      {items.map(({ title, description, callToAction }, index) => (
        <div
          // Unique key for each item, combining the provided id and the index, if no id, uses a default key
          key={id ? `item-${id}-${index}` : `item-list-${index}`}
          // Applies Tailwind CSS utility classes along with any additional styles provided through props
          className={twMerge('flex flex-col items-center p-4', listItemClass)}
        >
          {/* Renders the title if it exists, applying styling from props */}
          {title && <h3 className={twMerge('text-lg font-bold', titleClass)}>{title}</h3>}
          {/* Renders the description if it exists, applying styling from props */}
          {description && <p className={twMerge('text-gray-600', descriptionClass)}>{description}</p>}
          {/* Conditionally renders the call to action component if it exists */}
          {callToAction && (
            <CTA
              // Passes the callToAction object to the CTA component
              callToAction={callToAction}
              // Merges Tailwind CSS classes for the link within the CTA based on whether there is a title or description
              linkClass={twMerge(
                'text-primary font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer',
                actionClass,
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
