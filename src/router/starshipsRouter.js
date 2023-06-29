const express = require('express');
const router = express.Router();
// Ne fonctionne pas pour l'instant
const authMiddleware = require('../middleware/auth');
const handleCRUD = require('../controller/');

const starshipsController = handleCRUD('Starships');

// Route de création d'une personne
router.post('/', starshipsController.create);

// Route pour obtenir tous les peoples
router.get('/', starshipsController.getAll);

// Route de lecture d'une personne par ID
router.get('/:id', starshipsController.getById);

// Route de mise à jour d'une personne
router.patch('/:id', starshipsController.update);

// Route de suppression d'une personne
router.delete('/:id', starshipsController.delete);

module.exports = router;
