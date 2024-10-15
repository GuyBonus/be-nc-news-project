const db = require('../db/connection');

const fetchTopics = () => {
  return db
    .query('SELECT * FROM topics;')
    .then(result => result.rows)
    .catch(err => console.log(err));
};

module.exports = fetchTopics;
