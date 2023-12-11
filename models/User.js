// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const bcrypt = require('bcrypt');
const Role = require('./Role');

const User = sequelize.define('User', {

  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      len: [6, 255], // Password must be between 6 and 255 characters
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

User.findUser = async function (email, password) {
  const user = await this.findOne({ where: { email: email } });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Incorrect password');
  }

  return user;
};
// Relation Many-to-Many entre User et Role
User.belongsToMany(Role, { through: 'UserRole' });

module.exports = User;
