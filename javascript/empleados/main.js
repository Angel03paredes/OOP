

const Comercial = require('./Comercial');
const Repartidor = require('./Repartidor');

var repartidor = new Repartidor("jesus",24,1000,"zona 3");
console.log(repartidor.getRepartidor())
var comercial = new Comercial("angel",35,1000,400);
console.log(comercial.getComercial())