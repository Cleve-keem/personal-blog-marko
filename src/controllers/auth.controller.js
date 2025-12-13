const { adminSignupSchema } = require("../validators/auth.validator.js");
const AdminRepository = require("../repositories/admin.repository.js");
const { print } = require("../utils/logger.js");

class AuthController {
  static signUpAuthController(req, res) {
    const { error, value } = adminSignupSchema.validate(req.body);

    if (error) {
      return print(error.details[0].message);
    }

    const result = createAdmin(value);
  }

  static signInAuthController(req, res) {
    print(req.body);
    res.send(req.body);
  }
}

module.exports = AuthController;