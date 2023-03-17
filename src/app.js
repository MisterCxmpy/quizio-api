const express = require("express");
const cors = require("cors");
const quizRouter = require("./routes/quizRoutes");
const roomRouter = require("./routes/roomRoutes");

const { questionCount } = require("./controllers/quizController.js");
const { roomCount } = require("./controllers/quizRoomController");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  const qCount = questionCount();
  const rCount = roomCount();
  
  res.status(200).json({ questions: qCount, rooms: rCount });
});

app.use("/q", quizRouter);
app.use("/r", roomRouter);

module.exports = app;
