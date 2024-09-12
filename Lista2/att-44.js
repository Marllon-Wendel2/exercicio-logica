// Faça um programa que leia 5 números e informe o maior número.
import cli from "../cli.js";

function ordenarNumbers(numeros) {
    numeros.sort((a, b) => b - a);
    console.log(`O vaior número informado foi ${numeros[0]}`)
}

cli.question("Informe 5 números: ", (numeros) => {
    const arrString = numeros.split(", ");
    const arrNumber = arrString.map(Number);
    ordenarNumbers(arrNumber)
    cli.close()
})
