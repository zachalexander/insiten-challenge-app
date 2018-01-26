const Targets = require('../models/targets');
const config = require('../config/database');

module.exports = (router) => {
  router.post('/newTarget', (req, res) => {
    if(!req.body.companyName){
      res.json({success: false, message: 'Company name is required.'});
    } else {
      const newTarget = new Targets ({
        companyInfo: {
            companyName: req.body.companyName,
            location: req.body.location
        }
      });
    newTarget.save((err) => {
      if(err) {
        res.json({success: false, message: err})
      } else {
        res.json({success: true, message: 'Company Name saved!'});
      }
    });
    }
  });

  return router;
}
