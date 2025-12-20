const router = require("express").Router();
const ArticleService = require("../../../services/article.service.js");
const dashboardPage =
  require("../../../views/pages/admin-section/dashboard.marko").default;

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

module.exports = router;
