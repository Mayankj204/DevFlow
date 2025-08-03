/**
 * ==============================================================================
 * FILE: /server/api/v1/routes/boards.routes.js
 * PURPOSE: Defines routes for managing project boards and their lists.
 * ==============================================================================
 */
const express = require('express');
const router = express.Router();
const { createBoard, getBoardById } = require('../controllers/board.controller');
const { createList } = require('../controllers/list.controller');
const { protect } = require('../middleware/checkAuth');

// Route to create a new board
router.route('/')
    .post(protect, createBoard);

// Route to get a specific board by its ID
router.route('/:id')
    .get(protect, getBoardById);

// Route for creating a new list (column) within a specific board
router.route('/:boardId/lists')
    .post(protect, createList);

module.exports = router;
