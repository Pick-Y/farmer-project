const enums = require("./enums")
const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const Backpacker = sequelize.define("backpackers", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    nationality:  {
      type: Sequelize.STRING,
      allowNull: false
    },
    visa: {
      type: DataTypes.ENUM,
      values: enums.Visa,
      allowNull: false
    },
    workingRights: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    education: {
      type: DataTypes.ENUM,
      values: enums.Education,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM,
      values: enums.Gender,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: enums.AccountStatus,
      allowNull: false
    },
  })

  return Backpacker
}
