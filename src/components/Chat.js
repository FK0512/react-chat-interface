import React, { useState } from "react";
import { fetchChatResponse } from "./api";
import Message from "./Message";
import "./Chat.css";

const Chat = ({ conversations, setConversations, activeChat }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...conversations[activeChat], newMessage];

    setConversations((prevChats) => {
      const newChats = [...prevChats];
      newChats[activeChat] = updatedMessages;
      return newChats;
    });

    setInput("");
    setLoading(true);

    try {
      const botResponse = await fetchChatResponse(updatedMessages);
      const responseMessage = { role: "assistant", content: botResponse };

      setConversations((prevChats) => {
        const newChats = [...prevChats];
        newChats[activeChat] = [...updatedMessages, responseMessage];
        return newChats;
      });
    } catch (error) {
      setConversations((prevChats) => {
        const newChats = [...prevChats];
        newChats[activeChat] = [
          ...updatedMessages,
          { role: "assistant", content: "Sorry, an error occurred." },
        ];
        return newChats;
      });
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    setConversations((prevChats) => [...prevChats, []]);
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Chat Interface</h2>
      <div className="chat-box">
        {conversations[activeChat].map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}
        {loading && <p className="loading">Thinking...</p>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          Send
        </button>
        <button className="new-chat" onClick={startNewChat}>
          New Chat
        </button>
      </div>
    </div>
  );
};

export default Chat;
