//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
import cli from "../cli.js";

let notas = [];
let interacao = 0;

function incremetaNota(nota) {
    notas.push(parseFloat(nota))
    return notas
}

function perguntarNota() {
    if(interacao < 4) {
        cli.question(`Qual foi a nota ${interacao + 1}?`, (nota) => {
            incremetaNota(nota);
            interacao++
            perguntarNota()
        });
    } else {
        calculaMedia()
        cli.close()
    }
}

function calculaMedia() {
    let somaNotas = 0;
    notas.forEach(nota => somaNotas += nota)
    const media = somaNotas/notas.length
    console.log(`A média das notas é: ${media.toFixed(2)}`)
}



perguntarNota()