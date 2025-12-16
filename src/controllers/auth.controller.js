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

      await AdminService.createAdmin(value);

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
    const adminId = req.session.adminId;

    try {
      const adminExist = await AdminService.findAdminById(adminId);

      if (adminExist) {
        return res.redirect("/admin/dashboard");
      }

      const { error, value } = adminSigninSchema.validate(req.body);
      if (error) {
        return errorResponse(res, 400, error.details[0].message, error.details);
      }

      const admin = await AdminService.findAdminByUsername(username);
      if (!admin || (password && password !== admin.password)) {
        return errorResponse(res, 401, "Invalid username or password");
      }

      req.session.adminId = admin.id;

      req.session.save((err) => {
        if (err) {
          print("Session save error:", err);
          return errorResponse(res, 500, "Login failed");
        }
        res.redirect("/admin/dashboard"); 
      });
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
