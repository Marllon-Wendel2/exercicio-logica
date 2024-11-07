//As Organizações Tabajara resolveram dar um aumento de salário aos seus
//colaboradores e lhe contrataram para desenvolver o programa que calculará os
//reajustes.
//
//Faça um programa que recebe o salário de um colaborador e o reajuste segundo o
//        seguinte critério, baseado no salário atual:
//
//salários até R$ 280,00 (incluindo) : aumento de 20%
//salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//salários de R$ 1500,00 em diante :
//aumento de 5% Após o aumento ser realizado,
//informe na tela:
//o salário antes do reajuste;
//o percentual de aumento aplicado;
//o valor do aumento;
//o novo salário, após o aumento.


package atividades.src;

import java.util.Scanner;

public class Atividade27 {
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Qual o seu salário atual?");
        Double salario = scanner.nextDouble();
        scanner.nextLine();

        SalarioAjustado salarioAjustado = calculaAumento(salario);

        System.out.println("Salário antes do ajuste: " + salario);
        System.out.println("Aumento: " + salarioAjustado.getAumento());
        System.out.println("Salário após o ajuste: " + salarioAjustado.getSalarioAjustado());
    }

    private static SalarioAjustado calculaAumento(Double salario) {
        Double aumento = 0.0;

        if (salario <= 280) {
            aumento = salario * 0.2;
        } else if (salario > 280 && salario <= 700) {
            aumento = salario * 0.15;
        } else if (salario > 700 && salario <= 1500) {
            aumento = salario * 0.1;
        } else if (salario > 1500) {
            aumento = salario * 0.05;
        }

        Double salarioAjustado = salario + aumento;
        return new SalarioAjustado(salarioAjustado, aumento);
    }

    private static class SalarioAjustado {
        private Double salarioAjustado;
        private Double aumento;

        public SalarioAjustado(Double salarioAjustado, Double aumento) {
            this.salarioAjustado = salarioAjustado;
            this.aumento = aumento;
        }

        public Double getSalarioAjustado() {
            return salarioAjustado;
        }

        public Double getAumento() {
            return aumento;
        }
    }
}