
// aula sobre variaveis e constantes
//let é uma variavel que pode ter seu valor alterado a qualquer momento
//const é uma constante que uma vez decretado seu valor, não pode ser alterada depois

const gasosa = 5;
let KM = 20;
const gasmed = 12;
let Lconsumidos = KM / gasmed;
const Vconsumo = Lconsumidos * gasosa;
console.log(Lconsumidos,"Litros");
console.log("R$",Vconsumo.toFixed(2));

