//14 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

const a = "Henry";
const b = "Aline";

console.log(`Antes da troca os valore são: de a = ${a} e de b = ${b}`);

function trocaValue(a, b) {
    let reserva = "";
    reserva = a;
    a = b;
    b = reserva;
    console.log(`Após a troca os valore são: de a = ${a} e de b = ${b}`);
}

trocaValue(a,b);