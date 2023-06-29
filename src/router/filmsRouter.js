const express = require('express');
const router = express.Router();
// Ne fonctionne pas pour l'instant
const authMiddleware = require('../middleware/auth');
const handleCRUD = require('../controller/');

const filmsController = handleCRUD('Films');

// Route de création d'une personne
router.post('/', filmsController.create);

// Route pour obtenir tous les peoples
router.get('/', filmsController.getAll);

// Route de lecture d'une personne par ID
router.get('/:id', filmsController.getById);

// Route de mise à jour d'une personne
router.patch('/:id', filmsController.update);

// Route de suppression d'une personne
router.delete('/:id', filmsController.delete);

module.exports = router;
