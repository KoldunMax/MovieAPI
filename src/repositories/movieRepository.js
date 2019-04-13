// Special movie methods are here

const Repository = require('./generalRepository');
const MovieModel = require('../models/movie');

class MovieRepository extends Repository {
  constructor() {
    super();
    this.model = MovieModel;
  }
}

module.exports = new MovieRepository();
