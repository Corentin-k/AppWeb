// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Role = sequelize.define('Role', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    display_name:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    description:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
},{
    timestamps:false

})




module.exports = Role;
