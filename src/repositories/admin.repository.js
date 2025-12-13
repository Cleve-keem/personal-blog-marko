const fs = require("fs");
const path = require("path");
const { print } = require("../utils/logger.js");
const { adminCollectionFile } = require("../config/db.config.js");
const BaseRepository = require("./base.repository.js");

class AdminRepository extends BaseRepository {
  constructor() {
    super(adminCollectionFile);
  }

  static getAllAdmins() {
    return this.findAll();
  }

  static saveAdmin(admin) {
    const admins = this.findAll();
    admins.push(admin);
    this.save(admins);
  }

  static findByUsername(username) {
    return this.findAll().find((admin) => admin.username === username);
  }
}

module.exports = AdminRepository;
