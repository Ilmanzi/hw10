const pool = require('../config/config');
const user = require('../models/user')

getAllUsers = async (req,res) => {
    await user.getAllUsers(req,res);
};

getUserById = async (req,res) => {
    await user.getUserById(req,res);
};

updateUser = async (req,res) => {
    await user.updateUser(req,res);
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser
}