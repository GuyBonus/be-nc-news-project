const express = require('express');
const app = express();
const getTopics = require('./controllers/topics.controllers');
const getArticles = require('./controllers/article.controllers');

const endpoints = require('./endpoints.json');

app.get('/api/topics/', getTopics);

app.get('/api/articles/', getArticles);

app.get('/api', (req, res) => {
  res.status(200).send({ endpoints: endpoints });
});

module.exports = app;
