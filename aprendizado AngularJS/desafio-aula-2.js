const Etanol = 5.44;
const Gasolina = 5.68;
let KM = 88;
const KMpL = 14;
const CarFuel = Gasolina;
let LConsumed = KM / KMpL;
if (CarFuel === Gasolina) {
    console.log("O custo da viagem de", KM , "Km","se utilizado Gasolina será em Reais:", "R$",(Gasolina * LConsumed).toFixed(2))
} else {
    console.log("O custo da viagem de", KM , "Km","se utilizado Etanol será em Reais:", "R$", (Etanol * LConsumed).toFixed(2))
}