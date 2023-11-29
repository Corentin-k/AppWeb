

const express = require('express');
const router = express.Router();
const Question = require('../models/Question'); // Importez votre modèle Question

// Exemple de route pour récupérer toutes les questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Créer une nouvelle question
router.post('/', async (req, res) => {
  try {
    const { questionText, optionA, optionB, optionC, optionD, correctAnswer } = req.body;
    const newQuestion = await Question.create({
      questionText,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    });
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Erreur lors de la création de la question :', error);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
