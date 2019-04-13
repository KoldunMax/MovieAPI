const movieRepository = require("../repositories/movieRepository");

class MovieService {
  getAllMovies() {
    return movieRepository.findAll();
  }
  addMovie(movie) {
    return movieRepository.add(movie);
  }
  getMovieById(id) {
    return movieRepository.findById({_id: id});
  }
  updateMovie(id, movie) {
    return movieRepository.update({_id: id}, movie);
  }
  deleteMovie(id) {
    return movieRepository.delete({_id: id});
  }
}

module.exports = new MovieService();
