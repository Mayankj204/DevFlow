
const express_teams = require('express');
const router_teams = express_teams.Router();
const { createTeam, getAllTeams } = require('../controllers/team.controller');
const { protect } = require('../middleware/checkAuth');
const { authorize } = require('../middleware/checkRole');

router_teams.route('/')
    .get(protect, getAllTeams)
    .post(protect, authorize('Owner', 'Admin'), createTeam);

module.exports = router_teams;
