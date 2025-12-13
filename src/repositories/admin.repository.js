const { print } = require("../utils/logger.js");
const { adminCollectionFile } = require("../config/db.config.js");
const BaseRepository = require("./base.repository.js");

class AdminRepository extends BaseRepository {
  constructor() {
    super(adminCollectionFile);
  }

  getAllAdmins() {
    return this.findAll();
  }

  saveAdmin(admin) {
    const admins = this.findAll();

    const newAdmin = {
      id: Date.now(),
      ...admin,
      time_stamp: new Date(),
    };

    admins.push(newAdmin);
    this.save(admins);

    return newAdmin;
  }

  findByUsername(username) {
    return this.findAll().find((admin) => admin.username === username);
  }

  findById(id) {
    return this.findAll().find((admin) => admin.id === id);
  }
}

module.exports = new AdminRepository();
