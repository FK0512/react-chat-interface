import React from "react";
import "./Sidebar.css";

const Sidebar = ({ chats, selectChat, currentChatIndex }) => {
  return (
    <div className="sidebar">
      <h2>Chat History</h2>
      <ul>
        {chats.map((chat, index) => (
          <li
            key={index}
            className={index === currentChatIndex ? "active" : ""}
            onClick={() => selectChat(index)}
          >
            Chat {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
