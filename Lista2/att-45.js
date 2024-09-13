// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
function ehImpar() {
    let numberImpar = []
    for(let i= 0; i < 51; i++) {
        if(i % 2 !== 0) {
            numberImpar.push(i)
        }
    }
    console.log(numberImpar)
}
ehImpar()