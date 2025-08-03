/**
 * ==============================================================================
 * FILE: /server/config/environment.js
 * PURPOSE: Loads and validates environment variables from the .env file.
 * ==============================================================================
 */

// This line loads the environment variables from the .env file
require('dotenv').config();

// We can also add validation here to ensure all required variables are present
const requiredEnvVars = ['PORT', 'MONGO_URI', 'JWT_SECRET'];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Environment variable ${varName} is missing. Please check your .env file.`);
  }
});

// We don't need to export anything from this file.
// As long as it's required once at the top of server.js,
// process.env will be populated throughout the application.
