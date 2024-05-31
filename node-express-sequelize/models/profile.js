const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Profile = sequelize.define('Profile', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  followerCount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  connectionCount: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Profile;
