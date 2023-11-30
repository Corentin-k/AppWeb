// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User')

// Exemple de route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
// Route pour ajouter un nouvel utilisateur
router.post('/add', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser = await User.create({
        name,
        email,
        password
        // Ajoutez d'autres champs si nécessaire
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;