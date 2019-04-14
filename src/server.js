const express = require("express"),
  app = express(),
  server = require("http").Server(app);

// load config
require("dotenv").config();
const config = require("./config/env");

require("./middleware")(app);
require("./routes")(app);
require("./middleware/errorHandlers")(app);

server.listen(config.port, () => {
  console.log(`Server is running on ${config.host}:${config.port}`);
});

module.exports = app;

