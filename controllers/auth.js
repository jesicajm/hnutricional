const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const Usuario = require('../models/usuario');
const { userInfo, networkInterfaces } = require('os');
const usuario = require('../models/usuario');

const transporter = nodemailer.createTransport(sendgridTransport({
  auth:{
    api_key: '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'
  }
}));

exports.getRegistro = (req,res,next) => {
  let message = req.flash('error');
  if(message.length >0){
    message = message[0];
  }else{ 
    message = null;
  }
  res.render('auth/registro', {
    errorMessage: message
  });
};

exports.getLogin = (req,res,next) => {
  let message = req.flash('error');
  if(message.length >0){
    message = message[0];
  }else{ 
    message = null;
  }
  res.render('auth/login',{
    errorMessage: message
  });
};

exports.postRegistro = (req,res,next) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  Usuario.findOne({email:email})
    .then(usuarioDoc =>{
      if(usuarioDoc){
        req.flash('error','El email ya existe');
        return res.redirect('/registro');
      }
      return bcrypt
        .hash(password,12)
        .then(hashedPassword => {
          const usuario = new Usuario({
            nombre: nombre,
            email: email,
            password: hashedPassword,
            tienePlan: null,
            planId: null,
            intolerancias:null
          });
          return usuario.save();
        }) 
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'herramientanutricional@node-complete.com',
            subject: 'Registro exitoso!',
            html: '<h1>Te inscribiste con exito</h1>'
          });
        })
        .catch(err =>{
          console.log(err);
        });
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
      req.flash('error','Correo o contraseña no validos');
      return res.redirect('/login');
    }
    bcrypt.compare(password, usuario.password)
      .then(doMatch =>{
        if(doMatch){
          req.session.isLoggedIn = true; 
          req.session.usuario = usuario;
          return req.session.save(err => {
            console.log(err);
            res.redirect('/tiene-plan')
          });
        }
        req.flash('error','Correo o contraseña no validos');
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

exports.getReset = (req,res,next) => {
  let message = req.flash('error');
  if(message.length >0){
    message = message[0];
  }else{ 
    message = null;
  }
  res.render('auth/reset', {
    errorMessage: message
  }); 
}

exports.postReset = (req,res,next) => {
  crypto.randomBytes(32, (err, buffer) =>{
    if (err){
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    Usuario.findOne({email:req.body.email})
      .then(usuario => {
        if(!usuario){
          req.flash('error','No se encontro ninguna cuenta con ese correo electronico');
          return res.redirect('/reset');
        }
        usuario.resetToken = token;
        usuario.resetTokenExpiration = Date.now() + 3600000;
        return usuario.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'herramientanutricional@node-complete.com',
          subject: 'Reestablecer contaseña',
          html: `
            <p>Solicito un reestablecimiento de contraseña<p>
            <p>Click en este <a href="http://localhost:3000/reset/${token}>enlace</a> para establecer una nueva contraseña</p>
            `
        });      
      })
      .catch(err =>{
        console.log(err);
      })
  });
};

exports.getNewPassword = (req,res,next) => {
  const token = req.params.token;
  Usuario.findOne({resetToken:token, resetTokenExpiration: {$gt: Date.now()}})
    .then(usuario =>{
      let message = req.flash('error');
      if(message.length >0){
       message = message[0];
      }else{ 
      message = null;
      }
      res.render('auth/new-password', {
      errorMessage: message,
      usuarioId: usuario._id.toString(),
      passwordToken: token
      }); 
    })
    .catch(err => {
      console.log(err);
    })
};

exports.postNewPassword = (req,res,next) => {
  const newPassword = req.body.password;
  const usuarioId = req.body.usuarioId;
  const passwordToken = req.body.passwordToken;
  let resetUsuario;

  Usuario.findOne({
    resetToken: passwordToken, 
    resetToken:{ $gt: Date.now() },
    _id: usuarioId 
  })
    .then(usuario =>{
      resetUsuario = usuario;
      return bcrypt.hash(newPassword, 12)
    })
    .then(hashedPassword =>{
      resetUsuario.password = hashedPassword;
      resetUsuario.resetToken = undefined;
      resetUsuario.resetTokenExpiration = undefined;
      return resetUsuario.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
     })
}