const { print } = require("../../utils/logger.js");
const router = require("express").Router();
const ArticleService = require("../../services/article.service.js");
const articleTemplate =
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

router.get("/article/:id", (req, res) => {
  const { id } = req.params;
  res.marko(articleTemplate, {
    message: `Article`,
    id,
  });
});

module.exports = router;
