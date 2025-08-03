import api from './api';

/**
 * ==============================================================================
 * FILE: /client/src/api/teams.api.js
 * PURPOSE: Contains all API functions related to teams within a workspace.
 * ==============================================================================
 */

/**
 * Fetches all teams in the current user's workspace.
 * @returns {Promise<object>} A list of teams.
 */
const getAllTeams = () => {
  return api.get('/teams');
};

/**
 * Creates a new team. (Requires Admin privileges)
 * @param {object} teamData - { name, teamLeadId }
 * @returns {Promise<object>} The newly created team data.
 */
const createTeam = (teamData) => {
  return api.post('/teams', teamData);
};

/**
 * Adds a member to a specific team. (Requires Admin/TL privileges)
 * @param {string} teamId - The ID of the team.
 * @param {object} memberData - { userId }
 * @returns {Promise<object>} The updated team data.
 */
const addMemberToTeam = (teamId, memberData) => {
  return api.post(`/teams/${teamId}/members`, memberData);
};

const teamsApi = {
  getAllTeams,
  createTeam,
  addMemberToTeam,
};

export default teamsApi;
