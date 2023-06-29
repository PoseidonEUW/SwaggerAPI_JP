const express = require('express');
const router = express.Router();
// Ne fonctionne pas pour l'instant
const authMiddleware = require('../middleware/auth');
const handleCRUD = require('../controller/');

const vehiculesController = handleCRUD('Vehicules');

// Route de création d'une personne
router.post('/', vehiculesController.create);

// Route pour obtenir tous les peoples
router.get('/', vehiculesController.getAll);

// Route de lecture d'une personne par ID
router.get('/:id', vehiculesController.getById);

// Route de mise à jour d'une personne
router.patch('/:id', vehiculesController.update);

// Route de suppression d'une personne
router.delete('/:id', vehiculesController.delete);

module.exports = router;
