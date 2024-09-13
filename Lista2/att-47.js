// Altere o programa anterior para mostrar no final a soma dos números.
import intervalo from "./att-46.js";
import cli from "../cli.js"


let soma = 0;
function somaIntervalo(numero1, numero2) {
    const result = intervalo(numero1, numero2)
    result.forEach((numero) => {
        soma += numero
    })
    console.log(soma)
    cli.close()
}

cli.question("Quais números vamos somar os intervalos? ", (numeros) => {
    const arrString = numeros.split(", ")
    const arrNumber =  arrString.map(Number)

    somaIntervalo(arrNumber[0], arrNumber[1])
})