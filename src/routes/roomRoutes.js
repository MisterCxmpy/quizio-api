const roomRouter = require("express").Router();
const {
  createQuizRoom,
  getAllQuestionRooms,
} = require("../controllers/quizRoomController.js");

//  POST /r/new - create a new quiz room
roomRouter.post("/new", createQuizRoom);

//  /r/all - return the data associated to all quiz rooms -- TEST
roomRouter.get("/all", getAllQuestionRooms);

//  /r/:id - return the data associated to a existing quiz room
roomRouter.get("/:id", getAllQuestionRooms);

module.exports = roomRouter;
