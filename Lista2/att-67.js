// Um funcionário de uma empresa recebe aumento salarial anualmente.

// Sabe-se que:
// Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao
// dobro do percentual do ano anterior.

// Faça um programa que determine o salário atual desse funcionário.
// Após concluir isto, altere o programa permitindo que o usuário digite o salário
// inicial do funcionário.
import cli from "../cli.js";

function calculaAumento(anoAtual, salarioInicial) {
    let salario =  salarioInicial;
    let porcentagem = 0.01;
    
    for(let anoInicial = 1995; anoInicial < anoAtual; anoInicial++) {
        let aumento = salario * porcentagem;
        salario += aumento;
        porcentagem = porcentagem * 2;
    };
    return salario
}

cli.question("Qual ano quer saber o valor do sálario? informe o ano e o salario atual '1999, 700'", (answer) => {
    const answerList = answer.split(", ") 
    const yearInNumber = Number(answerList[0]);
    const startPay = Number(answerList[1])
    console.log(calculaAumento(yearInNumber, startPay).toFixed(2));
    cli.close()
})