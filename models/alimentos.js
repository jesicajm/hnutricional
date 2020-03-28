const grupoAlimentos = {
   lacteos : ['leche','yogurt','kumis'],
   sustitutos : ['quesito','queso','huevo','queso mozzarella','chorizo','jamon','mortadela'],
   carnes : ['atun','carne de cerdo','carne de res','contramuslo sin piel','muslo sin piel','pescado'],
   leguminosas : ['frijol cargamanto','frijol verde', 'lenteja'],
   cereales : ['almojabana','arepa','arroz','espaguetti','galletas','harina de trigo', 'zucaritas','pan blanco','pandequeso','tostada'],
   grasas : ['aceite de girasol','mayonesa','margarina','aguacate','queso crema'],
   frutas : ['banano','fresas','granadilla','guanabana','guayaba','lulo','mandarina', 'mango','manzana',
'maracuya', 'melon','mora','naranja'],
   verduras : ['arveja verde','auyama','repollo','tomate rojo','tomate verde','zanahoria'],
   dulces : ['azucar granulada','bocadillo de guayaba', 'caramelos', 'chocolatina de leche','confites duros','galletas sandwich', 'galletas wafer de vainilla','helado', 'leche condensada', 'masmelos','mermelada','miel','panela'],   
}

/*for(tipoAlimento in grupoAlimentos){
   let tipoAlimentos = grupoAlimentos[tipoAlimento];
   console.log(tipoAlimentos);
};*/


module.exports = grupoAlimentos;