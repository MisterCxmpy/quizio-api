const roomRouter = require("express").Router();
const {
  createQuizRoom,
  getAllQuestionRooms,
  getQuestionRoomByURL,
  deleteQuizRoomByID
} = require("../controllers/quizRoomController.js");

//  POST /r/new - create a new quiz room
roomRouter.post("/new", createQuizRoom);

// GET /r/all - return the data associated to all quiz rooms -- TEST
roomRouter.get("/all", getAllQuestionRooms);

// GET /r/:id - return the data associated to a existing quiz room
roomRouter.get("/:url", getQuestionRoomByURL);

// DELETE /r/:id - delete quiz room by id
roomRouter.delete("/:id", deleteQuizRoomByID);

module.exports = roomRouter;
