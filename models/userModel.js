const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
   return sequelize.define('user', {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
      },
      login: {
         type: Sequelize.STRING,
         unique: true,
         allowNull: false
      },
      password: {
         type: Sequelize.STRING,
         allowNull: false
      },
      fullName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      city: {
         type: Sequelize.STRING,
         allowNull: true
      },
      birthDay: {
         type: Sequelize.STRING,
         allowNull: false
      },
      familyStatus: {
         type: Sequelize.INTEGER,
         allowNull: false
      },
      education: {
         type: Sequelize.STRING,
         allowNull: true
      },
      job: {
         type: Sequelize.STRING,
         allowNull: true
      },
      status: {
         type: Sequelize.TEXT,
         allowNull: true
      }
   });
}