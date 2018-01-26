const express = require('express');
const router = express.Router();
const Targets = require('../models/targets');
const config = require('../config/database');

module.exports = (router) => {

  // Add new company information to database
  router.post('/newTarget', (req, res) => {
    if(!req.body.companyName){
      res.json({success: false, message: 'Company name is required.'});
    } else {
        if(!req.body.location){
        res.json({success: false, message: 'Company location is required.'});
        } else {
            const newTarget = new Targets ({
              companyName: req.body.companyName,
              location: req.body.location
            });
            newTarget.save((err) => {
              if(err) {
                res.json({success: false, message: err})
            } else {
              res.json({success: true, message: 'Company Name saved!'});
            }
          });
        }
      }
  });
  return router;
}
