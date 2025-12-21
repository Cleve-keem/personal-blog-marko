const router = require("express").Router();
const ArticleService = require("../../../services/article.service.js");
const dashboardPage =
  require("../../../views/pages/admin-section/dashboard.marko").default;
const editPage =
  require("../../../views/pages/admin-section/edit-article.marko").default;

router.get("/dashboard", async (req, res) => {
  try {
    const articles = await ArticleService.fetchArticles();
    return res.marko(dashboardPage, { articles });
  } catch (err) {
    console.error("Dashboard error:", err);
    return res.status(500).send("Error loading dashboard");
  }
});

router.get("/article/new", (req, res) => {
  res.marko(
    require("../../../views/pages/admin-section/add-article.marko").default
  );
});

router.get("/article/edit/:id", async (req, res) => {
  const { id } = req.params;
  const article = await ArticleService.findArticleById(id);
  res.marko(editPage, { article });
});

module.exports = router;
