// Faça um Programa que peça um valor e mostre na tela se o valor é
// positivo ou negativo.

package atividades.src;

import java.util.Scanner;

public class Atividade19 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe um número");
        var number =  scanner.nextDouble();

        if (number >= 0) {
            System.out.println("O número " + number + " é positivo!");
        }
        if (number < 0) {
            System.out.println("O número " + number + " é negativo!");
        }
        
        scanner.close();
    }
}
