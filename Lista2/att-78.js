// Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N,
// Faça um programa que calcule o valor de H com N termos.

import cli from "../cli.js";

function calculaH(n) {
    let denominador = 1;
    let numerador = 1;
    let h = 0;

    while(denominador <= n) {
        h += numerador / denominador;
        denominador++
    }

    console.log(`O valor de h: ${h.toFixed(2)}!`)
    cli.close()
}

cli.question("Informe a quantidade de termos: ", (n) => {
    calculaH(n);
})