const express = require('express');
const router = express.Router();
const Targets = require('../models/targets');
const config = require('../config/database');

module.exports = (router) => {
    // Creating company information and adding to database
    router.post('/newTarget', (req, res) => {
      if(!req.body.status) {
      res.json({success: false, message: 'Acquisition status is required.'});
      } else {
        if(!req.body.companyName){
          res.json({success: false, message: 'Company name is required.'});
        } else {
            if(!req.body.location){
            res.json({success: false, message: 'Company location is required.'});
            } else {
                if(!req.body.keyContact1){
                  res.json({success: false, message: 'At least one contact is required.'});
                } else {
                  if(!req.body.financialPerformance){
                    res.json({success: false, message: 'Please provide a quick note about financial performance.'});
                  } else {
                    const newTarget = new Targets ({
                      status: req.body.status,
                      companyName: req.body.companyName,
                      location: req.body.location,
                      keyContacts: [
                        {
                          keyContact1: req.body.keyContact1,
                          keyContact2: req.body.keyContact2
                        }
                      ],
                      financialPerformance: req.body.financialPerformance
                    });
                  newTarget.save((err) => {
                    if(err) {
                      res.json({success: false, message: err})
                  } else {
                    res.json({success: true, message: 'Company name and location have been saved!'});
                  }
              });
            }
          }
        }
      }
    }
  });
  // End of creating company information and adding to database

  // Get all targets in the database
  router.get('/allTargets', (req, res) => {
    Targets.find({}, (err, targets) => {
      if (err) {
        res.json({success: false, message: err});
      } else {
        if (!targets) {
          res.json({success: false, msg: 'No targets to populate.'});
        } else {
          res.json({success: true, targets: targets});
        }
      }
    }).sort({'_id': -1});
  });
// End of getting all targets in database

  return router;
}
