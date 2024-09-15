// Faça um programa que, dado um conjunto de N números, determine o menor valor,
// o maior valor e a soma dos valores.

// DESAFIO DUPLO
// Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
import cli from "../cli.js";

function OrdenaSoma(conjuntoN) {
    
    let soma = 0 

    const conjuntoOrdenado = conjuntoN.sort((a, b) => b - a)
    conjuntoN.forEach(numero => {
        soma+= numero;
    });
    if(conjuntoN[conjuntoOrdenado.length - 1] < 0 || conjuntoOrdenado[0] > 1000){
        console.log("Informe numeros somente entre 0 e 1000")
        fazPergunta()
        return
    }
    console.log(`O menor numéro é ${conjuntoN[conjuntoOrdenado.length - 1]},\no maior o número é ${conjuntoOrdenado[0]},\na soma é ${soma}`)
    cli.close()
    
}

function fazPergunta() {
    cli.question("Informe uma sequencia de números: ENTRE 0 E 1000 ", (numeros) => {
        const numeroString =  numeros.split(",")
        const numetosN = numeroString.map(Number)       
        OrdenaSoma(numetosN)
    })
}
fazPergunta()