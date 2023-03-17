const express = require('express');
const cors = require('cors');
const quizRouter = require('./routes/quizRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/q', quizRouter);

module.exports = app;