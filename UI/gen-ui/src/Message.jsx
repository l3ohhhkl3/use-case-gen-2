import React from 'react';

const Message = ({ text, sender }) => (
  <div className={`message ${sender}`}>
    {text}
  </div>
);

export default Message;
