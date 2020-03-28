const usuarios = [];

module.exports = class Usuario{
    constructor(nombre,email,password){
      this._nombre = nombre;
      this._email = email;
      this._password = password;
      this._id = 0;
      this._planNutricional;
      this._minuta = {
        recetasPlan: {
           desayuno: [],
           mediaMañana: [],
           almuerzo: [],
           algo: [],
           cena: [],
         },
        listaMercado: {

        }
      };
    }
  
    get nombre(){
      return this._nombre;
    }
  
    get email(){
      return this._email;
    }
  
    get password(){
      return this._password;
    }
  
    get planNutricional(){
      return this._planNutricional;
    }

    get minuta(){
      return this._minuta;
    }

    get recetasPlan(){
      return this._minuta.recetasPlan;
    }
    
    /*get mediaMañana(){
      return this._minuta.mediaMañana;
    }
    
    get almuerzo(){
      return this._minuta.almuerzo;
    }
    
    get algo(){
      return this._minuta.algo;
    } 

    get cena(){
      return this._minuta.cena;
    } */

    set planNutricional(newPlanNutricional){
      this._planNutricional  = newPlanNutricional;
    }

    guardar(){
      usuarios.push(this);
    }

    agregarPlanNutricional(planNutricional){
      this.planNutricional = Object.assign(planNutricional)
    }

    agregarRecetasComida(comidaDia,listaRecetas,diasPlan){
      const recetasComidaDia = this._minuta.recetasPlan[comidaDia];
      let recetasAleatorio = [];
      let recetasUnicas = new Set();
    
      while(recetasUnicas.size < diasPlan){
         let currentReceta = listaRecetas[Math.floor(Math.random() * listaRecetas.length)];
         recetasAleatorio.push(currentReceta);
         recetasUnicas = new Set(recetasAleatorio);
      } 

      for(let receta of recetasUnicas){
         recetasComidaDia.push(receta);
      }
    }

    crearListaMercado(){
      const listaIngredientes = [];
      const listaMer = [];
      for(let comidaDia in this.minuta.recetasPlan){
        let recetasComida = this.minuta.recetasPlan[comidaDia];
        recetasComida.forEach(receta => {
          receta.cantidadIngredientes.forEach(recetaIngredientes =>{
            listaIngredientes.push([recetaIngredientes.nombre,recetaIngredientes.cantidad,recetaIngredientes.medidaCantidad]);            
          })
        })
      }
     console.log(listaMercado)     
    }
    
    for(let i = 0; i)
};

  


