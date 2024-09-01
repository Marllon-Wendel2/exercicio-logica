// Faça um Programa que peça 2 números inteiros e um número real.
// Calcule e mostre:
//     o produto do dobro do primeiro com metade do segundo.
//     a soma do triplo do primeiro com o terceiro.
//     o terceiro elevado ao cubo.

import cli from "../cli.js";

function verifyType(primeiroN, segundoN, terceiroN) {
    const primeiroEhInteiro = Number(primeiroN);
    const segundoEhInteiro = Number(segundoN);
    const terceiroEhReal = Number(terceiroN);

    if(Number.isInteger(primeiroEhInteiro) && Number.isFinite(terceiroEhReal) && Number.isInteger(segundoEhInteiro)) {
        console.log("Tipo dos números estao corretos")
    } else {
        throw new Error("Informe a que peça 2 números inteiros e um número real")
    }

    calculaDobroEMetade(primeiroEhInteiro, segundoEhInteiro);
    somaTriplo(primeiroEhInteiro, terceiroEhReal);
    cubo(terceiroEhReal)
}

function calculaDobroEMetade(primeiroN, segundoN) {

    const dobro = primeiroN * 2;
    const metade = segundoN / 2;
    
    const result = dobro * metade;
    console.log(`O valor do produto do dobro do primeiro com metade do segundo é : ${result}`)
}

function somaTriplo(primeiro, terceiro) {
    const triplo =  terceiro * 3;
    const result =  triplo + primeiro
    console.log(`O valor da soma do triplo do terceiro com a soma do primeiro é : ${result.toFixed(2)}`)
}

function cubo(terceiro) {
    const aoCubo =  terceiro*terceiro*terceiro
    console.log(`O valor cubico do terceiro é de: ${aoCubo}`) ;
}

cli.question("Informe um número inteiro: ", (number1) => {
    cli.question("Informe um número inteiro: ", (number2) => {
        cli.question("Informe um número real: ", (number3) => {
            verifyType(number1,number2,number3)
            cli.close()
        })
    })
})