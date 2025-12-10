const { print } = require("../../utils/logger.js");
const router = require("express").Router();

const signupTemplate =
  require("../../views/pages/admin-section/auth/signup.marko").default;
const signinTemplate =
  require("../../views/pages/admin-section/auth/signin.marko").default;

router.get("/signup", (req, res) => {
  res.marko(signupTemplate);
});

router.get("/signin", (req, res) => {
  res.marko(signinTemplate);
});

module.exports = router;
