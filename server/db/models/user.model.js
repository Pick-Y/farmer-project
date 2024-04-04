const enums = require('./enums')
const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: enums.Role,
      allowNull: false,
    },
  })

  return User
}
