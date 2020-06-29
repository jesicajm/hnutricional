const mongoose = require('mongoose'); 
const moment = require('moment');

//const tipoAlimentos = require('./grupoAlimentos');

const Schema = mongoose.Schema;

const minutaSchema = new Schema({
  menus: [
    {
      dia: String,
      desayuno: {type: Object, required: true },
      mediaManana: {type: Object, required: true },
      almuerzo: {type: Object, required: true },
      algo: {type: Object, required: true },
      cena: {type: Object, required: true }
    }  
  ],  
  usuarioId : {
    type : Schema.Types.ObjectId,
    ref:'Usuario',
    required : true
  }
});

minutaSchema.methods.asignarDiaSemana = function(fecha){
  let diaSemana = fecha.day();
  switch (diaSemana) {
    case 0 :
      return 'Domingo';
      break;
    case 1:
      return 'Lunes';
      break;
    case 2:
      return 'Martes';
      break;
    case 3:
      return 'Miercoles';
      break;
    case 4:
      return 'Jueves';
      break;
    case 5:
      return 'Viernes';
      break;
    case 6:
      return 'Sabado';
      break;  
  }
};

minutaSchema.methods.asignarMes = function(fecha){
  let mesFecha = fecha.month();
  switch (mesFecha) {
    case 0 :
      return 'enero';
      break;
    case 1:
      return 'febrero';
      break;
    case 2:
      return 'marzo';
      break;
    case 3:
      return 'abril';
      break;
    case 4:
      return 'mayo';
      break;
    case 5:
      return 'junio';
      break;
    case 6:
      return 'julio';
      break;  
    case 7:
      return 'agosto';
      break;  
    case 8:
      return 'septiemre';
      break;
    case 9:
      return 'octubre';
      break;  
    case 10:
      return 'noviembre';
      break;        
    case 11:
      return 'diciembre';
      break;      
    }  
};


minutaSchema.methods.agregarplan = (planUsuario,comidaDia)=>{
  const planDia = {};
  planUsuario[comidaDia].map(tipoAlimento => {
    planDia[tipoAlimento] = [];
  });
  return planDia
};


minutaSchema.methods.agregarMenusMinuta = function(fechaInicial,diasMenus,plan){

  const modificarFormatoFecha = fecha => {
    let nuevoFormatoFecha = `${this.asignarDiaSemana(fecha)} ${fecha.date()} ${this.asignarMes(fecha)}`;
    return nuevoFormatoFecha;
  };
  
  this.menus[0].dia = modificarFormatoFecha(fechaInicial);
  
  for(let i = 1; i <= diasMenus; i++){
    let agregarDia = fechaInicial.add(1,'days');
    this.menus.push({
      dia: modificarFormatoFecha(agregarDia),
      desayuno : this.agregarplan(plan,'desayuno'),
      mediaManana: this.agregarplan(plan,'mediaManana'),
      almuerzo: this.agregarplan(plan,'almuerzo'),
      algo: this.agregarplan(plan,'algo'),
      cena: this.agregarplan(plan,'cena'),
    });
  }
  return this.save();
};

module.exports = mongoose.model('Minuta', minutaSchema);
/*
const minuta = {
  _comida:{
    desayuno: {},
    mediaManana: {},
    almuerzo: {},
    algo: {},
    cena: {}
},

_menuComida:{},

_listaMercado:{
   congelados:[],
   lacteos:[],
   arrozPasta:[],
   pescaderia:[],
   fruteria:[],
   carniceria:[],
   conservasAceitesCondimentos:[]
},

get desayuno(){
  return this._comida.desayuno;
},

get mediaManana(){
  return this._comida.mediaManana;
},

get almuerzo(){
  return this._comida.almuerzo;
},

get algo(){
  return this._comida.algo;
},

get cena(){
  return this._comida.cena;
},

asignarTipoAlimentosPlan(planUsuario,nombreComida){
  let planComida = planUsuario.planNutricional[nombreComida];
  let tipoAlimentoPlan;

  for(let i = 0; i < planComida.length; i++){
    tipoAlimentoPlan = planComida[i];
    this._comida[nombreComida][tipoAlimentoPlan] = []
  }
},

agregrarPreparacionAlimento(nombreComida,tipoAlimentoPlan,alimento){
  const preparacionAlimento = Object.assign(alimento);
  this._comida[nombreComida][tipoAlimentoPlan].push(preparacionAlimento);
},

validarTipoAlimento(nombreComida,tipo){
  let obj = this._comida[nombreComida];
  return obj.hasOwnProperty(tipo);
},

agregarDiaMinuta(diaMinuta){
  this._menuComida[diaMinuta] = {
    menuDesayuno: [],
    menumMediaManana: [],
    menuAlmuerzo: [],
    menualgo: [],
    cena: []};
},

agregarAlimentoAComida(dia,nombreMenu,alimento){
    this._menuComida[dia][nombreMenu].push(alimento);
},

eliminarAlimentoDeComida(comidaDia,tipoComida,indiceAlimento){
  this._comida[comidaDia][tipoComida].splice(indiceAlimento, 1);
},
 
alimentoAleatorioDesdeComida(nombreComida,nombreMenuComida,diaMenu){
  let alimentosComida = this._comida[nombreComida];
  for(let tipo in alimentosComida){
    let indiceAleatorio = Math.floor(Math.random() * alimentosComida[tipo].length);
    let alimentoAleatorio = alimentosComida[tipo][indiceAleatorio];
    this.agregarAlimentoAComida(diaMenu,nombreMenuComida,alimentoAleatorio);
    this.eliminarAlimentoDeComida(nombreComida,tipo,indiceAleatorio);
  } 
},

}*/
