// Using crypto to create secret key
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://localhost:27017/insiten-targets',
  // uri: 'mongodb://zdalexander:Biology512@ds221148.mlab.com:21148/insiten-challenge-app', //production database
  secret: crypto,
  db: 'insiten-targets'
}
