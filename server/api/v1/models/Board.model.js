
const mongoose_board = require('mongoose');

const boardSchema = new mongoose_board.Schema({
  name: { type: String, required: true, trim: true },
  team: { type: mongoose_board.Schema.Types.ObjectId, ref: 'Team', required: true },
  status: { type: String, enum: ['Active', 'Completed', 'Archived'], default: 'Active' },
  accessControls: [{
    team: {
      type: mongoose_board.Schema.Types.ObjectId,
      ref: 'Team',
    },
    permission: {
      type: String,
      enum: ['ReadOnly', 'FullAccess'],
      default: 'ReadOnly',
    },
  }],
}, { timestamps: true });

const Board = mongoose_board.model('Board', boardSchema);
module.exports = Board;
