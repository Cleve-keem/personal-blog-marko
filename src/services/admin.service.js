const AdminRepository = require("../repositories/admin.repository.js");

class AdminService {
  static createAdmin(admin) {
    const adminExist = findByUsername(admin.username);

    if (adminExist) {
      return {
        success: false,
        error: new AdminExistError("Admin already exist!"),
      };
    }

    return {
      success: true,
      data: AdminRepository.saveAdmin(admin),
    };
  }

  static getAdmins() {
    return {
      success: true,
      data: AdminRepository.getAllAdmins(),
    };
  }
}

module.exports = AdminService;
