/**
 * ==============================================================================
 * FILE: /server/api/v1/models/User.model.js
 * PURPOSE: Defines the Mongoose schema for the User collection.
 * ==============================================================================
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false, // This ensures the password is not sent back in API responses by default
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
  },
  workspaceRole: {
    type: String,
    enum: ['Owner', 'Admin', 'Member'],
    default: 'Member',
  },
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  }],
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

/**
 * Mongoose Pre-Save Middleware
 * This function runs automatically before a new user document is saved.
 * Its purpose is to hash the user's password for security.
 */
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) {
    return next();
  }

  // Hash the password with a cost factor of 12
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * Mongoose Instance Method
 * This method is available on all documents of the User model.
 * It's used to compare the password provided at login with the hashed password in the database.
 * @param {string} candidatePassword - The password from the login form.
 * @returns {Promise<boolean>} True if the passwords match, false otherwise.
 */
userSchema.methods.matchPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;
