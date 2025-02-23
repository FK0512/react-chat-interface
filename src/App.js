import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./styles.css";

const App = () => {
  const [conversations, setConversations] = useState([[]]);
  const [activeChat, setActiveChat] = useState(0);

  // Ensure activeChat is always in range
  useEffect(() => {
    if (activeChat >= conversations.length) {
      setActiveChat(0);
    }
  }, [conversations]);

  return (
    <div className="app-container">
      <Sidebar chats={conversations} selectChat={setActiveChat} currentChatIndex={activeChat} />
      <Chat conversations={conversations} setConversations={setConversations} activeChat={activeChat} />
    </div>
  );
};

export default App;
