const enums = require('./enums')
const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const JobPost = sequelize.define('posts', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    farmerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    accommodationProvided: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    foodProvided: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    transportProvided: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    ratePerHour: {
      type: Sequelize.FLOAT,
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
    industry: {
      type: DataTypes.ENUM,
      values: enums.Industry,
      allowNull: false,
    },
    availableFrom: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    availableUntil: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    numberOfPositions: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: enums.PostStatus,
      allowNull: false,
    },
  })

  return JobPost
}
