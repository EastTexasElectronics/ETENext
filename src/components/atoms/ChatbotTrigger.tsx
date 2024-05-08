"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';

const ChatbotTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-4 right-4">
            <Image
                src="/../../assets/images/chatBot.gif"
                alt="Chatbot Trigger"
                className="cursor-pointer w-16 h-16"
                onClick={toggleChatbot}
                width={64}
                height={64}
            />
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-4">
                    <Script type='module'
                            src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js' async></Script>
                    <zapier-interfaces-chatbot-embed is-popup='false' chatbot-id='clvwqfy4r000c10bmjp0yl7ir'
                                                     height='600px' width='400px'></zapier-interfaces-chatbot-embed>
                    <button
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                      onClick={toggleChatbot}
                    >
                      Close Chatbot
                    </button>
                  </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotTrigger;
