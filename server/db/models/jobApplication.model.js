module.exports = (sequelize, Sequelize) => {
  const JobApplication = sequelize.define('jobApplications', {
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    backpackerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  })

  return JobApplication
}
