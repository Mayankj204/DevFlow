
const createCard = async (req, res) => {
  const { title, order, boardId } = req.body;
  const { listId } = req.params;
  try {
    const card = await Card.create({ title, order, list: listId, board: boardId });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!card) {
        return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const moveCard = async (req, res) => {
    const { newListId, newOrder } = req.body;
    try {
        const card = await Card.findByIdAndUpdate(req.params.id, { list: newListId, order: newOrder }, { new: true });
        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }
        // In a real app, you would also need to update the order of other cards
        res.status(200).json({ message: `Card ${req.params.id} moved successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const postComment = async (req, res) => {
  const { content } = req.body;
  const { cardId } = req.params;
  try {
    const comment = await Message.create({
        sender: req.user.id,
        content,
        parent: cardId
    });
    // Here you would emit a socket event to the board room
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { createCard, updateCard, moveCard, postComment };
