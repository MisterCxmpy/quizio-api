const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const quizRouter = require("./routes/quizRoutes");
const roomRouter = require("./routes/roomRoutes");
const authRouter = require("./routes/authRoutes");

const { questionCount } = require("./controllers/quizController.js");
const { roomCount } = require("./controllers/quizRoomController");
const requireAuth = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  const qCount = questionCount();
  const rCount = roomCount();
  
  res.status(200).json({ questions: qCount, rooms: rCount });
});

// somewhat debating weather the questions should be stored seperately or just in the quiz rooms
app.use("/q", requireAuth, quizRouter);
app.use("/r", roomRouter);

app.use("/auth", authRouter);

module.exports = app;
