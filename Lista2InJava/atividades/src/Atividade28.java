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
package atividades.src;

import java.util.Scanner;

public class Atividade28 {
    static Scanner scanner = new Scanner(System.in);
 public static void main(String[] args) {
    System.out.println("Quanto você recebe por hora? ");
    Double valorPorHora = scanner.nextDouble();
    scanner.nextLine();

    System.out.println("Quantas horas trabalho? ");
    Double horasTrabalhadas = scanner.nextDouble();
    scanner.nextLine();

    Double salarioBruto = valorPorHora * horasTrabalhadas;

    calculatePay(salarioBruto);
 }

 public static void calculatePay(Double salario) {
    Double INSS = salario * 0.1;
    Double FGTS = salario * 0.11;
    Double IR = 0.0;
    Double totalDesconto = INSS + FGTS + IR;
    Double salarioLiquido = salario - totalDesconto;
    if( salario < 900) {
        salarioLiquido = salario - totalDesconto;
    } else if (salario > 900 && salario <= 1500) {
        IR = salario * 0.05;
        totalDesconto += IR;
        salarioLiquido = salario - totalDesconto;
    } else if (salario > 1500 && salario <= 2500) {
        IR = salario * 0.1;
        totalDesconto += IR;
        salarioLiquido = salario - totalDesconto;
    } else if(salario > 2500) {
        IR = salario * 0.1;
        totalDesconto += IR;
        salarioLiquido = salario - totalDesconto;
    }
    System.out.print(String.format(
        """
            Salário bruto:  %.2f
            (-) IR:         %.2f
            (-) INSS:       %.2f
            FGTS:           %.2f
            Total de des:   %.2f
            Salário Liqu:   %.2f
        """
    , salario, IR, INSS, FGTS, totalDesconto, salarioLiquido));
 }
}
