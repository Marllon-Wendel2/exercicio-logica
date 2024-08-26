//19 - Faça um algoritmo que imprima na tela a tabuada de 1 até 10.

const mutiplicadores = [1,2,3,4,5,6,7,8,9,10]

function exibeTabuada(numero) {
    const tabuada = {
        x1 : numero * 1,
        x2 : numero * 2,
        x3 : numero * 3,
        x4 : numero * 4,
        x5 : numero * 5,
        x6 : numero * 6,
        x7 : numero * 7,
        x8 : numero * 8,
        x9 : numero * 9,
        x10 : numero * 10,
    }
    return tabuada
}

mutiplicadores.forEach(mutiplicador => {
    const result = exibeTabuada(mutiplicador);

    console.log(result)
})