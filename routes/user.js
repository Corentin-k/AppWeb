// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const db = require('../db');

// Exemple de route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('user/index', { users: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


  
// Route pour ajouter un nouvel utilisateur
router.post('/add', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser = await User.create({
        email,
        password
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Traitement de la soumission du formulaire
router.post('/login', async (req, res) => {
  
  try {
    
      const user = await User.findUser(req.body.email, req.body.password);
      securePassword
      res.redirect('/users/welcome?email=' + user.email);
  } catch (error) {
      res.status(401).send('Invalid email or password2'); // Réponse en cas d'échec de connexion
  }
});

// Affichage du formulaire de connexion
router.get('/login', (req, res) => {
  res.render('user/login'); 
});

// Route pour afficher la page de bienvenue après la connexion réussie
router.get('/welcome', (req, res) => 
{const userEmail = req.query.email;
  res.render('user/welcome', { userEmail: userEmail }); // Rendre la vue de bienvenue avec l'e-mail de l'utilisateur
});
  module.exports = router;