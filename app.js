const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const Usuario = require('./models/usuario');

const MONGODB_URL = 'mongodb+srv://jesicajm:jdiosc12@hnutricional-baupa.mongodb.net/herramienta';

const app = express();
const store = new mongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});

const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views','views');

const authRoutes = require('./routes/auth');
const herramientaRoutes = require('./routes/herramienta');
const inicioRoutes = require('./routes/inicio');
//const planRoutes = require('./routes/plan-nutricional');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(
  session({
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false,
    store: store
  })
);

app.use(csrfProtection);
app.use(flash());

app.use((req,res,next) => {
  if(!req.session.usuario){
    return next();
  }
  Usuario.findById(req.session.usuario._id)
  .then(usuario => {
    req.usuario = usuario;
    next();
  })
  .catch(err => console.log(err));
})

app.use((req,res,next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(inicioRoutes);

app.use(authRoutes);

app.use(herramientaRoutes);

mongoose
  .connect(MONGODB_URL)
  .then(result => {
    app.listen(3000);
})
  .catch(err =>{
    console.log(err);
});