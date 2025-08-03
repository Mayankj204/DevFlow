
const sendMessage = async (req, res) => {
  const { content, recipient } = req.body;
  try {
    // This is a placeholder for a more complex direct messaging system
    const message = await Message.create({
        sender: req.user.id,
        originalRecipient: recipient,
        content,
        parent: req.user.id // This should be a unique conversation ID in a real app
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: 'Error sending message', error: error.message });
  }
};

module.exports = { sendMessage };

