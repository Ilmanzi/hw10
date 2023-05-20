const pool = require('../config/config');
const movie = require('../models/movies')

exports.getAllMovies = async (req, res) => {
    await movie.getAllMovies(req,res);
    };

exports.getMoviesById = async (req, res) => {
    await movie.getMoviesById(req,res);
    };

exports.getMoviesByPage = async (req, res) => {
    await movie.getMoviesByPage(req,res);
};

exports.addMovie = async (req, res) => {
    await movie.addMovie(req,res);
};

exports.deleteMovie = async (req, res) => {
    await movie.deleteMovie(req, res);
};

exports.updateMovie = async (req, res) => {
    await movie.updateMovie(req, res);
};

exports.updatePhotoMovie = async (req, res) => {
    await movie.updatePhotoMovie(req,res);
}
