//Faça um Programa que peça um número inteiro e determine se ele é par ou impar.
import cli from "../cli.js";

function parOuImpar(numero) {
    const numeroN = Number(numero)
    let ehPar;

    if(numeroN % 2 === 0) {
        ehPar = true
    }
    if(numeroN % 2 !== 0) {
        ehPar = false
    }

    if(ehPar) {
        console.log(`O número ${numeroN} é par`)
    } else {
        console.log(`O número ${numeroN} é impar`)
    }
    cli.close()
}

cli.question("Informe um número: ", (numero) => parOuImpar(numero))