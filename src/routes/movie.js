const express = require('express');
const movie = express.Router();
const movieService = require('../services/movie');

movie.route('/')
	.get((req, res) => {
		movieService.getAllMovies()
			.then(movies => {
				res.send(movies);
			})
			.catch(err => {
				console.log(err);
			});
	})
	.post((req, res) => {
		movieService.addMovie(req.body)
			.then(movie => {
				res.send(movie);
			})
			.catch(err => {
				console.log(err);
			});
	});
	

movie.route('/:id')
	.put((req, res) => {
		movieService.updateMovie(req.params.id, req.body)
			.then(movie => {
				res.send(movie);
			})
			.catch(err => {
				console.log(err);
			});
	})
	.get((req, res) => {
		movieService.getMovieById(req.params.id)
			.then(movie => {
				res.send(movie);
			})
			.catch(err => {
				console.log(err);
			});
	})
	.delete((req, res) => {
		movieService.deleteMovie(req.params.id)
			.then(movie => {
				res.send(movie);
			})
			.catch(err => {
				console.log(err);
			});
	});