const auth = require('./auth.routes')
const user = require('./user.routes')
const farmer = require('./farmer.routes')

module.exports = {
  auth,
  user,
  farmer,
}
