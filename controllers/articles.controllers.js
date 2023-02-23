const {
  selectArticles,
  selectArticleById,
  updateVote,
  checkTopic,
} = require("../models/articles.models");

const getArticles = (req, res, next) => {
  const { topic, sort_by, order } = req.query;

  const promise1 = selectArticles(topic, sort_by, order);
  const promise2 = topic ? checkTopic(topic) : "";

  Promise.all([promise1, promise2])
    .then(([articles]) => {
      res.status(200).send({ articles });
    })
    .catch((err) => {
      next(err);
    });
};

const getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  selectArticleById(article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};

const patchVote = (req, res, next) => {
  const { inc_votes } = req.body;
  const { article_id } = req.params;
  updateVote(inc_votes, article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getArticles, getArticleById, patchVote };
