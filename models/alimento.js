const alimentos = [];

class Alimento{
    constructor(nombrePreparacion,nombre,comida,preparacion){
      this._nombrePreparacion = nombrePreparacion;
      this._nombre = nombre;
      this._comida = comida;
      this._preparacion = preparacion;
      this._tipoAlimento;
      this._beneficio;
      this._ingredientes = [];
    }
  
    get nombrePreparacion(){
      return this._nombrePreparacion;
    }

    get nombre(){
      return this._nombre;
    }
  
    get beneficio(){
      return this._beneficio;
    }
    
    get preparacion(){
        return this._preparacion;
      }

    get tipoAlimento(){
        return this._tipoAlimento;
    }  

    get comida(){
      return this._comida;
    }  
   
    get ingredientes(){
      return this._ingredientes;
    }


    set comida(comida){
        this._comida = comida;
    }

    set tipoAlimento(tipo){
      this._tipoAlimento = tipo;
    }

    agregarIngrediente(nombre,cantidad,unidadMedida){
      this._ingredientes.push([nombre,cantidad,unidadMedida]);
    }

    /*clasificarTipoAlimento(tipo){
      this.tipoAlimento = tipo
    }*/
    
    save(){
      alimentos.push(this);
    }

    static buscarTodos(){
      return alimentos;
    }

};

module.exports = Alimento;