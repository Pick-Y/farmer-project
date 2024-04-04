const { authJwt } = require('../middleware')
const controller = require('../controllers/farmer.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.get('/api/farmer/jobPosts', [authJwt.verifyToken], controller.getJobPosts)

  app.post('/api/farmer/jobPost', [authJwt.verifyToken], controller.saveJobPost)
}
