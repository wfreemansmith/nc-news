const {
  selectArticles,
  selectArticleById,
  updateVote,
} = require("../models/articles.models");

const getArticles = (req, res, next) => {
  const {topic, sort_by, order} = req.query
  selectArticles(topic, sort_by, order)
    .then((articles) => {
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
