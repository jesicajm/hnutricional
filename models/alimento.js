const alimentos = [];

class Alimento{
    constructor(nombre,comida,preparacion){
      this._nombre = nombre;
      this._comida = comida;
      this._preparacion = preparacion;
      this._tipoAlimento;
      this._beneficio;
      this._ingredientes = [];
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

    agregarIngrediente(nombre,unidadMedida,cantidad){
      this._ingredientes.push([nombre,unidadMedida,cantidad]);
    }
    
    save(){
      alimentos.push(this);
    }

    static buscarTodos(){
      return alimentos;
    }

};

module.exports = Alimento;