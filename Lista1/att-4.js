//4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

function anterSuce(value) {
    if(isNaN(value)) {
        return "Informe o valor do tipo Number."
    }

    return  {
        antecessor: value - 1,
        sucessor: value +1
    }
}

console.log(anterSuce(5))