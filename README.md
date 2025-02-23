Chat Application with Sidebar

Overview

This is a simple chat application with a sidebar for managing chat history. The sidebar is positioned on the left, and the chat interface appears on the right. The application supports multiple conversations and displays markdown-formatted messages.

Features

Sidebar for chat history navigation.

Chat interface that supports markdown rendering.

Dynamic chat handling with user and assistant messages.

Option to start a new chat.

Uses inline styling to position elements.

Project Structure

├── src
│   ├── components
│   │   ├── Sidebar.js
│   │   ├── Chat.js
│   │   ├── Message.js
│   │   ├── Dashboard.js
│   │   ├── api.js
│   ├── styles
│   │   ├── Chat.css
│   │   ├── Sidebar.css
│   ├── App.js
│   ├── index.js
│   ├── README.md

Installation

Clone the repository:

git clone https://github.com/FK0512/react-chat-interface.git

Navigate to the project directory:

cd chat-app

Install dependencies:

npm install

Start the development server:

npm start

Usage

Open the application in your browser at http://localhost:3000.

Use the sidebar to switch between conversations.

Type messages in the input box and send them.

Start a new chat session using the "New Chat" button.

Technologies Used

React.js

React Markdown

Remark GFM

CSS (for styling)

Components

Sidebar.js

Displays a list of chat histories.

Allows switching between different conversations.

Chat.js

Handles message input and rendering.

Fetches responses asynchronously.

Displays user and assistant messages.

Dashboard.js

Renders the Sidebar on the left and Chat on the right.

Uses inline styling to arrange the layout in a flex row.

License

This project is licensed under the MIT License.

Author

Developed by [Your Name].

