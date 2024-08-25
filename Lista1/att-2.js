//2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let value1 = 14;
let value2 = -4;


function ehPar(value) {
    const result = value % 2
    if(result === 0) {
        return `O número ${value} é par`
    } else {
        return `O número ${value} é impar`
    }
}

function ehPositivo(value) {
    if(value < 0) {
        return `O número ${value} é negativo`
    } else {
        return `O número ${value} é positivo`
    }
}

function resolucao(value) {
    console.log(ehPar(value))
    console.log(ehPositivo(value))
}

resolucao(value1)
