const express = require('express');
const router = express.Router();
// Ne fonctionne pas pour l'instant
const authMiddleware = require('../middleware/auth');
// Ne fonctionne pas pour l'instant
const handleCRUD = require('../controller/');

const peopleController = handleCRUD('People');

// Route de création d'une personne
router.post('/', peopleController.create);

// Route pour obtenir tous les peoples
router.get('/', peopleController.getAll);

// Route de lecture d'une personne par ID
router.get('/:id', peopleController.getById);

// Route de mise à jour d'une personne
router.patch('/:id', peopleController.update);

// Route de suppression d'une personne
router.delete('/:id', peopleController.delete);

module.exports = router;
