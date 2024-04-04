const config = require('../db.config.js')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model.js')(sequelize, Sequelize)
db.backpacker = require('./backpacker.model.js')(sequelize, Sequelize)
db.farmer = require('./farmer.model.js')(sequelize, Sequelize)
db.jobPost = require('./jobPost.model.js')(sequelize, Sequelize)
db.jobApplication = require('./jobApplication.model.js')(sequelize, Sequelize)

db.jobPost.hasMany(db.jobApplication, {
  otherKey: 'postId',
})

db.farmer.hasMany(db.jobPost, {
  otherKey: 'farmerId',
})

db.backpacker.hasMany(db.jobApplication, {
  foreignKey: 'backpackerId',
})

db.user.hasMany(db.backpacker, {
  as: 'backpackers',
  foreignKey: 'userId',
  sourceKey: 'id',
  scopes: { type: 'backpacker' },
})

db.user.hasMany(db.farmer, {
  as: 'farmers',
  foreignKey: 'userId',
  sourceKey: 'id',
  scopes: { type: 'farmer' },
})

module.exports = db
