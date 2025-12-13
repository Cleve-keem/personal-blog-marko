const AdminRepository = require("../repositories/admin.repository.js");
const { AdminExistError } = require("../utils/expections/admin.expection.js");

class AdminService {
  static async createAdmin(admin) {
    const adminExist = await AdminRepository.findByUsername(admin.username);
    if (adminExist) {
      throw new AdminExistError();
    }

    return AdminRepository.saveAdmin(admin);
  }

  static async findAdminByUsername(username) {
    const admin = await AdminRepository.findByUsername(username);
    if (!admin) {
      throw new AdminExistError("Admin not found!");
    }
    return admin;
  }

  static findAdminById(id) {
    return AdminRepository.findById(id);
  }

  static getAdmins() {
    return AdminRepository.getAllAdmins();
  }
}

module.exports = AdminService;
