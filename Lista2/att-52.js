// Faça um programa que, dado um conjunto de N números, determine o menor valor,
// o maior valor e a soma dos valores.
import cli from "../cli.js";

function OrdenaSoma(conjuntoN) {
    let soma = 0 

    const conjuntoOrdenado = conjuntoN.sort((a, b) => b - a)
    conjuntoN.forEach(numero => {
        soma+= numero;
    });
    console.log(`O menor numéro é ${conjuntoN[conjuntoOrdenado.length - 1]},\no maior o número é ${conjuntoOrdenado[0]},\na soma é ${soma}`)
    cli.close()
    
}

cli.question("Informe uma sequencia de números: ", (numeros) => {
    const numeroString =  numeros.split(",")
    const numetosN = numeroString.map(Number)
    OrdenaSoma(numetosN)
})