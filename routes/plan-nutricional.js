const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /formulario/plan-nutricional
router.get('/plan-nutricioal',(req,res,next) => {
  res.render('planNutricional');
  //res.sendFile(path.join(rootDir, 'views','crearusuario.html'));
});

// /usuario/crear-usuario
router.post('/crear-usuario',(req,res,next) => {
  plan = req.body;
  console.log(plan);
});

module.exports = router;