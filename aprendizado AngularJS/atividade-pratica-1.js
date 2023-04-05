const nota1 = 5;
const nota2 = 4;
const nota3 = 6;

const Media = (nota1 + nota2 + nota3) / 3;

if (Media >= 7) {
    console.log('Aprovado com media:', Media.toFixed(2))
} else if (Media >= 5) {
    console.log('Recuperação com media:', Media.toFixed(2))
} else if (Media < 5) {
    console.log('Reprovado com media:', Media.toFixed(2))
}
