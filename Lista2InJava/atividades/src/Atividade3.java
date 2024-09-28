//Faça um Programa que peça dois números e imprima a soma.

package atividades.src;

import java.util.Scanner;

public class Atividade3 {
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Informe o primeiro número: ");
    int numero1 = Integer.parseInt(scanner.nextLine());

    System.out.println("Informe o segundo número: ");
    int numero2 = Integer.parseInt(scanner.nextLine());

    int soma = numero1 + numero2;
    System.out.println("A soma dos números é de " + soma);

    scanner.close();
}
}
