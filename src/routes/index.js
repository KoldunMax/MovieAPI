const movie = require("./movie");

module.exports = app => {
  app.use("/api/movies", movie);
};