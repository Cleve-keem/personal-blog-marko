const { adminSignupSchema } = require("../validators/auth.validator.js");
const { print } = require("../utils/logger.js");

class AuthController {
  static signUpAuthController(req, res) {
    const { error, value } = adminSignupSchema.validate(req.body);
    if (error) {
      return print(error.details[0].message);
    }
    print("Validation successful!", value);
  }

  static signInAuthController(req, res) {
    print(req.body);
    res.send(req.body);
  }
}

module.exports = AuthController;
