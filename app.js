const express = require('express');
const app = express();
const getTopics = require('./controllers/topics.controllers');
const { getArticles, getArticleById } = require('./controllers/article.controllers');

const endpoints = require('./endpoints.json');

app.get('/api/topics/', getTopics);

app.get('/api/articles/', getArticles);

app.get('/api/articles/:article_id', getArticleById);

app.get('/api', (req, res) => {
  res.status(200).send({ endpoints: endpoints });
});

module.exports = app;
