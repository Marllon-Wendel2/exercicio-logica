//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
import cli from "../cli.js";

cli.question("Quantas horas você trabalhou?", (horasTrabalhadas) => {
    cli.question("Qual valor da sua hora trabalhada?", (valorHora) => calculaSalario(horasTrabalhadas, valorHora))
})

function calculaSalario(horasTrabalhadas, valorHora) {
    const horasNumber = Number(horasTrabalhadas);
    const valorNumber = Number(valorHora);
    
    const salario = valorNumber * valorHora
    cli.close()
    console.log (salario.toFixed(2))
}
