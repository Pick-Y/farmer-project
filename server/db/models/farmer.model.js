const enums = require('./enums')
const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const Farmer = sequelize.define('farmers', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    businessName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tradingAs: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    town: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postcode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM,
      values: enums.State,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: enums.AccountStatus,
      allowNull: false,
    },
  })

  return Farmer
}
