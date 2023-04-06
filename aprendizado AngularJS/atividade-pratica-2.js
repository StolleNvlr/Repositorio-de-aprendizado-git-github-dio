const peso = 200;
const altura = 1.79
const IMC = peso / Math.pow(altura, 2);

console.log(IMC.toFixed(2))

if (IMC < 18.5) {
    console.log('Abaixo do peso')
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso Normal')
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso')
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso')
} else if (IMC > 40) {
    console.log('Obesidade morbida')
}