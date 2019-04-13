const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
  title: String,
  releaseYear: Number,
	format: String,
  stars: [String]
}, {
	versionKey: false
});

module.exports = mongoose.model('Movie', Movie);