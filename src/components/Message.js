import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

const Message = ({ role, content }) => {
  return (
    <div className={`message ${role}`}>
      <strong>{role}:</strong>
      <MarkdownRenderer text={content} />
    </div>
  );
};

export default Message;
