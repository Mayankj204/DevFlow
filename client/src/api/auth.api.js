import api from './api'; // Import the configured Axios instance

/**
 * ==============================================================================
 * FILE: /client/src/api/auth.api.js
 * PURPOSE: Contains all API functions related to user authentication.
 * ==============================================================================
 */

/**
 * Sends a login request to the server.
 * @param {object} credentials - { email, password }
 * @returns {Promise<object>} The server's response, containing user data and a token.
 */
const login = (credentials) => {
  return api.post('/auth/login', credentials);
};

/**
 * Sends a registration request to the server.
 * @param {object} userData - { name, email, password }
 * @returns {Promise<object>} The server's response.
 */
const signup = (userData) => {
  return api.post('/auth/signup', userData);
};

/**
 * Sends a request to get the current user's data using their token.
 * @returns {Promise<object>} The server's response with the user's data.
 */
const getCurrentUser = () => {
  return api.get('/auth/me');
};

// Group all auth functions into an object for export
const authApi = {
  login,
  signup,
  getCurrentUser,
};

export default authApi;
