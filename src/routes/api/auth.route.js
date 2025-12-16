const router = require("express").Router();
const AuthController = require("../../controllers/auth.controller.js");
const { print } = require("../../utils/logger.js");

router.post("/signup", AuthController.signUpAuthController);
router.post("/signin", AuthController.signInAuthController);
router.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect("/admin/dashboard");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});


module.exports = router;
