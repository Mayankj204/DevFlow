/**
 * ==============================================================================
 * FILE: /server/api/v1/routes/cards.routes.js
 * PURPOSE: Defines routes for managing individual cards (tasks).
 * ==============================================================================
 */
const express = require('express');
const router = express.Router();
const { updateCard, moveCard, postComment } = require('../controllers/card.controller');
const { protect } = require('../middleware/checkAuth');

// Note: Card creation is handled via a different route for better structure
// e.g., POST /api/v1/lists/:listId/cards

// Route to update a specific card by its ID
router.route('/:id')
    .put(protect, updateCard);

// Route to handle moving a card (drag and drop)
router.route('/:id/move')
    .put(protect, moveCard);

// Route for posting a new comment on a specific card
router.route('/:cardId/comments')
    .post(protect, postComment);

module.exports = router;
