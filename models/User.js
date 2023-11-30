// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Role = require('./Role');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  activation_key: {
    type: DataTypes.STRING(32)
  },
  remember_token: {
    type: DataTypes.STRING(32)
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false // Désactiver les timestamps si vous ne souhaitez pas les gérer manuellement
});

// Relation Many-to-Many entre User et Role
User.belongsToMany(Role, { through: 'UserRole' });

module.exports = User;
