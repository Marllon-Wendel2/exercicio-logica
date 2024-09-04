//Faça um Programa que leia três números e mostre o maior deles.
import cli from "../cli.js";

function ordenarNumbers(numeros) {
    numeros.sort((a, b) => a - b);
    return numeros[0]
}

cli.question("Informe um número: ", (numero1) => {
    let listaNumeros = []
    cli.question("Informe um número: ", (numero2) => {
        cli.question("Informe um número: ", (numero3) => {
            listaNumeros.push(numero1, numero2, numero3)
           const result =  ordenarNumbers(listaNumeros)
           console.log(`O Maior número é: ${result}`)
           cli.close()
        })
    })
})