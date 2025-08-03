/**
 * ==============================================================================
 * FILE: /server/api/v1/controllers/auth.controller.js
 * PURPOSE: Contains the logic for handling user authentication requests.
 * ==============================================================================
 */

const User = require('../models/User.model');
const Workspace = require('../models/Workspace.model');
const jwt = require('jsonwebtoken');

/**
 * Generates a JSON Web Token (JWT) for a given user ID.
 * @param {string} id - The user's MongoDB document ID.
 * @returns {string} The signed JWT.
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/**
 * @desc    Register a new user and create their workspace
 * @route   POST /api/v1/auth/signup
 * @access  Public
 */
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User with that email already exists' });
    }

    // Create the user first (but don't save yet)
    const user = new User({
      name,
      email,
      password,
      workspaceRole: 'Owner', // The first user is always the Owner
    });

    // Create a new workspace for this user
    const workspace = await Workspace.create({
      name: `${name}'s Workspace`,
      owner: user._id,
    });

    // Link the user to the new workspace and then save the user
    user.workspace = workspace._id;
    await user.save();

    // Generate a token for the new user
    const token = generateToken(user._id);
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error during signup', error: error.message });
  }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide an email and password' });
    }

    // Find user by email and include the password for comparison
    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error during login', error: error.message });
  }
};

/**
 * @desc    Get current logged in user's data
 * @route   GET /api/v1/auth/me
 * @access  Private
 */
const getMe = async (req, res) => {
  // req.user is attached by the 'protect' middleware
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    workspaceRole: user.workspaceRole,
  });
};


module.exports = {
  signup,
  login,
  getMe,
};
