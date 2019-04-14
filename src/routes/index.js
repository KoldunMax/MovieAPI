const movie = require("./movie/movie");

module.exports = app => {
  app.use("/api/movies", movie);
};