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
  },
  keyContact1: {
    type: String
  },
  keyContact2: {
    type: String
  },
  financialPerformance: {
    type: String
  },
  totalRevenue: {
    type: Number
  }
});

const Targets = module.exports = mongoose.model('Targets', targetSchema);
