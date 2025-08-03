/*
================================================================================
FILE: /server/api/v1/routes/index.js
PURPOSE: The main router for the v1 API. It combines all other route files.
================================================================================
*/
const express = require('express');
const router = express.Router();

// Import individual route files
const authRoutes = require('./auth.routes');
const workspaceRoutes = require('./workspace.routes');
const teamRoutes = require('./teams.routes');
const boardRoutes = require('./boards.routes');
const cardRoutes = require('./cards.routes');
const messageRoutes = require('./messages.routes');

// Mount the individual routers on their respective paths
router.use('/auth', authRoutes);
router.use('/workspaces', workspaceRoutes);
router.use('/teams', teamRoutes);
router.use('/boards', boardRoutes);
router.use('/cards', cardRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
