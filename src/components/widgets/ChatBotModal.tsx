'use client';

import React, { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { useChat } from 'ai/react';
import { IconSend, IconMessage, IconXboxX } from '@tabler/icons-react';

export default function ChatBotModal() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents new line in textarea
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>); // Casts KeyboardEvent to FormEvent
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto', block: 'end', inline: 'nearest' });
    }
  }, [messages]);

  return (
    <>
      <button
        className="fixed bottom-10 right-10 z-50 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg"
        onClick={toggleModal}
        aria-label="Open chat"
      >
        <IconMessage size={32} stroke={1.5} />
      </button>

      {isModalOpen && (
        <div className="fixed bottom-10 right-10 z-50 w-96 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center p-2 bg-gray-50 border-b rounded-t-lg dark:bg-gray-800">
            <span className="text-lg font-medium">Chat</span>
            <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <IconXboxX size={24} stroke={1.5} />
            </button>
          </div>
          <div className="h-72 overflow-y-auto p-2 bg-gray-100 dark:bg-gray-800">
            {messages.map((m) => (
              <div key={m.id} className="p-2 my-1 rounded bg-white shadow dark:bg-gray-700" style={{ color: 'black' }}>
                <span className={`${m.role === 'user' ? 'text-blue-800 dark:text-blue-300' : 'text-green-700 dark:text-green-300'}`}>
                  {m.role === 'user' ? 'You: ' : 'AI: '}
                </span>
                {m.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} className="mt-auto p-2">
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
                  id="chat"
                  rows={1}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="flex-1 mx-4 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                  required
              />
              <button type="submit" className="p-2 text-blue-600 hover:bg-blue-100 rounded-full cursor-pointer dark:text-blue-500 dark:hover:bg-gray-600">
                  <IconSend size={24} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
