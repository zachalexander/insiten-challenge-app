// Using crypto to create secret key
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://localhost:27017/insiten-targets',
  secret: crypto,
  db: 'insiten-targets' 
}
