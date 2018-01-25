const express = require('express')
const app = express()
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

// Using mongoose to connect to the config file, and using uri path
mongoose.connect(config.uri, (err) => {
  if(err) {
    console.log('Could not connect to database: ', err);
  } else {
    console.log('Connected to database:', config.db);
  }
});

// Using the production file in /dist to show on front-end
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, () => console.log('The Insiten App is listening on port 8080!'))
