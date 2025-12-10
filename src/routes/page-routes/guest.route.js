const { print } = require("../../utils/logger.js");
const router = require("express").Router();

router.get("/article/:id", (req, res) => {
  res.send(`Article Page ${req.params.id}`);
});

module.exports = router;
