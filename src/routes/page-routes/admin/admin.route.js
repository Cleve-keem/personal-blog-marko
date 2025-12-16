const router = require("express").Router();

router.get("/dashboard", (req, res) => {
  res.marko(
    require("../../../views/pages/admin-section/dashboard.marko").default
  );
});

router.get("/article/new", (req, res) => {
  res.marko(
    require("../../../views/pages/admin-section/add-article.marko").default
  );
});

module.exports = router;
