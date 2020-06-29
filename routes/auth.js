const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/registro', authController.getRegistro);

router.post('/registro', authController.postRegistro);

router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.get('/new-password', authController.postNewPassword);


module.exports = router;