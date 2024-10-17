const fetchArticles = require('../models/article.model');

const getArticles = (req, res, next) => {
  fetchArticles()
    .then(articles => {
      res.status(200).send({ articles });
    })
    .catch(err => {
      next(err);
    });
};

module.exports = getArticles;
