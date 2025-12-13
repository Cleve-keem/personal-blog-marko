const router = require("express").Router();

router.get("/signup", (req, res) => {
  res.marko(
    require("../../../views/pages/admin-section/auth/signup.marko").default
  );
});

router.get("/signin", (req, res) => {
  res.marko(
    require("../../../views/pages/admin-section/auth/signin.marko").default
  );
});

module.exports = router;
