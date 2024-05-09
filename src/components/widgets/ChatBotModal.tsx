'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { IconXboxX, IconMessage, IconSend, IconUserPlus } from '@tabler/icons-react';
import Tooltip from '@mui/material/Tooltip';

/**
 * A chatbot modal component that allows users to interact with an AI chatbot.
 * The chat interface initializes with an automatic greeting if the chat history is empty.
 * It features a modern and sleek design using Tailwind CSS for styling.
 * 
 * Features:
 * - Open/close functionality with a floating action button.
 * - Smooth scrolling for viewing the latest messages.
 * - Dynamic placeholder text for the input field.
 * - Responsive design for desktop and mobile views.
 */
interface ChatMessage {
  message: string;
  sender: 'Me' | 'Techie Teddy';
}

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [placeholder, setPlaceholder] = useState('Ask me anything...');

  // Handles user input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  // Submits the form when the Enter key is pressed without pressing Shift
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(new Event('submit'), userInput);
    }
  };

  // Handles form submission, sends message to server, and updates chat history
  const handleSubmit = async (event: Event, message: string) => {
    event.preventDefault();
    if (!message.trim()) return;
    setLoading(true);

    setChatHistory((prev) => [...prev, { message: message, sender: 'Me' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: message }),
      });

      const data = await response.json();
      setChatHistory((prev) => [...prev, { message: data.choices[0].message.content, sender: 'Techie Teddy' }]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { message: 'Error communicating with the Techie Teddy.', sender: 'Techie Teddy' },
      ]);
    }

    setUserInput('');
    setLoading(false);
  };

  // Focuses the textarea and scrolls to the latest message when the chat history changes
  useEffect(() => {
    textareaRef.current?.focus();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [chatHistory]);

  // Automatically sends a greeting when the chat modal is first opened and empty
  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      handleSubmit(new Event('submit'), 'Tell me who you are and what you can do.');
    }
  }, [isOpen, chatHistory.length]);

  return (
    <>
      {/* Open chat button */}
      {!isOpen && (
        <button className="fixed bottom-4 right-4 z-50 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                onClick={() => setIsOpen(true)}>
          <IconMessage size={48} stroke={1.5} aria-label="Open chat" />
        </button>
      )}

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:inset-y-1/4 md:w-96 max-w-full p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
             role="dialog"
             aria-labelledby="chat-title"
             aria-live="polite">
          {/* Modal header */}
          <div className="flex justify-between items-center mb-4">
            <h2 id="chat-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Techie Teddy - Support Chat
            </h2>
            <Tooltip title="Close Chat" placement='left'>
              <IconXboxX
                size={24}
                stroke={1.5}
                className="cursor-pointer text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              />
            </Tooltip>
          </div>
          {/* Chat history */}
          <div className="flex-grow overflow-y-auto pr-2 space-y-2">
            {chatHistory.map((entry, index) => (
              <div key={index}
                   className={`p-3 my-1 break-words text-white rounded-xl max-w-[80%] ${entry.sender === 'Me' ? 'bg-blue-500 ml-auto' : 'bg-green-500 mr-auto'}`}
                   role="log">
                <strong>{entry.sender}:</strong> {entry.message}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input area */}
          <form onSubmit={(e) => handleSubmit(e as unknown as Event, userInput)} className="mt-4 flex">
            <textarea
              ref={textareaRef}
              className="flex-grow p-2 border border-gray-300 rounded text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition-colors mr-2"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={loading}
              style={{ minHeight: '50px', resize: 'none' }}
              aria-label="Type your message"
            />
            {/* Action buttons */}
            <div className="flex flex-col space-y-1">
              <Tooltip title="Contact a Human" placement='top'>
                <button className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                        aria-label="Open Contact Form">
                  <IconUserPlus size={30} />
                </button>
              </Tooltip>
              <Tooltip title="Send Message" placement='bottom'>
                <button type="submit"
                        className="p-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition-colors"
                        disabled={loading}
                        aria-label="Send message">
                  <IconSend size={30} />
                </button>
              </Tooltip>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBotModal;
