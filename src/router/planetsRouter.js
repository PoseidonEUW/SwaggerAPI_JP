const express = require('express');
const router = express.Router();
// Ne fonctionne pas pour l'instant
const authMiddleware = require('../middleware/auth');
const handleCRUD = require('../controller/');

const planetsController = handleCRUD('Planets');

// Route de création d'une personne
router.post('/', planetsController.create);

// Route pour obtenir tous les peoples
router.get('/', planetsController.getAll);

// Route de lecture d'une personne par ID
router.get('/:id', planetsController.getById);

// Route de mise à jour d'une personne
router.patch('/:id', planetsController.update);

// Route de suppression d'une personne
router.delete('/:id', planetsController.delete);

module.exports = router;
