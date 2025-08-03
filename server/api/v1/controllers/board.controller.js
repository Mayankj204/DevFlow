
const Board = require('../models/Board.model');
const List = require('../models/List.model');
const Card = require('../models/Card.model');

const createBoard = async (req, res) => {
  const { name, team } = req.body;
  try {
    const board = await Board.create({ name, team });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getBoardById = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    // This is a complex aggregation to fetch the board with its lists and cards
    const boardData = await Board.aggregate([
        { $match: { _id: board._id } },
        {
            $lookup: {
                from: 'lists',
                localField: '_id',
                foreignField: 'board',
                as: 'lists',
                pipeline: [
                    { $sort: { order: 1 } },
                    {
                        $lookup: {
                            from: 'cards',
                            localField: '_id',
                            foreignField: 'list',
                            as: 'cards',
                            pipeline: [{ $sort: { order: 1 } }]
                        }
                    }
                ]
            }
        }
    ]);
    res.status(200).json(boardData[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { createBoard, getBoardById };

