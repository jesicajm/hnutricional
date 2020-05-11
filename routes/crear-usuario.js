const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /usuario/crear-usuario
router.get('/crear-usuario',(req,res,next) => {
  res.render('crearusuario', {tituloDoc: nutricional});
  //res.sendFile(path.join(rootDir, 'views','crearusuario.html'));
});

// /usuario/crear-usuario
router.post('/crear-usuario',(req,res,next) => {
  entradaUsuario = req.body;
  console.log(entradaUsuario);
});

module.exports = router;