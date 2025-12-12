require("@marko/compiler/register");
require("./src/config/db.config.js");

const express = require("express");
const markoMiddleware = require("@marko/express").default;
const { print } = require("./src/utils/logger.js");
const guestRoutes = require("./src/routes/page-routes/guest.route.js");
const adminRoutes = require("./src/routes/page-routes/admin.route.js");
const authRoutes = require("./src/routes/auths/auth.route.js");
const homeTemplate =
  require("./src/views/pages/guest-section/home.marko").default;

// create express server
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(markoMiddleware());
server.use(express.static("src/public"));

server.get("/", (req, res) => {
  res.marko(homeTemplate, { title: "Home" });
});

server.use(guestRoutes);
server.use("/admin/auth", adminRoutes);
server.use("/admin/auth", authRoutes);

// listen for request
const port = 8080;
server.listen(port, () => {
  print("server is listening on port:", port);
});
