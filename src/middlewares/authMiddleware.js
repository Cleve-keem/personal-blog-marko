function authMiddleware(req, res, next) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    res.redirect("/admin/auth/signup");
  }

  next();
}

module.exports = authMiddleware;
