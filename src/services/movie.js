const movieRepository = require("../repositories/movieRepository");
const fs = require('fs');
const readline = require('linebyline');

class MovieService {
  getAllMovies() {
    return movieRepository.findAll();
  }
  addMovie(movie) {
    return movieRepository.add(movie);
  }
  addFile(file) {
    let arrayOfObjects = [];
    let tempObj = {};
    file.toString("utf8").split('\n\n').map(obj => {
        obj.toString("utf8").split('\n').map(prop => {
            let val = prop.toString("utf8").split(': ');
            switch(true) {
              case val[0]==='Title': {
                tempObj = {...tempObj, title: val[1]}
                break;
              }
              case val[0]==='Release Year': {
                tempObj = {...tempObj, releaseYear: val[1]}
                break;
              }
              case val[0]==='Format': {
                tempObj = {...tempObj, format: val[1]}
                break;
              }
              case val[0]==='Stars': {
                tempObj = {...tempObj, stars: val[1].split(', ')}
                arrayOfObjects.push(tempObj)
                tempObj = {};
                break;
              }
            }
        })
    })
    return movieRepository.add(arrayOfObjects);
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

function convert(file) {

  return new Promise((resolve, reject) => {

      const stream = fs.createReadStream(file);
      // Handle stream error (IE: file not found)
      stream.on('error', reject);

      const reader = readline.createInterface({
          input: stream
      });

      const array = [];

      reader.on('line', line => {
          array.push(JSON.parse(line));
      });

      reader.on('close', () => resolve(array));
  });
}

module.exports = new MovieService();
