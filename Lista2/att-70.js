// Faça um programa que receba o valor de uma dívida e mostre uma tabela com os
// seguintes dados: valor da dívida, valor dos juros, quantidade de parcelas e
// valor da parcela.

// Os juros e a quantidade de parcelas seguem a tabela abaixo:
//     Quantidade de Parcelas  % de Juros sobre o valor inicial da dívida
//     1       0
//     3       10
//     6       15
//     9       20
//     12      25

// Exemplo de saída do programa:
//     Valor da Dívida Valor dos Juros Quantidade de Parcelas  Valor da Parcela
//     R$ 1.000,00     0               1                       R$  1.000,00
//     R$ 1.100,00     100             3                       R$    366,00
//     R$ 1.150,00     150             6                       R$    191,67

import cli from "../cli.js";

function calculaConta(divida, parcelas) {
    const juros = definePorcetagemDoJuros(parcelas);
    const valorDoJuros = divida * juros;;
    const dividaTotal = divida + valorDoJuros;
    const valorDeparcela = calculaParcela(dividaTotal,parcelas).toFixed(2);
    
    return {valorDeparcela, dividaTotal, valorDoJuros}
}

function definePorcetagemDoJuros(parcelas) {
    let juros = 0;
    if(parcelas === 0) {
        juros = 0;
    }
    if(parcelas === 3) {
        juros = 0.1;
    }
    if(parcelas === 6) {
        juros = 0.15;
    }
    if(parcelas === 9) {
        juros = 0.20;
    }

    if(parcelas === 12) {
        juros = 0.25;
    }

    return juros
};

function calculaParcela(divida, parcelas) {
    if(parcelas === 0) {
        parcelas = 1;
    }
    return divida/parcelas;
}

function exibeTabela(divida) {
    let tableLine = [0,3,6,9,12];
    console.log("Tabela de dividas")
    for(let linha = 0; linha < 13; linha++){
        if(tableLine.includes(linha)){
            const {valorDeparcela, dividaTotal, valorDoJuros} = calculaConta(divida, linha)
            console.table({"Valor da dívida": dividaTotal, "Valor do juros": valorDoJuros, "Quantidade de Parcelas": linha, "Valor das Parcelas" : valorDeparcela})
        }
    }
}

cli.question("Qual valor da sua dívida? ", (divida) => {
    const dividaInNumber = Number(divida);
    exibeTabela(dividaInNumber);
    cli.close();
});