const db = require('../db/connection');

const fetchArticles = () => {
  return db.query('SELECT * FROM articles;').then(result => result.rows);
};

const fetchArticlesById = article_id => {
  return db
    .query(
      'SELECT article_id, title, topic, votes, author, body, article_img_url FROM articles WHERE article_id = $1;',
      [article_id]
    )
    .then(result => result.rows[0]);
};

module.exports = { fetchArticles, fetchArticlesById };

