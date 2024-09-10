// Faça um Programa para um caixa eletrônico.
// O programa deverá perguntar ao usuário a valor do saque e depois informar
// quantas notas de cada valor serão fornecidas.
// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais.
// O valor mínimo é de 10 reais e o máximo de 600 reais.
// O programa não deve se preocupar com a quantidade de notas existentes na
// máquina.
// Exemplo 1:
// Para sacar a quantia de 256 reais, o programa fornece duas notas de 100,
// uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2:
// Para sacar a quantia de 399 reais, o programa fornece três notas de 100,
// uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
import cli from "../cli.js";

function sacaDinheiro(dinheiro) {
    let notas100;
    let notas50;
    let notas10;
    let notas5;
    let notas1;

    const dinheiroNumber = Number(dinheiro)
    const listaString = dinheiro.split("")
    const listaNumber = listaString.map(Number)

    if(dinheiroNumber > 600 || dinheiroNumber < 10) {
        console.log('Valor minimo de R$10,00, valor máximo de R$600,00')
        return
    }

    if(listaNumber.length === 3){
        notas100 = listaString[0];
        if(listaNumber[1] >= 5) {
            notas50 = 1
            notas10 = listaNumber[1] - 5
        } else {
            notas50 = 0;
            notas10 = listaNumber[1]
        }
        if(listaNumber[2] >= 5){
            notas5 = 1
            notas1 =  listaNumber[2] -5
        } else {
            notas5 = 0
            notas1 = listaNumber[2]
        }

        console.log(`valor em notas de 100 é ${notas100}, notas de 50 ${notas50}, notas de 10 ${notas10}, em notas de 5 ${notas5} e em notas de 1 ${notas1}`)
    }


    if(listaNumber.length === 2){
        if(listaNumber[0] >= 5) {
            notas50 = 1
            notas10 = listaNumber[0] - 5
        } else {
            notas50 = 0
            notas10 = listaNumber[0]
        }
        if(listaNumber[1] >= 5) {
            notas5 = 1
            notas1 = listaNumber[1] -5
        } else {
            notas5 = 0
            notas1 = listaNumber[1]
        }

        console.log(`valor em notas de 50 ${notas50}, notas de 10 ${notas10}, em notas de 5 ${notas5} e em notas de 1 ${notas1}`)
    }
    cli.close()
}

cli.question("Qual valor deseja sacar? ", (dinheiro) => sacaDinheiro(dinheiro))