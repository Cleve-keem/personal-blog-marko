class AdminExistError extends Error {
  constructor(message = "Admin already exist!") {
    super(message);
    this.name = "AdminExistError";
    this.statusCode = 409;
  }
}

module.exports = {
  AdminExistError,
};
