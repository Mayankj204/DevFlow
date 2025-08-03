
const mongoose_message = require('mongoose');

const messageSchema = new mongoose_message.Schema({
  sender: { type: mongoose_message.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  parent: { type: mongoose_message.Schema.Types.ObjectId, required: true },
  status: { type: String, enum: ['Approved', 'Pending', 'Rejected'], default: 'Approved' },
  approver: { type: mongoose_message.Schema.Types.ObjectId, ref: 'User' },
  originalRecipient: { type: mongoose_message.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Message = mongoose_message.model('Message', messageSchema);
module.exports = Message;
