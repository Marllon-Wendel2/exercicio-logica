// Faça um programa que peça um numero inteiro positivo e em seguida mostre este
// numero invertido.
// Exemplo:
//   12376489
//   => 98467321

import cli from "../cli.js";

cli.question("Informe um número inteiro: ", (numeber) => {
    const numberInverted = invertNumber(numeber);
    console.log(numberInverted);
    cli.close();
});

function invertNumber(numberString) {
   const numberList = numberString.split("")
                                    .reverse()
                                    .join("")

    return numberList;
}