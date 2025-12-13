const router = require("express").Router();

const dashboardPageTemplate =
  require("../../../views/pages/admin-section/dashboard.marko").default;

router.get("/dashboard", (req, res) => {
  res.marko(dashboardPageTemplate);
});

module.exports = router;
