
const cron = require('node-cron');
const Card_job = require('../api/v1/models/Card.model');
// const { createNotification } = require('../services/notificationService');

const checkDeadlines = async () => {
  console.log('Running daily deadline check job...');
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  try {
    const overdueCards = await Card_job.find({
      dueDate: { $lt: now },
    }).populate('assignees');

    const dueSoonCards = await Card_job.find({
      dueDate: { $gte: now, $lt: tomorrow },
    }).populate('assignees');

    for (const card of overdueCards) {
      for (const assignee of card.assignees) {
        console.log(`(Simulated Notification) To: ${assignee.name}, Task "${card.title}" is overdue!`);
      }
    }

    for (const card of dueSoonCards) {
      for (const assignee of card.assignees) {
        console.log(`(Simulated Notification) To: ${assignee.name}, Task "${card.title}" is due tomorrow.`);
      }
    }
  } catch (error) {
    console.error('Error running deadline check job:', error);
  }
};

const startDeadlineScheduler_func = () => {
  cron.schedule('0 8 * * *', checkDeadlines, {
    scheduled: true,
    timezone: "America/New_York",
  });
  console.log('Deadline reminder scheduler started.');
};

// --- UNCOMMENTED EXPORT ---
module.exports = { startDeadlineScheduler: startDeadlineScheduler_func };
