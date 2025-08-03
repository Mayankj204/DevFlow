/**
 * ==============================================================================
 * FILE: /server/api/v1/middleware/checkAuth.js
 * PURPOSE: Middleware to protect routes by verifying the user's JWT.
 * ==============================================================================
 */

const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

/**
 * Middleware to protect routes that require authentication.
 * It checks for a valid JWT in the Authorization header.
 */
const protect = async (req, res, next) => {
  let token;

  // Check if the Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header (e.g., "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by the ID from the token's payload
      // We exclude the password field from being returned
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      // If everything is okay, proceed to the next middleware or the controller
      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token is found in the header
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};


module.exports = { protect };
