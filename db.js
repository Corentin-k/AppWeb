require('dotenv').config();
const { Sequelize } = require('sequelize');

// Créer une instance Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.BD_USER, process.env.DB_PWD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});
// Tester la connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie avec succès.');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  }
}

// Exécutez la fonction pour tester la connexion
testConnection();

// Exportez l'instance Sequelize pour l'utiliser dans d'autres parties de votre application
module.exports = sequelize;
