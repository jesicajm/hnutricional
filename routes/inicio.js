const express = require('express');

const inicioController = require('../controllers/inicio');

const router = express.Router();

router.get('/', inicioController.getInicio);

module.exports = router;