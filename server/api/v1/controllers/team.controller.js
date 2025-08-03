
const Team = require('../models/Team.model');

const createTeam = async (req, res) => {
  const { name, teamLead, members } = req.body;
  try {
    const team = await Team.create({
      name,
      teamLead,
      members,
      workspace: req.user.workspace, // Associate with the user's workspace
    });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({ workspace: req.user.workspace }).populate('members', 'name email').populate('teamLead', 'name email');
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { createTeam, getAllTeams };

