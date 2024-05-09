// utils/formatContactInfo.tsx
import React from 'react';

const formatContactInfo = (desc: string) => {
  const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/g;
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  const parts = [];
  let match;

  // Handle phone numbers
  while ((match = phoneRegex.exec(desc)) !== null) {
    const startIndex = match.index;
    const endIndex = phoneRegex.lastIndex;

    // Push preceding text if there is any
    if (startIndex > 0) {
      parts.push(desc.slice(0, startIndex));
    }
    // Push the phone link
    const phone = match[0];
    parts.push(
      <a key={`tel-${startIndex}`} href={`tel:${phone}`}>
        {phone}
      </a>,
    );

    // Update desc to the remaining part
    desc = desc.slice(endIndex);
  }

  // Reset the lastIndex for the email regex
  emailRegex.lastIndex = 0;

  // Handle emails
  while ((match = emailRegex.exec(desc)) !== null) {
    const startIndex = match.index;
    const endIndex = emailRegex.lastIndex;

    // Push preceding text if there is any
    if (startIndex > 0) {
      parts.push(desc.slice(0, startIndex));
    }
    // Push the email link
    const email = match[0];
    parts.push(
      <a key={`email-${startIndex}`} href={`mailto:${email}`}>
        {email}
      </a>,
    );

    // Update desc to the remaining part
    desc = desc.slice(endIndex);
  }

  // Push the remaining text after the last match
  if (desc) {
    parts.push(desc);
  }

  return parts;
};
export default formatContactInfo;
