// require("../config/db.config.js");

const fs = require("fs");
const path = require("path");
const { print } = require("../../utils/logger.js");
const { admin_collection_path } = require("../../config/db.config.js");

const admin_collection = path.join(admin_collection_path, "collection.json");

class AdminRepository {
  static getAllAdmin() {
    const admins = fs.readFileSync(admin_collection);
    
  }
}
