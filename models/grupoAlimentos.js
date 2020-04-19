
const tipoAlimentos  = new Map();


const grupoAlimentos = [['leche','lacteos'],['yogurt','lacteos'],['kumis','lacteos'],['quesito','sustitutos'],['queso','sustitutos'],['huevo','sustitutos'],['queso mozzarella','sustitutos'],['chorizo','sustitutos'],['jamon','sustitutos'],['mortadela','sustitutos'],['atun','carnes'],
['carne de cerdo','carnes'],['carne de res','carnes'],['contramuslo sin piel','carnes'],['muslo sin piel','carnes'],['pescado','carnes'],['frijol cargamanto','leguminosas'],['frijol verde',
'leguminosas'],['lenteja','leguminosas'],['almojabana','cereales'],['arepa','cereales'],['arroz','cereales'],['espaguetti','cereales'],['galletas','cereales'],['harina de trigo','cereales'],['zucaritas','cereales'],['pan blanco','cereales'],['pandequeso','cereales'],['tostada','cereales'],['aceite de girasol','grasas'],['mayonesa','grasas'],['margarina','grasas'],['aguacate','grasas'],['queso crema','grasas'],['banano','frutas'],['fresas','frutas'],['granadilla','frutas'],['guanabana','frutas'],['guayaba','frutas'],['lulo','frutas'],['mandarina','frutas'],['mango','frutas'],['manzana','frutas'],['maracuya','frutas'],['melon','frutas'],['mora','frutas'],['naranja','frutas'],['arveja verde','verduras'],['auyama','verduras'],['repollo','verduras'],['tomate rojo','verduras'],['tomate verde','verduras'],['zanahoria',
'verduras'],['azucar granulada','dulces'],['bocadillo de guayaba','dulces'],['caramelos','dulces'],['chocolatina de leche','dulces'],['confites duros','dulces'],['galletas sandwich','dulces'],['galletas wafer de vainilla','dulces'],['helado','dulces'],['leche condensada','dulces'],['masmelos','dulces'],['mermelada','dulces'],['miel','dulces'],['panela','dulces']];

for(let i = 0; i< grupoAlimentos.length; i++){
  tipoAlimentos.set(grupoAlimentos[i][0],grupoAlimentos[i][1]);
}

//console.log(tipoAlimentos.get('leche'));

module.exports = tipoAlimentos;