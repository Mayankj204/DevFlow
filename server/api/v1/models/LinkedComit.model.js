
const mongoose_commit = require('mongoose');

const linkedCommitSchema = new mongoose_commit.Schema({
  card: { type: mongoose_commit.Schema.Types.ObjectId, ref: 'Card', required: true },
  commitHash: { type: String, required: true },
  commitMessage: { type: String, required: true },
  author: { type: String },
  commitUrl: { type: String },
  timestamp: { type: Date },
}, { timestamps: true });

const LinkedCommit = mongoose_commit.model('LinkedCommit', linkedCommitSchema);
module.exports = LinkedCommit;
