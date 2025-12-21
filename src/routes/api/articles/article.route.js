const router = require("express").Router();
const ArticleController = require("../../../controllers/article.controller.js");

router.post("/article/new", ArticleController.addNewArticle);
router.post("/article/edit/:id", ArticleController.updateArticle);
router.post("/article/delete/:id", ArticleController.removeArticle);

module.exports = router;
