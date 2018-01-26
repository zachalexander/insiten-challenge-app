const mongoose = require('mongoose');
const config = require('../config/database');


//User Schema
const targetSchema = mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  companyInfo: {
    type: String
    required: true
  },
  keyContacts: [
    {
      contact1: {type: String, required: true},
      contact2: {type: String},
      contact3: {type: String},
      contact4: {type: String}
    }
  ],
  expenses: {
    type: Number,
    required: true
  },
  revenue: {
    type: Number,
    required: true
  }
});

const Targets = module.exports = mongoose.model('Targets', targetSchema);
