//Faça um Programa que peça dois números e imprima o maior deles.

package atividades.src;

import java.util.Scanner;

public class Atividade18 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        double number1 = scanner.nextDouble();

        System.out.print("Digite o segundo número: ");
        double number2 = scanner.nextDouble();

        String result = verifyBiggestNumber(number1, number2);
        System.out.println(result);
        scanner.close();

    }

    public static String verifyBiggestNumber(double number1, double number2) {
        if(number1 > number2) {
            return String.format("O maior número é %.2f!", number1);
        } else if (number2 > number1) {
            return String.format("O maior número é %.2f!", number2);
        } else {
            return String.format("Os números são iguais!");
        }
    }
}
