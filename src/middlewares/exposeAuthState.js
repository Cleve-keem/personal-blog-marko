function exposeAuthState(req, res, next) {
  res.locals.$global = res.locals.$global || {};

  res.locals.$global.auth = {
    isAuthenticated: Boolean(req.session.adminId),
    adminId: req.session.adminId || null,
  };

  next();
}

module.exports = exposeAuthState;
