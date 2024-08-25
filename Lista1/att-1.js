//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

let a = 4;
let b = 2; 
let c = 3;

function resolucao(value1, value2, value3) {
    const valorSomado = somavalue(value1, value2);
    const result = comparaValue(valorSomado, value3)
    return result
}


function somavalue(value1, value2) {
    if(isNaN(value1) || isNaN(value2)) {
        return ("Os valores precisam ser do tipo Number")
    }
    const valorTotal =  value1 +  value2;
    return valorTotal;
}

function comparaValue(value1, value2) {
    if(value1 <= value2) {
        return `O ${value1} não é maior que ${value2}`
    } else {
        return `O ${value1} é maior que ${value2}`
    }
}

console.log(resolucao(a,b,c))