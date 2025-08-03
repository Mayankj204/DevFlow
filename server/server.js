/**
 * ==============================================================================
 * FILE: /server/server.js
 * PURPOSE: The main entry point for the DevFlow backend server. It initializes
 * the Express app, connects to the database, sets up middleware, mounts the API
 * routes, and starts the Socket.IO server.
 * ==============================================================================
 */

// This must be at the very top to load environment variables
require('./config/environment');

const http = require('http');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const { initSocket } = require('./services/socketManager');
const { startDeadlineScheduler } = require('./jobs/deadlineReminder.job');
const v1ApiRouter = require('./api/v1/routes'); // Main router for v1

// --- Initialize Express App & Server ---
const app = express();
const server = http.createServer(app);

// --- Connect to Database ---
connectDB();

// --- Initialize Socket.IO ---
// This attaches the real-time server to our main HTTP server
initSocket(server);

// --- Middleware ---
// Enable Cross-Origin Resource Sharing to allow requests from your frontend
app.use(cors()); 
// Enable the app to parse JSON formatted request bodies
app.use(express.json()); 

// --- API Routes ---
// A simple test route to confirm the API is running
app.get('/', (req, res) => res.send('DevFlow API is running...'));
// Mount all v1 routes under the /api/v1 path
app.use('/api/v1', v1ApiRouter); 

// --- Start Scheduled Jobs ---
startDeadlineScheduler();

// --- Server Initialization ---
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
