const db = require('../db/connection');

const fetchArticles = () => {
  return db.query('SELECT * FROM articles;').then(result => result.rows);
};

module.exports = fetchArticles;
