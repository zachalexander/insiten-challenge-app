const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../config/database');


//Target Schema
const targetSchema = mongoose.Schema({
  companyInfo: {
    companyName: {type: String},
    location: {type: String}
    }
});

const Targets = module.exports = mongoose.model('Targets', targetSchema);
