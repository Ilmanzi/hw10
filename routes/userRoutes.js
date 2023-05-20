const express = require('express');
const userController = require('../controllers/userController')

const userRoute = express.Router()

userRoute.get('/users', userController.getAllUsers)
userRoute.get('/users/id/:numberId', userController.getUserById)
userRoute.put('/users/update/:id', userController.updateUser)

module.exports = userRoute;