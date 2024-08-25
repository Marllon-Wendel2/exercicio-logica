//6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

const valorComAcres = function (value) {
    const valorASomar =  value * 0.05
    const result = value + valorASomar
    console.log(result)
}

valorComAcres(2)