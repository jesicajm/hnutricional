const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  resetToken : String,
  resetTokenExpiration : Date,
  tienePlan : {
    type : String,
  },
  planNutricional: {
    desayuno : {
      type: [String],
      required: true  
    },
    mediaManana : {
      type: [String],
      required: true 
    },
    almuerzo : {
      type: [String],
      required: true 
    },
    algo : {
      type: [String],
      required: true 
    },
    cena : {
      type: [String],
      required: true  
    }
  },
  intolerancias: String,
  fechaInicialPlanificarMenus: String,
  fechaFinalPlanificarMenus: String,
});

usuarioSchema.methods.establecerTienePlan = function(resTienePlan){
  this.tienePlan = resTienePlan;
  this.save();
};
/*
class Usuario{
    constructor(nombre,email,password,tienePlan){
      this._nombre = nombre;
      this._email = email;
      this._password = password;
      this._tienePlan = tienePlan;
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

    get intolerancias(){
      return this._intolerancias;
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

    set intolerancias(intolerancias){
      this._intolerancias = intolerancias;
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
      const db = getDb();
      return db
      .collection('usuarios')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    }

    static buscarTodos(){
      const db = getDb();
      return db
      .collection('usuarios')
      .find()
      .toArray()
      .then(usuarios => {
        console.log(usuarios);
        return usuarios;
      })
      .catch(err => {
        console.log(err);
      });
    }

    static encontrarPorId(usuaId){
      const db = getDb();
      return db
      .collection('usuarios')
      .findOne({ _id: new mongodb.ObjectId(usuaId)})
      .next()
      .then(usuario => {
        console.log(usuario);
        return usuario;
      })
      .catch(err => {
        console.log(err);
      });
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

*/
module.exports = mongoose.model('Usuario', usuarioSchema);


