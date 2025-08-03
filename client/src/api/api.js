import axios from 'axios';

/**
 * ==============================================================================
 * FILE: /client/src/api/api.js
 * PURPOSE: Creates and configures a central Axios instance for all API requests.
 *
 * HOW IT WORKS:
 * - Sets the base URL for all requests to point to your backend server.
 * - Automatically includes the user's auth token in the headers of every
 * request after they log in.
 * - Sets up interceptors to handle responses and errors globally.
 * ==============================================================================
 */

// Create an instance of Axios with a base configuration
const api = axios.create({
  // Use environment variables for the base URL in a real project
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Axios Request Interceptor
 * This function runs before every single request is sent.
 * Its purpose is to check if we have a token in local storage and, if so,
 * attach it to the Authorization header.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
