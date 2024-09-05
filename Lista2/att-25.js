// Faça um programa para o cálculo de uma folha de pagamento, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto
// (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde a 11% do
// Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos.
// O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas
// trabalhadas no mês.

// Desconto do IR:
//     Salário Bruto até 900 (inclusive) - isento
//     Salário Bruto até 1500 (inclusive) - desconto de 5%
//     Salário Bruto até 2500 (inclusive) - desconto de 10%
//     Salário Bruto acima de 2500 - desconto de 20%

// Imprima na tela as informações, dispostas conforme o exemplo abaixo.
// No exemplo o valor da hora é 5 e a quantidade de hora é 220.

//         Salário Bruto: (5 * 220)        : R$ 1100,00
//         (-) IR (5%)                     : R$   55,00
//         (-) INSS ( 10%)                 : R$  110,00
//         FGTS (11%)                      : R$  121,00
//         Total de descontos              : R$  165,00
//         Salário Liquido                 : R$  935,00
import cli from "../cli.js";

function calculaSalarioLiquido(valorHora, horasTrabalhadas) {
    const salarioBruto = valorHora * horasTrabalhadas;
    let descontoIR;
    let porcetagemIR;
    const descontoINSS =  salarioBruto * 0.1;
    const FGTS = salarioBruto * 0.11;

    if(salarioBruto <= 900) {
        descontoIR = 0;
        porcetagemIR = 0;
    }
    if(salarioBruto <= 1500 && salarioBruto > 900) {
        descontoIR = salarioBruto * 0.05;
        porcetagemIR = 5;
    }
    if(salarioBruto <= 2500 && salarioBruto > 1500) {
        descontoIR = salarioBruto * 0.1;
        porcetagemIR = 10;
    }
    if(salarioBruto > 2500) {
        descontoIR = salarioBruto * 0.2;
        porcetagemIR = 20;
    }

    const descontadoTotal =  descontoINSS + descontoIR;
    const salarioLiquido =  salarioBruto - descontadoTotal;

    console.log(`
        Salário Bruto:                          R$${salarioBruto.toFixed(2)};
        (-) IR (${porcetagemIR}%):              R$${descontoIR.toFixed(2)};
        (-) INSS (10%):                         R$${descontoINSS.toFixed(2)};
        FGTS (11%):                             R$${FGTS.toFixed(2)};
        Total de descontos:                     R$${descontadoTotal.toFixed(2)};
        Salário Liquido:                        R$${salarioLiquido.toFixed(2)}
        `)
        cli.close()
}

cli.question("Qual o valor das horas trabalhadas? ", (valorHora)=> {
    cli.question("Quantas horas trabalhadas?", (horasTrabalhadas) => calculaSalarioLiquido(Number(valorHora), Number(horasTrabalhadas)))
})