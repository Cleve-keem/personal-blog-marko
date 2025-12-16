const router = require("express").Router();
const ArticleController = require("../../../controllers/article.controller.js");

router.post("/article/new", ArticleController.addNewArticle);

module.exports = router;
