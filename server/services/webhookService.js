
const crypto = require('crypto');
const Card = require('../api/v1/models/Card.model');
const LinkedCommit = require('../api/v1/models/LinkedCommit.model');

const handleGithubWebhook = async (req, res) => {
  // 1. Verify the webhook signature for security
  const signature = req.headers['x-hub-signature-256'];
  const expectedSignature = 'sha256=' + crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET)
                                            .update(JSON.stringify(req.body))
                                            .digest('hex');
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature.');
  }

  // 2. Process the push event payload
  const payload = req.body;
  if (payload.commits) {
    const cardIdRegex = /([A-Z]+-\d+)/g; // Example: DEVFLOW-123

    for (const commit of payload.commits) {
      const matches = commit.message.match(cardIdRegex);
      if (matches) {
        for (const uniqueId of matches) {
          const card = await Card.findOne({ uniqueId });
          if (card) {
            // 3. Link the commit to the card in the database
            await LinkedCommit.create({
              card: card._id,
              commitHash: commit.id,
              commitMessage: commit.message,
              author: commit.author.name,
              commitUrl: commit.url,
              timestamp: commit.timestamp
            });
            // You could also emit a socket event here to update the card UI in real-time
          }
        }
      }
    }
  }

  res.status(200).send('Webhook processed successfully.');
};

module.exports = { handleGithubWebhook };


/*
================================================================================
FILE: /server/services/approvalService.js
PURPOSE: Contains the business logic for the message approval workflow.
================================================================================
*/
const Message = require('../api/v1/models/Message.model');
// const { createNotification } = require('./notificationService');

/**
 * Logic to handle sending a message, intercepting it if it needs approval.
 */
const sendMessage = async ({ sender, recipient, content }) => {
  // In a real app, you would fetch sender and recipient user objects
  // to check their roles (e.g., Member, Admin)
  const senderRole = 'Member'; // Placeholder
  const recipientRole = 'Admin'; // Placeholder

  // Rule: If a Member sends a message to an Admin, it needs approval
  if (senderRole === 'Member' && recipientRole === 'Admin') {
    // Find the sender's Team Leader (this would require more complex logic)
    const teamLeadId = 'TEAM_LEAD_ID_PLACEHOLDER';

    const pendingMessage = await Message.create({
      sender,
      content,
      status: 'Pending',
      approver: teamLeadId,
      originalRecipient: recipient,
    });
    
    // Notify the Team Leader that a message needs approval
    // createNotification({ recipient: teamLeadId, message: 'New message to approve' ... });
    
    return pendingMessage;
  } else {
    // Otherwise, send the message directly
    const approvedMessage = await Message.create({
        sender,
        originalRecipient: recipient,
        content,
        status: 'Approved',
    });
    // Notify the recipient directly
    // createNotification({ recipient: recipient, message: 'You have a new message' ... });
    return approvedMessage;
  }
};

module.exports = { sendMessage };
