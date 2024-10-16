const express = require('express');
const app = express();
// const fs = require('fs/promises');
const getTopics = require('./controllers/topics.controllers');

app.use(express.json());

app.get('/api/topics/', getTopics);

module.exports = app;
