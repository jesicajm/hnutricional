const minuta = {
  _comida:{
    desayuno: {},
    mediaManana: {},
    almuerzo: {},
    algo: {},
    cena: {}
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

set desayuno(desayuno){
  this._comida.desayuno = desayuno;
},

set mediaManana(mediaManana){
  this._comida.mediaManana = mediaManana;
},

set almuerzo(almuerzo){
  this._comida.almuerzo = almuerzo;
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
  const preparacionAlimento = {
     nombre : alimento.nombre,
     preparacion : alimento.preparacion,
  }
  this._comida[nombreComida][tipoAlimentoPlan].push(preparacionAlimento);
},

validarTipoAlimento(nombreComida,tipo){
 let obj = this._comida[nombreComida];
 return obj.hasOwnProperty(tipo);
},


}

module.exports = minuta;