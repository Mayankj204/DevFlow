
const mongoose_list = require('mongoose');

const listSchema = new mongoose_list.Schema({
  name: { type: String, required: true, trim: true },
  board: { type: mongoose_list.Schema.Types.ObjectId, ref: 'Board', required: true },
  order: { type: Number, required: true },
}, { timestamps: true });

const List = mongoose_list.model('List', listSchema);
module.exports = List;
