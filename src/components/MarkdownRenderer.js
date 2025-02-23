import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ text }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ node, ...props }) => <p className="markdown" {...props} />,
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
