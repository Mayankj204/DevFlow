
const createList = async (req, res) => {
  const { name, order } = req.body;
  const { boardId } = req.params;
  try {
    const list = await List.create({ name, order, board: boardId });
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { createList };

