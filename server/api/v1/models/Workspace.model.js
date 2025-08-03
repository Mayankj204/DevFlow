/**
 * ==============================================================================
 * FILE: /server/api/v1/models/Workspace.model.js
 * PURPOSE: Defines the Mongoose schema for the Workspace collection.
 * ==============================================================================
 */

const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a workspace name'],
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // You can add more fields later, like a subscription plan
  // plan: {
  //   type: String,
  //   enum: ['Free', 'Pro', 'Enterprise'],
  //   default: 'Free',
  // }
}, {
  timestamps: true,
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;
