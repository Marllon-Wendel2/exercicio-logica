// Faça um programa que receba dois números inteiros e gere os números inteiros
// que estão no intervalo compreendido por eles.

function intervalo(numero1, numero2) {
    let intervalo = []
    for(numero1; numero1 <= numero2; numero1++) {
        intervalo.push(numero1)
    }
    return intervalo
}

// console.log(intervalo(6, 48))

export default intervalo