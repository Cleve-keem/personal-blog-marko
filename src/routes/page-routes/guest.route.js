const { print } = require("../../utils/logger.js");
const router = require("express").Router();
const articleTemplate =
  require("../../views/pages/guest-section/article.marko").default;

router.get("/article/:id", (req, res) => {
  const { id } = req.params;
  res.marko(articleTemplate, {
    message: `Article`,
    id,
  });
});

module.exports = router;
