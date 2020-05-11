const usuarios = [];

class Usuario{
    constructor(nombre,email,password,tienePlan,intolerancias){
      this._nombre = nombre;
      this._email = email;
      this._password = password;
      this._tienePlan = tienePlan;
      this._id = 0;
      this._planNutricional;
      this._intolerancias;
      this._listaAlimentos;
      this._minuta;
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

    get tienePlan(){
      return this._tienePlan;
    }
  
    get planNutricional(){
      return this._planNutricional;
    }

    get minuta(){
      return this._minuta;
    }

    get listaAlimentos(){
      return this._listaAlimentos;
    }
    
    set tienePlanNutricional(tienePlan){
      this._tienePlanNutricional  = tienePlan;
    }

    set planNutricional(plan){
      this._planNutricional = plan;
    }

    set listaAlimentos(lista){
      this._listaAlimentos = lista;
    }

    set minuta(minuta){
      this._minuta = minuta;
    }

    guardar(){
      usuarios.push(this);
    }

    agregarPlanNutricional(planNutricional){
      this._planNutricional = Object.assign(planNutricional);
    }

    agregarLista(lista){
      this._listaAlimentos = lista;
    }
    
    agregarMinuta(minuta){
      this._minuta = Object.assign(minuta);
    }

};

exports.Usuario = Usuario;
exports.usuarios = usuarios;

