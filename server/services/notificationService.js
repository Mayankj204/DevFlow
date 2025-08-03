
const Notification = require('../api/v1/models/Notification.model');
// const { getIO } = require('./socketManager'); // Import getIO

const createNotification = async (notificationData) => {
  try {
    // 1. Save the notification to the database
    const notification = await Notification.create(notificationData);

    // 2. Emit a real-time event to the specific user
    const io = getIO();
    // Emitting to the room named after the user's ID
    io.to(notification.recipient.toString()).emit('new_notification', notification);

    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
  }
};

module.exports = { createNotification };

