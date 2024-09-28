//Faça um Programa que converta metros para centímetros.

package atividades.src;

import java.util.Scanner;

public class Atividade5 {
    public static void main(String[] args) {

        LimparConsole.limpa();
        Scanner scanner = new Scanner(System.in);

        System.out.print("Quantos metros deseja converter? ");
        int metros = Integer.parseInt(scanner.nextLine());

        LimparConsole.limpa();
        int centímetros = metros * 100;
        System.out.println(String.format("%d metros corresponde a %d centimetros", metros, centímetros));

        scanner.close();
    }
}
