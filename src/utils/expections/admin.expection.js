class AdminExistError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Admin exist error";
  }
}

module.exports = {
  AdminExistError,
};
