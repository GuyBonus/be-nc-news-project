const { fetchArticles, fetchArticlesById } = require('../models/article.model');

const getArticles = (req, res, next) => {
  fetchArticles()
    .then(articles => {
      res.status(200).send({ articles });
    })
    .catch(err => {
      next(err);
    });
};

const getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  fetchArticlesById(article_id)
    .then(article => {
      res.status(200).send({ article });
    })
    .catch(err => {
      next(err);
    });
};

module.exports = { getArticles, getArticleById };
