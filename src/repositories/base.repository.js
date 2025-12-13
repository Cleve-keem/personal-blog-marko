class BaseRepository {
  constructor(filePath) {
    if (!filePath) {
      throw new Error("File path is required");
    }
    this.filePath = filePath;
  }

  static findAll() {
    if (!fs.existsSync(this.filePath)) return [];
    
    return JSON.parse(
      fs.readFileSync(this.filePath, "utf-8", { recursive: true })
    );
  }

  static save(model) {
    fs.writeFileSync(this.filePath, JSON.stringify(model, null, 2));
  }
}

module.exports = BaseRepository;
