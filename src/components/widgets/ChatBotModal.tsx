'use client';
import { useState, useEffect, useRef } from 'react';
import { IconXboxX, IconMessage, IconSend } from '@tabler/icons-react';

interface ChatMessage {
  message: string;
  sender: 'Me' | 'Support Bot';
}

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    setLoading(true);

    setChatHistory((prev) => [...prev, { message: userInput, sender: 'Me' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();
      setChatHistory((prev) => [...prev, { message: data.choices[0].message.content, sender: 'Support Bot' }]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { message: 'Error communicating with the Support Bot.', sender: 'Support Bot' },
      ]);
    }

    setUserInput('');
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [chatHistory, isOpen]);

  return (
    <>
      {!isOpen && (
        <button className="fixed bottom-4 right-4 z-50" onClick={() => setIsOpen(true)}>
          <IconMessage size={48} stroke={1.5} className="text-secondary-950 dark:text-secondary-100" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed top-1/4 bottom-4 right-0 p-6 bg-primary-100 dark:bg-secondary-900 rounded-lg shadow-xl z-50 w-96 max-w-full"
          style={{ maxHeight: '70vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-secondary-950 dark:text-secondary-100">Support Bot</h2>
            <IconXboxX
              size={24}
              stroke={1.5}
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex-grow overflow-y-auto pr-2">
            {chatHistory.map((entry, index) => (
                <div
                  key={index}
                  className={`text-sm p-3 my-1 bg-${entry.sender === 'Me' ? 'blue-500' : 'green-500'} text-white rounded-lg max-w-[80%] ${entry.sender === 'Me' ? 'ml-auto' : 'mr-auto'}`}
                >
                  <strong>{entry.sender}:</strong> {entry.message}
                </div>
              ))}
              <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded text-secondary-950 dark:text-secondary-100"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              disabled={loading}
              style={{ minHeight: '50px', resize: 'none' }}
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-blue-500 text-white p-2 rounded w-full disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <IconSend size={20} className="mr-2" />
              )}{' '}
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBotModal;
