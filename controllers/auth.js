const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

exports.getRegistro = (req,res,next) => {
  res.render('auth/registro');
};

exports.getLogin = (req,res,next) => {
  res.render('auth/login', {
    isAuthenticated: false
  });
};

exports.postRegistro = (req,res,next) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const tienePlan = req.body.tienePlan;
  Usuario.findOne({email:email})
    .then(usuarioDoc =>{
      if(usuarioDoc){
        return res.redirect('/registro');
      }
      return bcrypt
        .hash(password,12)
        .then(hashedPassword => {
          const usuario = new Usuario({
            nombre: nombre,
            email: email,
            password: hashedPassword,
          });
          return usuario.save();
        }) 
        .then(result => {
          res.redirect('/login');
        })
    }) 
    .catch(err => {
      console.log(err);
    });
};

exports.postLogin = (req,res,next) => {
  const email = req.body.email;
  const password = req.body.password;
  Usuario.findOne({email:email})
  .then(usuario => {
    if(!usuario){
      return redirect('/login');
    }
    bcrypt.compare(password, usuario.password)
      .then(doMatch =>{
        if(doMatch){
          req.session.isLoggedIn = true; 
          req.session.usuario = usuario;
          return req.session.save(err => {
            console.log(err);
            res.redirect('/plan-nutricional')
          });
        }
        res.redirect('/login');
      })
      .catch(err => {
        console.log(err);
        res.redirect('/login');
      });
  })
  .catch(err => console.log(err));
};

exports.postLogout = (req,res,next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};