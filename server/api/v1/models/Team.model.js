const mongoose_team = require('mongoose');

const teamSchema = new mongoose_team.Schema({
  name: { type: String, required: true, trim: true },
  workspace: { type: mongoose_team.Schema.Types.ObjectId, ref: 'Workspace', required: true },
  teamLead: { type: mongoose_team.Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: mongoose_team.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Team = mongoose_team.model('Team', teamSchema);
module.exports = Team;
