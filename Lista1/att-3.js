//3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela

let a = 5;
let b = 5;
let c = 2

function verifyNumbers(a, b) {
   return a === b ? true : false
    // if(a === b) {
    //     return true;
    // } else { 
    //     return false;
    // }
}

function somaNumber(a,b,c) {
    let result;

    if(isNaN(a) || isNaN(b)) {
        return "É preciso enviar que o valores sejam do tipo Number"
    }
    const verificando = verifyNumbers(a,b)
    if(verificando) {
        result = a + b
    } else {
        result = a * b
    }
    c += result
    return c

}

console.log(somaNumber(a,b,c))