const express = require('express');
const cors = require('cors');
const quizRouter = require('./routes/quizRoutes');
const roomRouter = require('./routes/roomRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/q', quizRouter);
app.use('/r', roomRouter);

module.exports = app;