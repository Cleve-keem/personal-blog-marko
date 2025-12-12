const fs = require("fs");
const path = require("path");
const { print } = require("../utils/logger.js");

const databasePath = path.join(process.cwd(), "database");
const adminCollectionPath = path.join(databasePath, "admin");
const articleCollectionPath = path.join(databasePath, "article");

const adminCollectionFile = path.join(adminCollectionPath, "collection.json");
const articleCollectionFile = path.join(
  articleCollectionPath,
  "collection.json"
);

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    print(`✔ Created folder: ${dirPath}`);
  }
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    print(`✔ Created file: ${filePath}`);
  }
}

function initDatabase() {
  ensureDir(databasePath);
  ensureDir(adminCollectionPath);
  ensureDir(articleCollectionPath);

  ensureFile(adminCollectionFile);
  ensureFile(articleCollectionFile);
}

initDatabase();

module.exports = {
  adminCollectionFile,
  articleCollectionFile,
};
