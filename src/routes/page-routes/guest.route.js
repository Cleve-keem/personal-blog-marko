const router = require("express").Router();
const ArticleService = require("../../services/article.service.js");
const articlePage =
  require("../../views/pages/guest-section/article.marko").default;
const homePage = require("../../views/pages/guest-section/home.marko").default;

router.get("/", async (req, res) => {
  try {
    const articles = await ArticleService.fetchArticles();
    return res.marko(homePage, { title: "Home", articles });
  } catch (err) {
    console.error("Error from guest home route:", err.message);
    return res.status(500).send("Error loading Home page");
  }
});

router.get("/article/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const article = await ArticleService.findArticleById(id);
    return res.marko(articlePage, {
      message: `Article`,
      id,
      article,
    });
  } catch (err) {
    console.error("Error from guest dynamic article route:", err.message);
    return res.status(500).send("Error loading article page");
  }
});

module.exports = router;
