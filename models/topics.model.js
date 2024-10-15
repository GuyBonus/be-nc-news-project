const db = require('../db/connection');

const fetchTopics = () => {
  return db
    .query('SELECT * FROM topics;')
    .then(result => result.rows)
    .catch(err => err);
};

module.exports = fetchTopics;
