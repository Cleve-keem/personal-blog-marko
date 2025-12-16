require("@marko/compiler/register");
require("./src/config/db.config.js");

const express = require("express");
const markoMiddleware = require("@marko/express").default;
const session = require("express-session");
const guestPagesRoutes = require("./src/routes/page-routes/guest.route.js");
const authPagesRoutes = require("./src/routes/page-routes/admin/auth.route.js");
const adminPagesRoutes = require("./src/routes/page-routes/admin/admin.route.js");
const authRoutes = require("./src/routes/api/auth.route.js");
const authMiddleware = require("./src/middlewares/authMiddleware.js");
const guestOnlyMiddleware = require("./src/middlewares/guestOnlyMiddleware.js");
const indexPage = require("./src/views/pages/guest-section/home.marko").default;
const { print } = require("./src/utils/logger.js");
const keys = require("./src/config/keys.js");

// create express server
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(markoMiddleware());
server.use(express.static("src/public"));

server.use(
  session({
    secret: keys.session.secret,
    resave: false,
    saveUninitialized: false,
    cookies: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

server.get("/", (req, res) => {
  res.marko(indexPage, { title: "Home" });
});

server.use(guestPagesRoutes);

server.use("/admin/auth", guestOnlyMiddleware, authPagesRoutes);
server.use("/admin/auth", guestOnlyMiddleware, authRoutes);

// protected routes
server.use("/admin", authMiddleware, adminPagesRoutes);

// listen for request
const port = 8080;
server.listen(port, () => {
  print("server is listening on port:", port);
});
