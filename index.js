// Import libs
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Initialize Express
const app = express()

//Initialize Mongo DB
// mongoose.connect('mongodb://localhost/kipreco');

//MIDDLEWARES
//Parse application/json
app.use(bodyParser.json())

// ROUTES
// Index route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Port config listen
app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
