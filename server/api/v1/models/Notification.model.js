const mongoose_notification = require('mongoose');

const notificationSchema = new mongoose_notification.Schema({
  recipient: { type: mongoose_notification.Schema.Types.ObjectId, ref: 'User', required: true },
  sender: { type: mongoose_notification.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  type: { type: String, enum: ['mention', 'assignment', 'deadline', 'comment'], required: true },
  isRead: { type: Boolean, default: false },
  link: { type: String },
}, { timestamps: true });

const Notification = mongoose_notification.model('Notification', notificationSchema);
module.exports = Notification;