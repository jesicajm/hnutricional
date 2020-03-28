const Usuario = require('./models/usuario');
const PlanNutricional = require('./models/planNutricional');
const Receta = require('./models/receta');
const grupoAlimentos = require('./models/alimentos');

//entradas usuario

const nombre = 'Jessica';
const email ='jessica.jaramillo.gmail.com';
const password = '12jj.aw';
const tienePlanNutricional = true;
const desayuno = ['lacteo','harina','frutas','grasas'];
const mediaManana = ['lacteo','harina','fruta'];
const almuerzo = ['carne','harina','verduras','leguminosas','grasas'];
const algo = ['lacteo','harina','fruta'];
const cena = ['carne','harina','verduras'];

let fechaInicialPlanificarMenus;
let fechaHastaPlanificarMenus;


//crear instancia: planNutricional,usuario,receta

const planNutricional = new PlanNutricional(desayuno,mediaManana,almuerzo,algo,cena);
const usuario = new Usuario(nombre,email,password);
const receta = new Receta('arroz con camarones', 'almuerzo','xxxxx','1hora');
const receta2 = new Receta('arroz atollado','cena','xxxx','2horas');


usuario.agregarPlanNutricional(planNutricional);
//console.log(usuario.planNutricional)
receta.clasificarTipoReceta();
receta2.clasificarTipoReceta();


// agregar ingredientes receta

receta.agregarCantidadIngrediente('camarones',1/2,'kilo');
receta.agregarCantidadIngrediente('arroz',2,'tazas');
receta.agregarCantidadIngrediente('zanahoria',1,'unidad');
receta.agregarCantidadIngrediente('tomates',2,'unidad');
receta.agregarCantidadIngrediente('diente de ajo',1,'unidad');
receta.agregarCantidadIngrediente('Sal');
receta.crearListaIngredientes();

receta2.agregarCantidadIngrediente('carne de cerdo',1/2,'libra');
receta2.agregarCantidadIngrediente('costilla de cerdo',1/2,'costillaCerdo');
receta2.agregarCantidadIngrediente('piernas de pernil de pollo',1,'libra');
receta2.agregarCantidadIngrediente('diente de ajo',2,'unidad');
receta2.agregarCantidadIngrediente('tomates',6,'unidad');


// composicion nutricional de receta

const evaluarComposicionNutricional = (nuevaReceta) =>{
  const ingredientes = nuevaReceta.crearListaIngredientes();
  ingredientes.forEach(ingrediente =>{
    for(tipoAlimento in grupoAlimentos){
      grupoAlimentos[tipoAlimento].forEach(alimento => {
         if(alimento === ingrediente){
            nuevaReceta.composicionNutricional.push(tipoAlimento);
      }
    })
  }
  }) 
};

evaluarComposicionNutricional(receta);
evaluarComposicionNutricional(receta2);
//console.log(receta.composicionNutricional);

//guardar recetas segun tipo de comida

const recetasAlmuerzo = Receta.todoRecetasAlmuerzo();
const recetasCena = Receta.todoRecetasCena();

//asignar al usuario recetas segun composicin nutricional y plan de alimentacion

/*
const agregarRecetasUsuario = (planUsuario,comida,recetasComida) => {
  let cuentaAlimentoComun = 0;
  planUsuario.planNutricional[comida].forEach( alimentoPlan =>{
    recetasComida.forEach(receta => {
      receta.composicionNutricional.forEach(alimentoReceta => { 
        if(alimentoPlan === alimentoReceta){
          cuentaAlimentoComun += 1
        }
      })
    })
  })
  return cuentaAlimentoComun;
}; */ 


let recetasAlmuerzoUsuario = [];
let diasMenus = 1;

let carnes = ['atun','carne de cerdo','carne de res','contramuslo sin piel','muslo sin piel','pescado']


usuario.agregarRecetasComida('almuerzo',recetasAlmuerzo,diasMenus);
usuario.agregarRecetasComida('cena',recetasCena,diasMenus)

//console.log(usuario.minuta.recetasPlan.almuerzo[0]);

//console.log(usuario.minuta.recetasPlan.almuerzo[0].cantidadIngredientes);

usuario.crearListaMercado();

