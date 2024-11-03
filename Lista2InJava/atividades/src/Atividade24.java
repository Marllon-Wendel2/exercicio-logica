//Faça um Programa que leia três números e mostre o maior e o menor deles.

package atividades.src;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class Atividade24 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Double> numbers = new ArrayList<>();

        System.out.println("Informe o primeiro número: ");
        Double number1 = scanner.nextDouble();
        numbers.add(number1);

        System.out.println("Informe o segundo número: ");
        Double number2 = scanner.nextDouble();
        numbers.add(number2);

        System.out.println("Informe o terceiro número: ");
        Double number3 = scanner.nextDouble();
        numbers.add(number3);

        numbers.sort(Comparator.reverseOrder());

        System.out.println("O maior número é: " + numbers.get(0));
        System.out.println("O menor número é: " + numbers.get(numbers.size() - 1));
        scanner.close();
    }

}
