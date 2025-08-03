
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

let io;

const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:3000", // Your React app's URL
      methods: ["GET", "POST"]
    }
  });

  // Middleware to authenticate socket connections using the JWT
  io.use((socket, next) => {
    const token = socket.handshake.query.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return next(new Error('Authentication error'));
        }
        socket.user = decoded; // Attach user info to the socket
        next();
      });
    } else {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id} with user ID: ${socket.user.id}`);

    // Join a room specific to the user ID
    socket.join(socket.user.id);

    socket.on('joinBoard', (boardId) => {
      socket.join(boardId);
      console.log(`User ${socket.id} joined board room: ${boardId}`);
    });

    socket.on('leaveBoard', (boardId) => {
      socket.leave(boardId);
      console.log(`User ${socket.id} left board room: ${boardId}`);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

  console.log('Socket.IO server initialized.');
  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};

module.exports = { initSocket, getIO };

