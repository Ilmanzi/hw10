const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const pool = require('./config/config');
const movierouters = require('./routes/moviesRoutes')
const userrouters = require('./routes/userRoutes')
const PORT = 3000;
const dotenv = require('dotenv');
dotenv.config()

const app = express();
app.use(morgan('combined'))

app.use(bodyParser.json());

app.use(movierouters)
app.use(userrouters)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  });