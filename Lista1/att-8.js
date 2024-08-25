//8 - Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

let a = 22;
let b = 71;
let c = 23

function ordenarNumber(a,b,c) {
    let arrayOrganizado = [];
    let numeroMaior = 0;

    numeroMaior =  comparaNumber(a,b)   
    if(c > numeroMaior) {
        arrayOrganizado.push(c)
    } else {
        arrayOrganizado.push(numeroMaior)
    }

    if(c > a) {
        arrayOrganizado.push(c)
        arrayOrganizado.push(a)
    } else {
        arrayOrganizado.push(a)
        arrayOrganizado.push(c)
    }
    console.log(arrayOrganizado)

}

function comparaNumber(a,b) {
    return a > b ? a : b
}

ordenarNumber(a,b,c)