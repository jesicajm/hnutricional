const express = require('express');

const rootDir = require('../util/path');

const usuariosControllers = require('../controllers/usuarios');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/plan-nutricional', isAuth, usuariosControllers.getPlanUsuario);

router.post('/plan-nutricional', isAuth, usuariosControllers.postPlanUsuario);

module.exports = router;