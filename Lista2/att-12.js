// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar
// o rendimento diário de seu trabalho.

// Toda vez que ele traz um peso de peixes maior que o estabelecido pelo
// regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa
// de R$ 4,00 por quilo excedente.

// João precisa que você faça um programa que leia a variável peso
// (peso de peixes) e calcule o excesso.

// Gravar na variável excesso a quantidade de quilos além do limite
// e na variável multa o valor da multa que João deverá pagar.
// Imprima os dados do programa com as mensagens adequadas.
import cli from "../cli.js";

function calculaMulta(peso) {
    const pesoNumber = Number(peso);
    const valorLimite = 50;
    const execesso = pesoNumber - valorLimite;
    const multa = execesso * 4;
    if(pesoNumber <= valorLimite) {
        console.log("Você não ultrapassou o limite de quilos estabelecidos pelo governo de São Paulo, não precisará pagar multa.")
        cli.close()
    } else {
        console.log(`Você passou ${execesso}Kg do valor estabelecido pelo governo de São Paulo e deverá pagar R$${multa} de multa.`)
        cli.close()
    }
}

cli.question("Quanto quilo você pescou? ", (peso) => calculaMulta(peso))