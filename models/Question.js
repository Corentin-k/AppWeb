const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Importez votre configuration Sequelize depuis db.js

const Question = sequelize.define('Question', {
  // Définir les colonnes de la table Questions
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  optionA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  optionB: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  optionC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  optionD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchroniser le modèle avec la base de données (pour créer la table si elle n'existe pas déjà)
Question.sync();

// Exportez le modèle pour l'utiliser dans d'autres parties de votre application
module.exports = Question;
