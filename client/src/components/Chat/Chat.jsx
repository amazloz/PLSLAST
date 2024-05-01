import React from "react";

import "./Chat.css";

const Chat = () => {
  return (
    <div>
      <div className="chat-container">
        <div className="chat-body"></div>
        <div className="chat-footer">
          <input type="text" placeholder="Write message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
