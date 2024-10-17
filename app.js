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

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ status: err.status, msg: err.msg });
  } else next(err);
});

app.use((err, req, res, next) => {
  if (err.code === '22P02') {
    res.status(400).send({ status: 400, msg: 'Invalid data type' });
  }
});

module.exports = app;
