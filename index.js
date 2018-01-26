const express = require('express')
const app = express()
const mongoose = require('mongoose'); // Node tool for MongoDB
const config = require('./config/database');
const path = require('path');
const router = express.Router(); // Creates a new router object.
const targets = require('./routes/targets')(router);
const bodyParser = require('body-parser'); // Allows us to parse body input from user on back-end

// Using mongoose to connect to the config file, and using uri path
mongoose.connect(config.uri, (err) => {
  if(err) {
    console.log('Could not connect to database: ', err);
  } else {
    console.log('Connected to database:', config.db);
  }
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
//parse application/json
app.use(bodyParser.json());

// Using the production file in /dist to show on front-end
app.use(express.static(__dirname + '/dist'));
app.use('/targets', targets);

// allow any route past / to redirect back to index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// launch to local server
app.listen(8080, () => console.log('The Insiten App is listening on port 8080!'))
