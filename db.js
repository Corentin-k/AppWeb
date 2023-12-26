require('dotenv').config();
const { Sequelize } = require('sequelize');
require('dotenv').config();
// Créer une instance Sequelize
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PWD, {
  host:'localhost',
  dialect: 'mysql',
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

// Exportez l'instance S(equelize pour l'utiliser dans d'autres parties de votre application
module.exports = sequelize;
