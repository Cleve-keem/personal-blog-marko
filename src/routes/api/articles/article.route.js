const router = require("express").Router();
const ArticleController = require("../../../controllers/article.controller.js");

router.post("/article/new", ArticleController.addNewArticle);
router.post("/article/edit/:id", ArticleController.addNewArticle);

module.exports = router;
