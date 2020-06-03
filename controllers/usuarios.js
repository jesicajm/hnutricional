const Usuario = require('../models/usuario');
const PlanNutricional = require('../models/planNutricional');

exports.getPlanUsuario = (req,res,next) => {
    res.render('planNutricional', {
        usuario: req.usuario,
      });
}; 

exports.postPlanUsuario = (req,res,next) => {
  const usuarioId = req.body.usuarioId;
  const planNutricional = new PlanNutricional(req.body.desayuno,req.body.mediaManana,req.body.almuerzo,req.body.algo,req.body.cena);
  Usuario.findById(usuId)
  .then(usuario => {
    console.log(usuario);
  })
  .catch(err => console.log(err));
  console.log(planNutricional);
  
  /*if(usuario.tienePlan === 'si'){
    usuario.agregarPlanNutricional(planNutricional); 
    console.log(usuario.planNutricional);
  }*/
  
}