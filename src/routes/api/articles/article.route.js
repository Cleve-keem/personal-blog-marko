const router = require("express").Router();
const ArticleController = require("../../../controllers/article.controller.js");

router.post("/article/new", ArticleController.addNewArticle);
router.post("/article/edit/:id", ArticleController.addNewArticle);
router.delete("/article/:id", ArticleController.removeArticle);

module.exports = router;
