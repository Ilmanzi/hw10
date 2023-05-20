const pool = require('../config/config')

getAllUsers = async (req,res) => {
    try {
    const query = 'SELECT * from users'
    const result = await pool.query(query);
    res.json(result.rows);
    } catch (err) {
    console.error(err);
    res.send('Error ' + err);
    }
}

getUserById = async (req, res) => {
    try {
      const numberId = req.params.numberId
      const query = `SELECT * from users WHERE id = ${numberId}`
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.send('Error ' + err);
    }
  };

getUsersByPage = async (req, res) => {
    const page = req.params.numberpage;
    const limit = 10;
    const offset = (page - 1) * limit;
  
    try {
      const result = await pool.query('SELECT * from users ORDER BY id LIMIT $1 OFFSET $2', [limit, offset]);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.send('Error ' + err);
    }
  };

  updateUser = async (req, res) => {
    const id = req.params.id;
    const { email, gender, password, role } = req.body;
  
    try {
      const query = {
        text: 'UPDATE users SET email=$1, gender=$2, password=$3, role=$4 WHERE id=$5',
        values: [email, gender, password, role, id],
      };
      const result = await pool.query(query);
      res.json({ message: 'User telah diperbaharui' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    getAllUsers,
    getUserById,
    getUsersByPage,
    updateUser
}