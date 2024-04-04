const { verifySignUp } = require('../middleware')
const controller = require('../controllers/auth.controller')

module.exports = function (app) {
  app.use(function (_, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.post(
    '/api/signup/backpacker',
    [verifySignUp.checkDuplicateEmail],
    controller.signupBackpacker
  )

  app.post(
    '/api/signup/farmer',
    [verifySignUp.checkDuplicateEmail],
    controller.signupFarmer
  )

  app.post('/api/signin', controller.signin)
}
