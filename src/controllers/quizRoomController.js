const QuestionRoom = require("../models/QuestionRoom.js");

const getAllQuestionRooms = (req, res) => {
  let rooms = QuestionRoom.find();

  res.status(200).json(rooms);
};

const createQuizRoom = (req, res) => {
  const { body } = req;

  if (typeof body.questions != 'object') {
    res.json({ error: 'incorrect input' })
  } else {
    let room = QuestionRoom.save(body);

    res.json(room);
  }
};

module.exports = { createQuizRoom, getAllQuestionRooms };
