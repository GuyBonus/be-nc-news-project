const fetchTopics = require('../models/topics.model');

const getTopics = (exports.getTopics = (req, res, next) => {
  const { topics } = req.params;
  fetchTopics(topics)
    .then(topics => res.status(200).send({ topics }))
    .catch(next);
});

module.exports = getTopics;
