const AdminService = require("../services/admin.service.js");

async function authMiddleware(req, res, next) {
  try {
    const adminId = req.session.adminId;

    if (!adminId) {
      return res.redirect("/admin/auth/signin");
    }

    const admin = await AdminService.findAdminById(adminId);
    if (!admin) {
      req.session.destroy();
      return res.redirect("/admin/auth/signin");
    }

    req.admin = admin;
    next();
  } catch (err) {
    return res.redirect("/admin/auth/signin");
  }
}

module.exports = authMiddleware;
