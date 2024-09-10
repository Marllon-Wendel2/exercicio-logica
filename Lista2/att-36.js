// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual
// operação ele deseja realizar.

// O resultado da operação deve ser acompanhado de uma
// frase que diga se o número é:
//     par ou ímpar;
//     positivo ou negativo;
//     inteiro ou decimal.
import cli from "../cli.js";

function calcula(numeros, operador) {
    let result;
    if(operador === "+"){
        result =  numeros[0] + numeros[1]
    }
    if(operador === "-"){
        result =  numeros[0] - numeros[1]
    }
    if(operador === "/"){
        result =  numeros[0] / numeros[1]
    }
    if(operador === "*"){
        result =  numeros[0] * numeros[1]
    }
    const message = responde(result)
    console.log(message)
    cli.close()
}

function ehPar(numero) {
    const numeroN = Number(numero)
    let ehPar;

    if(numeroN % 2 === 0) {
        ehPar = true
    }
    if(numeroN % 2 !== 0) {
        ehPar = false
    }
    return ehPar
}

function realOuDecimal(numero) {
    let ehReal;
    if(numero === Math.floor(numero)) {
        ehReal = true
    } else {
        ehReal = false
    }
    return ehReal
}

function ehPositivo(numero) {
    let ehPositivo;
    if(numero >= 0) {
        ehPositivo = true
    } else {
        ehPositivo = false
    }
    return ehPositivo
}

function responde(numero) {
    const positivo = ehPositivo(numero);
    const real = realOuDecimal(numero);
    const par = ehPar(numero);

    return `O número ${numero} é ${positivo ? 'positivo' : 'negativo'}, ${ real ? 'real' : 'decimal'}, ${par ? 'par' : 'impar'}`
}

cli.question("Qual os números deseja realizar a operação? ", (numeros) => {
    const arrString = numeros.split(", ")
    const arrNumber =  arrString.map(Number)
    cli.question("Qual operação quer realizar? +, -, *, /: ", (operador) => calcula(arrNumber, operador))
})