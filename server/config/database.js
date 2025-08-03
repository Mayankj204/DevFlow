/**
 * ==============================================================================
 * FILE: /server/config/database.js
 * PURPOSE: Handles the connection to the MongoDB database.
 * ==============================================================================
 */

const mongoose = require('mongoose');

/**
 * Asynchronous function to connect to the MongoDB database.
 * It uses the MONGO_URI from the .env file.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the database
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These options are recommended to avoid deprecation warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log a confirmation message
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error during connection, log the error and exit the process
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with a failure code
  }
};

module.exports = connectDB;
