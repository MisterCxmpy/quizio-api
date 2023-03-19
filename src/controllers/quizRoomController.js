const QuestionRoom = require("../models/QuestionRoom.js");

const getAllQuestionRooms = (req, res) => {
  let rooms = QuestionRoom.find();

  res.status(200).json(rooms);
};

const getQuestionRoomByURL = (req, res) => {
  const room = QuestionRoom.findByURL(req.params.url);

  if (room) {
    q = room.questions;
    res.json({ questionCount: q.length, questions: q });
  } else {
    res.json({ error: "room not found." });
  }
};

const createQuizRoom = (req, res) => {
  const { body: questions } = req;

  if (
    typeof questions != "object" &&
    typeof questions[0].question != "string"
  ) {
    res.json({ error: "incorrect input" });
  } else {
    const r = new QuestionRoom(questions.questions);

    r.save();

    res.json(r);
  }
};

const deleteQuizRoomByID = (req, res) => {
  let { id } = req.params;
  let qr = QuestionRoom.deleteOne(parseInt(id));

  if (qr) {
    res.json(qr);
  } else {
    res.json({ error: "quiz room not found" });
  }
};

const roomCount = () => {
  let rooms = QuestionRoom.find();

  return rooms.length;
};

module.exports = {
  createQuizRoom,
  getAllQuestionRooms,
  getQuestionRoomByURL,
  deleteQuizRoomByID,
  roomCount,
};
