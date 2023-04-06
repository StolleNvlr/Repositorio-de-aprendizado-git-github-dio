const preco = 100;
const parcela = 5;
const Pix = preco - preco * 0.15;
const Debito = preco - preco * 0.1;
const Diparcela = preco;
const Poliparcela = preco + preco * 0.1;

if (parcela === 1) {
    console.log(Debito);
} else if (parcela <= 1) {
    console.log(Pix);
} else if (parcela === 2) {
    console.log(Diparcela);
} else if (parcela >= 2) {
    console.log(Poliparcela);
}