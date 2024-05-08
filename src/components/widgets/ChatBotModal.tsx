// src/components/widgets/ChatBotModal.tsx
'use client';
import { useState } from 'react';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    setLoading(true);
    const instructions = "Please have a conversation with the user according to the specified guidelines.";

    // Add user input to chat history
    setChatHistory(prev => [...prev, { message: userInput, sender: 'User' }]);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput, instructions }),
      });

      const data = await response.json();
      setChatHistory(prev => [...prev, { message: data.choices[0].message.content, sender: 'AI' }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { message: 'Error communicating with the AI.', sender: 'AI' }]);
    }
    setUserInput('');
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Send</button>
      </form>
      <div>
        {chatHistory.map((entry, index) => (
          <div key={index} style={{ textAlign: entry.sender === 'User' ? 'right' : 'left' }}>
            <p>{entry.sender}: {entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
