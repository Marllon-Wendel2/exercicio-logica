// Faça um Programa que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês.

// Calcule e mostre o total do seu salário no referido mês,
// sabendo-se que são descontados 11% para o Imposto de Renda,
// 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//     salário bruto.
//     quanto pagou ao INSS.
//     quanto pagou ao sindicato.
//     o salário líquido.
// calcule os descontos e o salário líquido, conforme a tabela abaixo:

//     + Salário Bruto : R$
//     - IR (11%) : R$
//     - INSS (8%) : R$
//     - Sindicato ( 5%) : R$
//     = Salário Liquido : R$

// Obs.: Salário Bruto - Descontos = Salário Líquido.
package atividades.src;

import java.util.Scanner;

public class Atividade14 {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Quantas horas trabalhadas? ");
        double horasTrabalhadas = scanner.nextDouble();

        System.out.println("Quanto você recebe por hora? ");
        double pagamentoPorHora =  scanner.nextDouble();

        double salarioBruto = horasTrabalhadas * pagamentoPorHora;

        double INSS = salarioBruto * 0.08;
        double sindicato = salarioBruto * 0.05;
        double IR =  salarioBruto * 0.11;

        double totalDeImpostos =  INSS + sindicato + IR;

        double salarioLiquido = salarioBruto - totalDeImpostos;

        System.out.printf(
        "+ Salário Bruto: R$%.2f\n- IR: R$:%.2f\n- INSS: R$%.2f\n- Sindicato: R$%.2f\n= Salário Liquido: R$%.2f"
        , salarioBruto, IR, INSS, sindicato, salarioLiquido);

        scanner.close();

    }
}
