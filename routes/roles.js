const express = require('express');
const router = express.Router();
const Role = require('../models/Role');



// Exemple de route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
      const roles = await Roleco.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Route pour créer un nouveau rôle
router.post('/roles', async (req, res) => {
  try {
    const { name, display_name, description } = req.body;

    // Création du nouveau rôle
    const newRole = await Role.create({
      name,
      display_name,
      description,
      // ... autres champs nécessaires à la création du rôle
    });

    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
