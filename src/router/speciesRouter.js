const express = require('express');
const router = express.Router();
// Ne fonctionne pas pour l'instant
const authMiddleware = require('../middleware/auth');
const handleCRUD = require('../controller/');

const speciesController = handleCRUD('Species');

// Route de création d'une personne
router.post('/', speciesController.create);

// Route pour obtenir tous les peoples
router.get('/', speciesController.getAll);

// Route de lecture d'une personne par ID
router.get('/:id', speciesController.getById);

// Route de mise à jour d'une personne
router.patch('/:id', speciesController.update);

// Route de suppression d'une personne
router.delete('/:id', speciesController.delete);

module.exports = router;
