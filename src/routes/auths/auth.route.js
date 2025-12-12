const router = require("express").Router();
const AuthController = require("../../controllers/auth.controller.js");
const { print } = require("../../utils/logger.js");

router.post("/signup", AuthController.signUpAuthController);
router.post("/signin", AuthController.signInAuthController);

module.exports = router;
