//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

package atividades.src;

import java.util.Scanner;

public class Atividade6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Qual o valor do raio? ");
        double raio = Double.parseDouble(scanner.nextLine());

        double diametro = 2 * raio;
        double area =  3.14 * (raio * raio);

        System.out.println(String.format("O raio é de %.2f, o valor do diametro é de %.2f, o valor da area é de %.2f. ", raio, diametro, area));

        scanner.close();
    }
}
