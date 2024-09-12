// Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.
// Depois modifique o programa para que ele mostre os números um ao lado do outro

function contaAteVinte(){
    for(let i = 0; i < 21; i++) {
        console.log(i)
    }
}

function contaAteVinteHorizontal(){
    let listaN = []
    for(let i = 0; i < 21; i++) {
        listaN.push(i)
    }
    console.log(...listaN)
}

contaAteVinte()
contaAteVinteHorizontal()