//Faça um Programa que leia três números e mostre o maior deles.
import cli from "../cli.js";

function ordenarNumbers(numeros) {
    numeros.sort((a, b) => b - a);
    return numeros[0]
}

cli.question("Informe um número: ", (numero1) => {
    let listaNumerosString = []
    cli.question("Informe um número: ", (numero2) => {
        cli.question("Informe um número: ", (numero3) => {
            listaNumerosString.push(numero1, numero2, numero3)
            const listaNumbers = listaNumerosString.map(Number)
           const result =  ordenarNumbers(listaNumbers)
           console.log(`O Maior número é: ${result}`)
           cli.close()
        })
    })
})