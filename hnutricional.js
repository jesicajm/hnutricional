const moment = require('moment');
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
let mediaManana = ['lacteos','frutas'];
let almuerzo = ['carnes','verduras','leguminosas'];
let algo = ['lacteo','harina','frutas'];
let cena = ['carnes','cereal','verduras'];
let intolerancias = ['carne de cerdo','coco'];
let fechaInicial = moment("04-26-2020", "MM-DD-YYYY");
let fechaFinal = moment("04-30-2020", "MM-DD-YYYY");
let diasMenus = fechaFinal.diff(fechaInicial, 'days');

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

const manzanaCaramelizada = new Alimento('manzana caramelizada','manzana','almuerzo','xxx');
manzanaCaramelizada.agregarIngrediente('manzana','xxx','xxx');
manzanaCaramelizada.agregarIngrediente('ajo','xxx','xxx');
manzanaCaramelizada.agregarIngrediente('azucar','xxx','xxx');
const carneDurazno = new Alimento('carne de durazno','carne de cerdo','almuerzo','xxx');
carneDurazno.agregarIngrediente('carne de cerdo','xxx','xxx');
const pescadoAsado = new Alimento('pescado asado','pescado','cena','xxx');
pescadoAsado.agregarIngrediente('pescado','xxx','xxx');
const carneGuisada = new Alimento('carne guisada','carne de res','almuerzo','xxx');
carneGuisada.agregarIngrediente('carne de res','xxx','xxx');
const verdurasSalteadas = new Alimento('verduras Salteadas','zanahoria','almuerzo','xxx');
verdurasSalteadas.agregarIngrediente('zanahoria','xxx','xxx');
const ensaladaMango = new Alimento('ensalada de mango','mango','almuerzo','xxx');
ensaladaMango.agregarIngrediente('mango','xxx','xxx');
const polloTroceadoEnSalsa = new Alimento('pollo troceado en salsa','pollo','almuerzo','xxx');
polloTroceadoEnSalsa.agregarIngrediente('pollo','xxx','xxx');
polloTroceadoEnSalsa.agregarIngrediente('pollo','700','gr');
polloTroceadoEnSalsa.agregarIngrediente('zanahoria',2,'unidad');
const polloConChampiñiones = new Alimento('pollo con champiniones','pollo','almuerzo','xxx');
polloConChampiñiones.agregarIngrediente('queso parmesano',150,'gr');
polloConChampiñiones.agregarIngrediente('champiñion',300,'gr');
const lentejasViudas = new Alimento('lentejas viudas','lenteja','almuerzo','xxx');
lentejasViudas.agregarIngrediente('lentejas',350,'gr');
lentejasViudas.agregarIngrediente('laurel',1,'hoja');
lentejasViudas.agregarIngrediente('sal',1,'pizca');
const pescadoAgridulce = new Alimento('pescado agridulce','pescado','almuerzo','xxx');
pescadoAgridulce.agregarIngrediente('pescado',250,'gr');
pescadoAgridulce.agregarIngrediente('cebolla',1,'unidad');
const cañonDurazno = new Alimento('cañon con durazno','carne de res','almuerzo','xxx');
cañonDurazno.agregarIngrediente('carne de res',100,'gr');
cañonDurazno.agregarIngrediente('durazno',250,'gr');
cañonDurazno.agregarIngrediente('durazno',250,'gr');
const arvejaVerde = new Alimento('arveja cocida','arveja verde','almuerzo','xxx');
arvejaVerde.agregarIngrediente('arveja verde',50,'gr');
arvejaVerde.agregarIngrediente('tomate',50,'gr');
const ensaladaRepolloPina = new Alimento('ensalada repollo con pina','repollo','almuerzo','xxx');
ensaladaRepolloPina.agregarIngrediente('repollo',30,'gr');
ensaladaRepolloPina.agregarIngrediente('pina',30,'gr');
const ensaladaZanahoria = new Alimento('ensalada de zanahoria','zanahoria','almuerzo','xxx');
ensaladaZanahoria.agregarIngrediente('zanahoria',30,'gr');
ensaladaZanahoria.agregarIngrediente('arveja verde',30,'gr');
const ensaladaTomateQueso = new Alimento('ensalada tomate con queso','tomate','almuerzo','xxx');
ensaladaTomateQueso.agregarIngrediente('tomate',30,'gr');
ensaladaTomateQueso.agregarIngrediente('queso',80,'gr');
const cazuelaFrijol = new Alimento('cazuela de frijoles','frijol cargamanto','almuerzo','xxx');
cazuelaFrijol.agregarIngrediente('frijol cargamanto',400,'gr');
cazuelaFrijol.agregarIngrediente('maduro',1,'unidad');
cazuelaFrijol.agregarIngrediente('aguacate',80,'gr');
const cazuelaLenteja = new Alimento('cazuela de lentejas','lenteja','almuerzo','xxx');
cazuelaLenteja.agregarIngrediente('lenteja',300,'gr');
cazuelaLenteja.agregarIngrediente('aguacate',80,'gr');
const lentejasMexicanas = new Alimento('lentejas mexicana','lenteja','almuerzo','xxx');
lentejasMexicanas.agregarIngrediente('lenteja',300,'gr');
lentejasMexicanas.agregarIngrediente('aguacate',80,'gr');
const frijolesMexicana = new Alimento('frijoles mexicana','frijol cargamanto','almuerzo','xxx');
frijolesMexicana.agregarIngrediente('frijol cargamanto',300,'gr');
frijolesMexicana.agregarIngrediente('aguacate',80,'gr');
const ensaladaTomate = new Alimento('ensalada tomate','tomate verde','almuerzo','xxx');
ensaladaTomate.agregarIngrediente('tomate verde', 75, 'gr');

clasificarAlimentoGuardar(manzanaCaramelizada);
clasificarAlimentoGuardar(carneGuisada);
clasificarAlimentoGuardar(carneDurazno);
clasificarAlimentoGuardar(pescadoAsado);
clasificarAlimentoGuardar(verdurasSalteadas);
clasificarAlimentoGuardar(ensaladaMango);
clasificarAlimentoGuardar(polloTroceadoEnSalsa);
clasificarAlimentoGuardar(polloConChampiñiones);
clasificarAlimentoGuardar(lentejasViudas);
clasificarAlimentoGuardar(pescadoAgridulce);
clasificarAlimentoGuardar(cañonDurazno);
clasificarAlimentoGuardar(arvejaVerde);
clasificarAlimentoGuardar(ensaladaRepolloPina);
clasificarAlimentoGuardar(ensaladaZanahoria);
clasificarAlimentoGuardar(ensaladaTomateQueso);
clasificarAlimentoGuardar(cazuelaFrijol);
clasificarAlimentoGuardar(cazuelaLenteja);
clasificarAlimentoGuardar(frijolesMexicana);
clasificarAlimentoGuardar(lentejasMexicanas);
clasificarAlimentoGuardar(ensaladaTomate);


const alimentos = Alimento.buscarTodos();

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

  const listaAlimentosPersonalizada = [];
  let listaIngredientes;
  
  for(let i = 0; i < alimentos.length; i++){
    listaIngredientes = alimentos[i].ingredientes;
    for(let j = 0; j < listaIngredientes.length; j++){
      let ingrediente = listaIngredientes[j][0];
      if(doSearch(listaIntolerancias,ingrediente) >= 0){
        i++
      }  
    }
    listaAlimentosPersonalizada.push(alimentos[i]);
  }  
  return listaAlimentosPersonalizada;
};

usuario.agregarLista(agregarAlimentoListaUsuario(intolerancias));
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


//console.log(minuta.menuAlmuerzo);

const asignarDiaSemana = (fecha) => {
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

const asignarMes = (fecha) => {
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

const agregarDiasMinuta = () => {
   
  let formatofechaInicial = `${asignarDiaSemana(fechaInicial)} ${fechaInicial.date()} ${asignarMes(fechaInicial)}`;
  minuta.agregarDiaMinuta(formatofechaInicial);
  let diaMas;
  let fechaDia;
 
  for(let i = 0; i < diasMenus; i++){
    diaMas = fechaInicial.add(1,'days');
    fechaDia = `${asignarDiaSemana(diaMas)} ${diaMas.date()} ${asignarMes(diaMas)}`;
    minuta.agregarDiaMinuta(fechaDia);
  }
}

agregarDiasMinuta(); 

for(let diaMenu in minuta._menuComida){
  minuta.alimentoAleatorioDesdeComida('almuerzo','menuAlmuerzo',diaMenu);
  //minuta.alimentoAleatorioDesdeComida('cena','menuCena');
}

console.log(minuta._comida.almuerzo);
console.log(minuta._menuComida);

console.log(minuta._menuComida['Domingo 26 abril'].menuAlmuerzo);
console.log(minuta._menuComida['Lunes 27 abril'].menuAlmuerzo);
console.log(minuta._menuComida['Martes 28 abril'].menuAlmuerzo);
console.log(minuta._menuComida['Miercoles 29 abril'].menuAlmuerzo);
console.log(minuta._menuComida['Jueves 30 abril'].menuAlmuerzo);





