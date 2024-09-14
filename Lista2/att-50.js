// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de
// números pares e a quantidade de números impares.
import cli from "../cli.js";

function ehParOuImpar(numeros) {
    let ehPar = [];
    let ehImpar = []
    numeros.forEach(numero => {
        if(numero % 2 === 0) {
            ehPar.push(numero)
        }
        if(numero % 2 !== 0) {
            ehImpar.push(numero)
        }
    })
    console.log(`${ehImpar} \n${ehPar}`)
    cli.close()
}

cli.question("Informe 10 números: ", (numeros) => {
    const numeroString =  numeros.split(", ")
    const numetosN = numeroString.map(Number)
    ehParOuImpar(numetosN)
})