// Faça um programa que mostre os n termos da Série a seguir:
//   S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m.
// Imprima no final a soma da série.

import cli from "../cli.js";

cli.question("Informe a quantidade de termos da Série: ", (termos) => {
    console.log(calculaSerie(Number(termos)).toFixed(4));
    cli.close();
});

function calculaSerie(termos) {
    let accountant = 1;
    let sum = 0;

    while(accountant <= termos) {
        const termo = accountant / (( 2 * accountant) - 1);
        sum += termo;
        accountant++
    }

    return sum;
}
