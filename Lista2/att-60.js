// Faça um programa que calcule o valor total investido por um colecionador em sua
// coleção de CDs e o valor médio gasto em cada um deles.
// O usuário deverá informar a quantidade de CDs e o valor para em cada um.
import cli from "../cli.js";

let qtdCd = 0;
let totalDaColecao = 0;


function calculaColecao(valorPago) {
    qtdCd++;
    totalDaColecao += valorPago
}

function calculaPrecoMedio(qtdCd, totalDaColecao){
    return totalDaColecao/qtdCd
}

function perguntaQuantosCds(){
    return new Promise((resolver) => {
        cli.question("Qual valor do cd? ", (valorDoCd) => {
            const valorDoCdInNumber = Number(valorDoCd)
            calculaColecao(valorDoCdInNumber);
            resolver()
        })
    })
}

cli.question("Quantos cds você tem? ", async (resposta) => {
    const repostaInNumber =  Number(resposta);
    for(let perguntas = 0; perguntas < repostaInNumber; perguntas++) {
        await perguntaQuantosCds()
    }

    const media = calculaPrecoMedio(qtdCd, totalDaColecao);

    console.log(`Você possui ${repostaInNumber} e gastou em média R$${media.toFixed(2)} em cada um deles!`)
    cli.close()
})