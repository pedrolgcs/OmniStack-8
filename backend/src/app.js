const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

/* create app */
const app = express()

/* connect to database */
mongoose.connect('mongodb://localhost:27017/tindev',
  { useNewUrlParser: true, useCreateIndex: true }
)

/* middlewares */
app.use(express.json())
app.use(cors())

/* import Routes */
require('./routes')(app)

module.exports = app
