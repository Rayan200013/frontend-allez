import React from 'react';
import { FaComment } from 'react-icons/fa';

const ChatIcon = ({ onClick }) => {
  return (
    <div className="chat-icon" onClick={onClick}>
      <FaComment />
    </div>
  );
};

export default ChatIcon;
