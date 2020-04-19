const Usuario = require('./models/usuario');
const PlanNutricional = require('./models/planNutricional');
const distribucionComida = require('./models/distribucionComidas');
const Alimento = require('./models/alimento');
const tipoAliemntos = require('./models/grupoAlimentos');
const minuta = require('./models/minuta'); 


//entradas usuario

const nombre = 'Jessica';
const email ='jessica.jaramillo.gmail.com';
let password = '12jj.aw';
let tienePlanNutricional = true;
let desayuno = ['lacteos','harina','frutas','grasas'];
let mediaManana = ['lacteos','harina','frutas'];
let almuerzo = ['carnes','harina','verduras','leguminosas','grasas'];
let algo = ['lacteo','harina','frutas'];
let cena = ['carnes','harina','verduras'];
let intolerancias = ['carne de cerdo','zanahoria','leche'];
let fechaInicial;
let fechaFinal;
let diasMenus = fechaFinal - fechaInicial;

//ordenar listas

const merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];
 
    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k]
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k]
    }
 
    k = p;
    i = 0;
    j = 0;

  while ( i < lowHalf.length  &&  j < highHalf.length) {
     if (lowHalf[i] < highHalf[j]) {
       array[k++] = lowHalf[i++] ;
     } else {
        array[k++] = highHalf[j++];
     }
   }
   
   while (i < lowHalf.length  ) {
       array[k++] = lowHalf[i++];
   }
   
   while (j < highHalf.length) {
      array[k++] = highHalf[j++];
   }
   
};


const mergeSort = function(lista, p, r) {
   if (p<r) {
      var q = Math.floor((p+r)/2);
      mergeSort(lista,p,q);
      mergeSort(lista,q+1,r);
      merge(lista,p,q,r);
    }  
};
  

mergeSort(intolerancias,0,intolerancias.length-1);

//busqueda binaria

const doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count;
    
    while(max>=min){
        guess = Math.floor((max+min)/2);
        count+=1; 
        if(array[guess] === targetValue){ 
            return guess;
        }
        else if(array[guess] < targetValue){
            min = guess + 1;
        }
        else{  
            max = guess - 1;
        }
    }
    return -1
};


// guardar alimentos

const clasificarAlimentoGuardar = (obj) => {
    obj.tipoAlimento = tipoAliemntos.get(obj.nombre);
    obj.save();
}

const manzanaCaramelizada = new Alimento('manzana','almuerzo','xxx');
manzanaCaramelizada.agregarIngrediente('manzana','xxx','xxx');
manzanaCaramelizada.agregarIngrediente('ajo','xxx','xxx');
manzanaCaramelizada.agregarIngrediente('azucar','xxx','xxx');
const carneDurazno = new Alimento('carne de cerdo','almuerzo','xxx');
carneDurazno.agregarIngrediente('carne de cerdo','xxx','xxx');
const pescadoAsado = new Alimento('pescado','cena','xxx');
pescadoAsado.agregarIngrediente('pescado','xxx','xxx');
const carneGuisada = new Alimento('carne de res','almuerzo','xxx');
carneGuisada.agregarIngrediente('carne de res','xxx','xxx');
const verdurasSalteadas = new Alimento('zanahoria','almuerzo','xxx');
verdurasSalteadas.agregarIngrediente('zanahoria','xxx','xxx');
const ensaladaMango = new Alimento('mango','almuerzo','xxx');
ensaladaMango.agregarIngrediente('mango','xxx','xxx');


clasificarAlimentoGuardar(manzanaCaramelizada);
clasificarAlimentoGuardar(carneGuisada);
clasificarAlimentoGuardar(pescadoAsado);
clasificarAlimentoGuardar(carneDurazno);
clasificarAlimentoGuardar(verdurasSalteadas);
clasificarAlimentoGuardar(ensaladaMango);

 
const alimentos = Alimento.buscarTodos();

//console.log(manzanaCaramelizada.ingredientes);

const listaAlimentosPersonalizada = [];

//crear usuario plan nutricional 
const usuario = new Usuario(nombre,email,password,tienePlanNutricional,intolerancias);
const planNutricional = new PlanNutricional(desayuno,mediaManana,almuerzo,algo,cena);

const siTienePlanAgregar = (respuestaTienePlan) => {

  if(respuestaTienePlan){
    usuario.agregarPlanNutricional(planNutricional);  
  }

}

siTienePlanAgregar(tienePlanNutricional);


//crear lista de alimentos personalizados

const agregarAlimentoListaUsuario = (listaIntolerancias) => {

  let listaIngredientes;
  
  for(let i = 0; i < alimentos.length; i++){
    listaIngredientes = alimentos[i].ingredientes;
    for(let j = 0; j < listaIngredientes.length; j++){
      let ingrediente = listaIngredientes[j][0];
      if(doSearch(listaIntolerancias,ingrediente) >= 0){
        return;
      }  
    }
    listaAlimentosPersonalizada.push(alimentos[i]);
  }  
};

agregarAlimentoListaUsuario(intolerancias);
usuario.agregarLista(listaAlimentosPersonalizada);
//console.log(usuario.listaAlimentos);


// agregar preparacion alimentos minuta

const guardarTipoAlimentoPlan = (listaAlimentos, nombreComida) => {
  
  let tipoAlimentoPlan;
  let alimento;
  
  for(let i = 0; i < listaAlimentos.length; i++){
    alimento = listaAlimentos[i];
  
    let existeTipoAlimento = minuta.validarTipoAlimento(nombreComida,alimento.tipoAlimento);
    if(existeTipoAlimento && alimento.comida === nombreComida){ 
      tipoAlimentoPlan = listaAlimentos[i].tipoAlimento;
      minuta.agregrarPreparacionAlimento(nombreComida,tipoAlimentoPlan,alimento);  
    }
  } 
}; 

const guardarAlimentoPlanUsuario = (objUsuario,comidaDia,listaIntolerancias) => {
  
  minuta.asignarTipoAlimentosPlan(objUsuario,comidaDia);
  guardarTipoAlimentoPlan(objUsuario.listaAlimentos,comidaDia,listaIntolerancias);
 
};

guardarAlimentoPlanUsuario(usuario,'desayuno',intolerancias);
guardarAlimentoPlanUsuario(usuario,'mediaManana',intolerancias);
guardarAlimentoPlanUsuario(usuario,'almuerzo',intolerancias);
guardarAlimentoPlanUsuario(usuario,'algo',intolerancias);
guardarAlimentoPlanUsuario(usuario,'cena',intolerancias);

console.log(minuta.desayuno);
console.log(minuta.mediaManana);
console.log(minuta.almuerzo);
console.log(minuta.algo);
console.log(minuta.cena);


