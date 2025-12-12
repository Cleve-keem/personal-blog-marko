const { print } = require("../utils/logger.js");
const fs = require("fs");
const path = require("path");

const database_name = "database";
const database_path = path.join(process.cwd(), database_name);
const admin_collection_path = path.join(database_path, "admin");
const article_collection_path = path.join(database_path, "article");

async function createDatabase() {
  if (!fs.existsSync(database_name)) {
    fs.mkdirSync(database_path);
    print("✔ database folder created");
    fs.mkdirSync(admin_collection_path);
    print("✔ admin collection folder created");
    fs.mkdirSync(article_collection_path);
    print("✔ article folder created");
  }
}

createDatabase();
// print(fs);
