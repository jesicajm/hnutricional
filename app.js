const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const usuarioRoutes = require('./routes/crear-usuario');
const planNutricionalRoutes = require('./routes/crear-usuario');


app.use(bodyParser.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname,'public')));

app.use('/usuario', usuarioRoutes);

app.use('/formulario', planRoutes);

/*app.use('/',(req,res,next) => {

})*/

app.listen(3000);