// Import libs
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//Initialize Express
const app = express()

//Enable server access within the same place
app.use(cors())

//Initialize Mongo DB
// mongoose.connect('mongodb://localhost/kipreco');

//MIDDLEWARES
//Parse application/json
app.use(bodyParser.json())

// ROUTES
// Index route
app.get('/', (req, res) => {
  res.status(200).send({
    "email": "renan@mastertech.tech",
    "pass": "asbasjdkasnjkd"
  })
});

// Port config listen
app.listen(3001, () => {
  console.log('Listening on port 3001!')
});
