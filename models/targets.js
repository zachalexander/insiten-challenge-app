const mongoose = require('mongoose');
const config = require('../config/database');


//Target Schema
const targetSchema = mongoose.Schema({
  status: {
    type: String
  },
  companyName: {
    type: String
  },
  location: {
    type: String
  }
});

const Targets = module.exports = mongoose.model('Targets', targetSchema);
