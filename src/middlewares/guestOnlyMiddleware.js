function guestOnlyMiddleware(req, res, next) {
  if (req.session.adminId) {
    return res.redirect("/admin/dashboard");
  }
  next();
}

module.exports = guestOnlyMiddleware;
