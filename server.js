require("@marko/compiler/register");

const express = require("express");
const markoMiddleware = require("@marko/express").default;
const { print } = require("./src/utils/logger.js");
const guestRoutes = require("./src/routes/page-routes/guest.route.js");
const homeTemplate =
  require("./src/views/pages/guest-section/home.marko").default;

// create express server
const server = express();
server.use(markoMiddleware());
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.marko(homeTemplate, { title: "Home" });
});

server.use(guestRoutes);

// listen for request
const port = 8080;
server.listen(port, () => {
  print("server is listening on port:", port);
});
