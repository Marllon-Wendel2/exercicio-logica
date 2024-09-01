// Faça um Programa que peça 2 números inteiros e um número real.
// Calcule e mostre:
//     o produto do dobro do primeiro com metade do segundo.
//     a soma do triplo do primeiro com o terceiro.
//     o terceiro elevado ao cubo.

import cli from "../cli.js";

function verifyType(primeiroN, segundoN, TerceiroN) {
    const primeiroEhInteiro = Number.isInteger(primeiroN);
    const segundoEhInteiro = Number.isInteger(primeiroN);
    const segundoEhReal = Number.isFinite(segundoN);

    if(primeiroEhInteiro || segundoEhReal) {
        return {primeiro: primeiroEhInteiro, segundo: segundoEhReal}
    } else {
        throw new Error("Informe a que peça 2 números inteiros e um número real")
    }
}

function calculaDobroEMetade(primeiroN, segundoN) {

    const dobro = primeiroEhInteiro * 2;
    const metade = segundoEhReal / 2;
    
    const result = dobro * metade;
    console.log(result)
}

function somaTriplo(primeiro, terceiro) {
    const tripo =  terceiro * 3;
    const result =  tripo + primeiro
    return result;
}

function cubo(terceiro) {
    const aoCubo =  terceiro*terceiro*terceiro
    return aoCubo;
}

cli.question("Informe um número inteiro: ", () => )