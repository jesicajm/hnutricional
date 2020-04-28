const minuta = {
  _comida:{
    desayuno: {},
    mediaManana: {},
    almuerzo: {},
    algo: {},
    cena: {}
},

_menuComida:{},

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

}

module.exports = minuta;