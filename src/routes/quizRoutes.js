const quizRouter = require("express").Router();
const {
  getAllQuestions,
  getQuestionByID,
  createQuestion, 
  deleteQuestionByID
} = require("../controllers/quizController.js");

// GET /q - return stored questions
quizRouter.get("/", getAllQuestions);

// POST /q/new - create new question
quizRouter.post("/new", createQuestion);

//  GET /q/:id - return question by id
quizRouter.get("/:id", getQuestionByID);

// DELETE /q/:id - delete question by id
quizRouter.delete("/:id", deleteQuestionByID);

module.exports = quizRouter;
