import cli from '../cli.js'

// As Organizações Tabajara resolveram dar um aumento de salário aos seus
// colaboradores e lhe contrataram para desenvolver o programa que calculará os
// reajustes.

// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o
// seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% 
//     Após o aumento ser realizado,
//     informe na tela:
//         o salário antes do reajuste;
//         o percentual de aumento aplicado;
//         o valor do aumento;
//         o novo salário, após o aumento

function calculaNovoSalario(salario) {
    const salarioN =  Number(salario)
    if(salarioN <= 280) {
        const aumento = salarioN * 0.2;
        const novoSalario =  salarioN + aumento
        console.log(`O salario de R$${salarioN.toFixed(2)} foi aumentado em 20%(que corresponde a R$${aumento.toFixed(2)}) e agora é de R$${novoSalario.toFixed(2)}`)
    }
    if(salarioN > 280 && salarioN <= 700) {
        const aumento = salarioN * 0.15;
        const novoSalario =  salarioN + aumento
        console.log(`O salario de R$${salarioN.toFixed(2)} foi aumentado em 15%(que corresponde a R$${aumento.toFixed(2)}) e agora é de R$${novoSalario.toFixed(2)}`)
    }
    if(salarioN > 700 && salarioN <= 1500) {
        const aumento = salarioN * 0.1;
        const novoSalario =  salarioN + aumento
        console.log(`O salario de R$${salarioN.toFixed(2)} foi aumentado em 10%(que corresponde a R$${aumento.toFixed(2)}) e agora é de R$${novoSalario.toFixed(2)}`)
    }
    if(salarioN > 1500) {
        const aumento = salarioN * 0.05;
        const novoSalario =  salarioN + aumento
        console.log(`O salario de R$${salarioN.toFixed(2)} foi aumentado em 5%(que corresponde a R$${aumento.toFixed(2)}) e agora é de R$${novoSalario.toFixed(2)}`)
    }
    cli.close()
}

cli.question("Qual o valor do seu salário? ", (salario) => calculaNovoSalario(salario))