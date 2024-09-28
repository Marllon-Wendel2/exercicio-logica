//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

package atividades.src;

import java.util.Scanner;

public class Atividade4 {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Informe o primeiro número: ");
        int numero1 = Integer.parseInt(scanner.nextLine());

        System.out.println("Informe o segundo número ");
        int numero2 = Integer.parseInt(scanner.nextLine());

        System.out.println("Informe o terceiro número: ");
        int numero3 = Integer.parseInt(scanner.nextLine());

        System.out.println("Informe o quarto número: ");
        int numero4 = Integer.parseInt(scanner.nextLine());

        int media = (numero1 + numero2 + numero3 + numero4) / 4;

        System.out.println("A média das notas é de: " + media);
        scanner.close();
    }
}
