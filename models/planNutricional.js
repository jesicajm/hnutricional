//const inputUsuario = require('../hnutricional');
//const usuario = require('./usuario');
const alimentos = require('./alimentos');

const planesNutricional = [];

module.exports = class PlanNutricional{
    constructor(desayuno,mediaManana,almuerzo,algo,cena){
     this._desayuno = desayuno;
     this._mediaManana = mediaManana;
     this._almuerzo = almuerzo;
     this._algo = algo;
     this._cena = cena;
   }
   
   get desayuno() {
     return this._desayuno;
   }
 
   get mediaManana(){
     return this._mediaManana;
   }
 
   get almuerzo(){
     return this._almuerzo;
   }
 
   get algo(){
     return this._algo;
   }
 
   get cena(){
     return this._cena;
   }
 
   /*get usuarioPlan(){
     return this._usuarioPlan;
   }
 
   agregarUsuario(user){
     return this._usuarioPlan = user.email;
   }*/
   
  guardar(){
    planesNutricional.push(this);
  }  
  
 };
 

