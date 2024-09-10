// Faça um Programa que peça um número e informe se o número é inteiro ou decimal.
// Dica: utilize uma função de arredondamento.
import cli from "../cli.js"

function realOuDecimal(numero) {
    if(numero === Math.floor(numero)) {
        console.log("É real")
    } else {
        console.log("É decimal")
    }
    cli.close()
}

cli.question("Informe um número: ", (numero) => {
    const numeroN = Number(numero)
    realOuDecimal(numeroN)
})