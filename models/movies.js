const pool = require('../config/config');


getAllMovies = async (req, res) => {
  try {
    const query = 'SELECT * from movies'
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
};

getMoviesById = async (req, res) => {
  try {
    const numberId = req.params.numberId
    const query = `SELECT * from movies WHERE id = ${numberId}`
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
};

getMoviesByPage = async (req, res) => {
  const page = req.params.numberpage;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const result = await pool.query('SELECT * from movies ORDER BY id LIMIT $1 OFFSET $2', [limit, offset]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
};

addMovie = async (req, res) => {
  const { title, genres, year } = req.body;

  if (!title || !genres || !year) {
    return res.status(400).json({ error: 'Input field kosong' });
  }

  try {
    const query = {
      text: 'INSERT INTO movies(title, genres, year) VALUES($1, $2, $3)',
      values: [title, genres, year],
    };

    await pool.query(query);
    res.status(201).send('Movies berhasil ditambah');
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
};

deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM movies WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Movie tidak ditemukan' });
    }
    res.json({ message: 'Movie berhasil dihapus' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server eror' });
  }
};

updateMovie = async (req, res) => {
  const id = req.params.id;
  const { title, genres, year } = req.body;

  try {
    const query = {
      text: 'UPDATE movies SET title=$1, genres=$2, year=$3 WHERE id=$4',
      values: [title, genres, year, id],
    };
    const result = await pool.query(query);
    res.json({ message: 'Movie telah diperbaharui' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

updatePhotoMovie = async (req,res) => {
  const id = req.params.id;
  const fileUrl = req.file.path;

  try{
    const query = {
     text: 'UPDATE movies SET photo = $1 WHERE id = $2 RETURNING *',
     values: [fileUrl, id]
    }
    const result = await pool.query(query);
    res.json(result.rows)
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Update Photo Movie Gagal' });

  }
}

module.exports = {
  getAllMovies,
  getMoviesById,
  getMoviesByPage,
  addMovie,
  deleteMovie,
  updateMovie,
  updatePhotoMovie
}