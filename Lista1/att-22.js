//22 - Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles.

function dividir(dividendo, divisor) {
    const quocient = dividendo / divisor;
    const resto = dividendo % divisor;

    return {
        quocient,
        resto
    }
}

console.log(dividir(28, 4));
console.log(dividir(27, 4));