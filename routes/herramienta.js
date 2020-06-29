const express = require('express');
const moment = require('moment');

const rootDir = require('../util/path');

const herramientaControllers = require('../controllers/herramienta');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/tiene-plan', isAuth, herramientaControllers.getTienePlan);

router.get('/plan-nutricional', isAuth, herramientaControllers.getPlanUsuario);

router.get('/minuta', isAuth, herramientaControllers.getMinuta);

router.post('/tiene-plan', isAuth, herramientaControllers.postTienePlan);

router.post('/plan-nutricional', isAuth, herramientaControllers.postPlanUsuario);

module.exports = router;