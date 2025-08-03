
const mongoose_card = require('mongoose');

const cardSchema = new mongoose_card.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  list: { type: mongoose_card.Schema.Types.ObjectId, ref: 'List', required: true },
  board: { type: mongoose_card.Schema.Types.ObjectId, ref: 'Board', required: true },
  assignees: [{ type: mongoose_card.Schema.Types.ObjectId, ref: 'User' }],
  dueDate: { type: Date },
  order: { type: Number, required: true },
}, { timestamps: true });

const Card = mongoose_card.model('Card', cardSchema);
module.exports = Card;
