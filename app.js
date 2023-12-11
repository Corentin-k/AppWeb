const express = require('express');
const sequelize = require('./db'); // Importez votre configuration Sequelize
const jwt=require('jsonwebtoken');

const path = require('path');
const questionRoutes = require('./routes/question'); // Importez vos routes
const userRoutes = require('./routes/user');
const rolesRoutes = require('./routes/roles');

require('dotenv').config()
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour gérer les données JSON
app.use(express.json());

// Utilisation des routes définies pour les questions
app.use('/questions', questionRoutes);
app.use('/users', userRoutes);
app.use('/roles', rolesRoutes);
// Port d'écoute du serveur
const port =  3000;


app.get('/', (req, res) => {//req = request, res = response
  res.send('Hello World!');
});

app.get('/jwt', (req, res) => {
  const createTokenFromJson=(jsonDatas,secretKey,options={})=>{
    try{
      const secretKey='test';
      const token=jwt.sign(jsonDatas,secretKey,options);
      return token;
    }catch(error){ 
      console.log(error);
      return null;
    }

  }
  const jsonData={email:"test@gmail.com",password:"123456"};
  const token=createTokenFromJson(jsonData);
  if(token){
    res.json({token:token});}
  else{
    res.status(500).json({message:"Erreur lors de la création du token"});
  }
});
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
