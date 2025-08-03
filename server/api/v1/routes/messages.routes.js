/**
 * ==============================================================================
 * FILE: /server/api/v1/routes/messages.routes.js
 * PURPOSE: Defines routes for the messaging and approval system.
 * ==============================================================================
 */
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/checkAuth');
// const { sendMessage, getPendingMessages, approveMessage } = require('../controllers/message.controller');

// Example routes for a messaging system.
// We will uncomment these and build out the controller logic later.

// Route to send a new message (could be a direct message or a comment)
// router.route('/')
//     .post(protect, sendMessage);

// Route for managers/TLs to get messages pending their approval
// router.route('/pending')
//     .get(protect, authorize('Team Leader', 'Admin', 'Owner'), getPendingMessages);

// Route for a manager/TL to approve a pending message
// router.route('/:id/approve')
//     .put(protect, authorize('Team Leader', 'Admin', 'Owner'), approveMessage);

module.exports = router;
