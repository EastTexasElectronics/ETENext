'use client';
import { useEffect } from 'react';

// Custom hook to dynamically load an external script
const useScript = (url) => {
  useEffect(() => {
    // Check if the script is already present
    if (document.querySelector(`script[src="${url}"]`)) return;

    const script = document.createElement('script');
    script.src = url;
    script.type = 'module'; // As specified in your script tag
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const ChatbotComponent = () => {
  const scriptUrl = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';

  useScript(scriptUrl);

  return (
    <div>
      {/* Direct use of the web component in JSX */}
      <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="clvwqfy4r000c10bmjp0yl7ir"
        height="600px"
        width="400px"
      ></zapier-interfaces-chatbot-embed>
    </div>
  );
};

export default ChatbotComponent;
