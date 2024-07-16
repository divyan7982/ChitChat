# ChitChat - A Real-Time Chat Application

ChitChat is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for real-time communication. This project focuses on providing a smooth and responsive user experience for chatting with friends and colleagues.

![image](https://github.com/user-attachments/assets/08465a67-7b00-4f82-82ed-5b25ed871912)

![image](https://github.com/user-attachments/assets/ee006019-1a4b-4f2b-9ad5-2e3de197a2fa)

![image](https://github.com/user-attachments/assets/e42e09cd-a0ec-4a38-9236-039c9383e36b)

![image](https://github.com/user-attachments/assets/55815db8-9fd7-48d0-900e-54873bb56bf7)

## Features
- **Real-Time Messaging:** Instant messaging with Socket.io for real-time communication.
- **User Authentication:** Secure login and registration system
- **Responsive Design:** Modern, clean, and responsive design suitable for both desktop and mobile devices.
- **Message History:** Persistent message history stored in MongoDB.
- **Scalable Architecture:** Designed to handle a growing number of users efficiently.

## Tech Stack
- **Frontend:**
  - React.js
  - HTML, CSS, JavaScript
  - Axios for API requests
  - Socket.io-client for real-time communication

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database
  - Socket.io for real-time communication

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chitchat.git
   cd chitchat
2. **Install dependencies for the backend:**
   ```bash
   cd backend
   npm install
3. **Install dependencies for the frontend:**
   ```bash
   cd ../frontend
   npm install
4. **Set up Environmental Variable:**
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
5. **Run the backend server:**
   ```bash
   cd backend
   npm start
6. **Run the Frontend server:**
   ```bash
   cd ../frontend
   npm start

The application should now be running on http://localhost:3000.

## Usage
1. Register: Create a new account by registering with your email and password.
2. Login: Log in with your registered email and password.
3. Chat: Start chatting with other online users in real-time.

## Contributing
1. Fork the repository.
2. Create your feature branch: git checkout -b feature/YourFeature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/YourFeature.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.



