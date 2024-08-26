//13 - Faça algoritmo que leia o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 


let maiorIdd = 18;

function ehMaior(nome, idd) {
    if(idd >= maiorIdd) {
        console.log(`${nome} é maior de idade`)
    } else {
        console.log(`${nome} é menor de idade`)
    }
}

//false
ehMaior("Raimundo", 17)

//true 1
ehMaior("Wellinton", 18)

//true 2
ehMaior("Tonya", 21)