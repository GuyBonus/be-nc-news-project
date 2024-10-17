const db = require('../db/connection');

const fetchArticles = () => {
  return db.query('SELECT * FROM articles;').then(result => result.rows);
};

const fetchArticlesById = article_id => {
  return db.query('SELECT * FROM articles WHERE article_id = $1;', [article_id]).then(result => {
    if (!result.rows[0]) {
      return Promise.reject({
        status: 404,
        msg: 'Not Found'
      });
    }
    return result.rows[0];
  });
};

module.exports = { fetchArticles, fetchArticlesById };
