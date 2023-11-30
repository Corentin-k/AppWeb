const express = require('express');
const sequelize = require('./db'); // Importez votre configuration Sequelize

const questionRoutes = require('./routes/question'); // Importez vos routes
const userRoutes = require('./routes/user');
const rolesRoutes = require('./routes/roles');

require('dotenv').config()
const app = express();

// Middleware pour gérer les données JSON
app.use(express.json());

// Utilisation des routes définies pour les questions
app.use('/questions', questionRoutes);
app.use('/users', userRoutes);
app.use('/roles', rolesRoutes);
// Port d'écoute du serveur
const port =  3000;

// Démarrage du serveur
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
  });
});




// {
//   "questionText": "Quelle est la capitale de la France ?",
//   "optionA": "esss",
//   "optionB": "Madrid",
//   "optionC": "Berlin",
//   "optionD": "Paris",
//   "correctAnswer": "Paris"
// }
