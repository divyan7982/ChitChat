# Server-Based Chat Application

This repository contains a simple chat application built using NodeJS and Socket.io for a server-client architecture for real-time communication. It enables multiple clients to connect to a server and chat with each other in real-time through text messages.

##Demo
https://drive.google.com/file/d/1B2NmtvW35Feiw2A6pNBkYgmFFr3I35Fq/view?usp=sharing

## Features

- **Server-Client Architecture**: The application follows a server-client model where one server hosts the chatroom, and multiple clients can connect to it.
- **Real-time Messaging**: Users can send and receive messages in real-time, enabling instantaneous communication within the chatroom.

## Prerequisites

- Node.js and npm installed on your system.

## Getting Started

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the directory:

    ```bash
    cd ChitChat
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the server:

    ```bash
    node server.js
    ```

5. Start the React application:

    ```bash
    npm start
    ```

6. Open your web browser and navigate to http://localhost:3000 to access the chat application.

7. Connect multiple clients to the server by opening additional tabs or browsers and navigating to http://localhost:3000.

8. Start chatting!

## Usage

- Once connected to the server, clients can send messages by typing in the chat input field and pressing Enter.
- All connected clients will receive messages sent by any participant.
- To exit the application, simply close the browser tab or window.

