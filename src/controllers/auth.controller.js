const {
  adminSignupSchema,
  adminSigninSchema,
} = require("../validators/auth.validator.js");
const { AdminExistError } = require("../utils/expections/admin.expection.js");
const { errorResponse, successResponse } = require("../utils/response.js");
const AdminService = require("../services/admin.service.js");
const { print } = require("../utils/logger.js");

class AuthController {
  static async signUpAuthController(req, res) {
    try {
      const { error, value } = adminSignupSchema.validate(req.body);

      if (error) {
        return errorResponse(res, 400, error.details[0].message, error.details);
      }

      const admin = await AdminService.createAdmin(value);
      successResponse(res, 201, "Admin created successfully!", admin);

      res.redirect("/admin/dashboard");
    } catch (err) {
      if (err instanceof AdminExistError) {
        return errorResponse(res, 409, err.message);
      }
      console.error("error from signup auth controler", err);
      return errorResponse(res, 500, "Internal server error", err.message);
    }
  }

  static async signInAuthController(req, res) {
    const { username, password } = req.body;

    try {
      const { error, value } = adminSigninSchema.validate(req.body);
      if (error) {
        return errorResponse(res, 400, error.details[0].message, error.details);
      }

      const admin = await AdminService.findAdminByUsername(username);
      if (!admin || (password && password !== admin.password))
        return errorResponse(res, 401, "Invaild username or password");

      // if (password && password !== admin.password) {
      //   return errorResponse(res, 401, "Invaild username or password");
      // }
      req.session.adminId = admin.id;

      return successResponse(res, 200, "Login successful!", admin);
    } catch (err) {
      if (err instanceof AdminExistError) {
        return errorResponse(res, 409, err.message);
      }
      print("error from signin auth controller:", err.message);
      return errorResponse(res, 500, "Internal server error", err.message);
    }
  }
}

module.exports = AuthController;
