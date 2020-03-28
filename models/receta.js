//const grupoAlimentos = require('./alimentos');
const recetasAlmuerzo = [];
const recetasCena = [];

module.exports = class Receta{
    constructor(nombre,tipoComida,preparacion,tiempoPreparacion){
     this._nombre = nombre;
     this._tipoComida = tipoComida;
     this._cantidadIngredientes = [];
     this._preparacion = preparacion;
     this._tiempoPreparacion = tiempoPreparacion;
     this._composicionNutricional = []
}
 
  get nombre(){
     return this._nonbre;
  }   
 
  get tipoComida(){
     return this._tipoComida;
  }
     
  get cantidadIngredientes(){
     return this._cantidadIngredientes;
  }
 
  get composicionNutricional(){
     return this._composicionNutricional;
  }
 
  get preparacion(){
     return this._preparacion;
  }
 
  get tiempoPreparacion(){
     return this._tiempoPreparacion;
  }
 
  static todoRecetasAlmuerzo(){
     return recetasAlmuerzo;
  }

  static todoRecetasCena(){
     return recetasCena;
  }

  agregarCantidadIngrediente(nombre,cantidad,medidaCantidad){
     const ingrediente = {
        nombre,
        cantidad,
        medidaCantidad
      };
      this.cantidadIngredientes.push(ingrediente);
  }

  clasificarTipoReceta(){
     if(this.tipoComida === 'almuerzo'){
        recetasAlmuerzo.push(this);
     }else if(this.tipoComida === 'cena'){
        recetasCena.push(this);
     }
  }
 
  crearListaIngredientes(){
     const listaIngredientes = [];
     this.cantidadIngredientes.forEach(ingrediente => {
     listaIngredientes.push(ingrediente.nombre)});
     return listaIngredientes; 
  }

}


