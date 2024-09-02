// Faça um Programa que peça um valor e mostre na tela se o valor é
// positivo ou negativo.
import cli from "../cli.js";

function ehPositivo(number) {
    const converteNumber = Number(number);

    if(converteNumber >= 0 ) {
        console.log(`O ${converteNumber} é positivo`)
    } else [
        console.log(`O ${converteNumber} é nagativo`)
    ]

    cli.close()
}

cli.question("Informe um número: ", (number) => ehPositivo(number));