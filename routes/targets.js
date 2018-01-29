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
                      keyContact1: req.body.keyContact1,
                      keyContact2: req.body.keyContact2,
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

// Finding a single target entry in the database
router.get('/singleTarget/:id', (req, res) => {
  if (!req.params.id) {
    res.json({success: false, message: 'No target ID was provided.'});
  } else {
    Targets.findOne({ _id: req.params.id }, (err, targets) => {
      if (err) {
          res.json({success: false, message: 'Not a valid target ID.'});
      } else {
        if (!targets) {
          res.json({success: false, message: 'Target not found.'});
        } else {
          res.json({ success: true, targets: targets});
        }
      }
    });
  }
});
// End of finding a single target entry in the database

// Updating data in the database for a specific target
router.put('/updateTarget', (req, res) => {
  if (!req.body._id) {
    res.json({success: false, msg: 'No target ID provided.'});
  } else {
    Targets.findOne({_id: req.body._id}, (err, target) => {
      if (err) {
        res.json({success: false, msg: 'Not a valid target ID.'});
      } else {
        if (!target) {
          res.json({success: false, msg: 'Target ID was not found.'});
        } else {
            target.status = req.body.status;
            target.companyName = req.body.companyName;
            target.location = req.body.location;
            target.keyContact1 = req.body.keyContact1;
            target.keyContact2 = req.body.keyContact2;
            target.financialPerformance = req.body.financialPerformance;
            target.save((err) => {
              if (err) {
                res.json({success: false, message: 'Sorry, we could not save your edits.'});
              } else {
                res.json({success: true, message: 'Your target has been updated!'});
              }
          });
        }
      }
    });
  }
});

// End of updating data in the database for a specific target

// Find a specific target entry and delete it from database
router.delete('/deleteTarget/:id', (req, res) => {
  if (!req.params.id) {
    res.json({success: false, message: 'No target ID provided.'});
  } else {
    Targets.findOne({_id: req.params.id}, (err, targets) => {
      if (err) {
        res.json({success: false, message: 'Invalid ID.'});
      } else {
        if (!targets) {
          res.json({success: false, message: 'Target was not found.'});
        } else {
          targets.remove((err) => {
            if (err) {
              res.json({success: false, message: err});
            } else {
              res.json({success: true, message: 'This target was successfully deleted!'});
            }
          });
        }
      }
    });
  }
});

// End of find a specific target entry and delete it from database

  return router;
}
