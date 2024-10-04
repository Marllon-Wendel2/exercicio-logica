// Tendo como dados de entrada a altura de uma pessoa,
// construa um algoritmo que calcule seu peso ideal,
// usando a seguinte fórmula: (72.7*altura) - 58

package atividades.src;

import java.util.Scanner;

public class Atividade11 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual a sua altura? Em metros.");
        double altura = scanner.nextDouble();

        double pesoideal = (72.7 * altura) - 58;

        System.out.println("Seu peso ideal é: " + pesoideal);
        scanner.close();
    }
}
