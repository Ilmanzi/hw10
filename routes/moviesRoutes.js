const express = require('express');
const movieController = require('../controllers/moviesController');
const multer = require('multer');
const storage = require('../config/cloudinary')

const upload = multer({storage: storage})

const movieRoute = express.Router();

movieRoute.get('/movies', movieController.getAllMovies);
movieRoute.get('/movies/id/:numberId', movieController.getMoviesById);
movieRoute.get('/movies/page/:numberpage', movieController.getMoviesByPage);
movieRoute.post('/movies/add', movieController.addMovie);
movieRoute.delete('/movies/del/:id', movieController.deleteMovie);
movieRoute.put('/movies/put/:id', movieController.updateMovie);
movieRoute.put('/movies/updatep/:id', upload.single('photo'), movieController.updatePhotoMovie)

module.exports = movieRoute;
