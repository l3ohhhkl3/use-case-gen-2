import React, { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, sender: 'user' }]);
    // Here you can call a function to get a response from the bot
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default Chatbot;
