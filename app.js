const express = require('express');
const app = express();
const getTopics = require('./controllers/topics.controllers');
const endpoints = require('./endpoints.json');

app.get('/api', (req, res) => {
  res.status(200).send({ endpoints: endpoints });
});

app.get('/api/topics/', getTopics);

module.exports = app;
