//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro
//desta área para o usuário.

package atividades.src;

import java.util.Scanner;

public class Atividade7 {
    public static void main(String[] args) {
        LimparConsole.limpa();
        Scanner scanner = new Scanner(System.in);

        System.out.print("Qual o valor do lado do quadrado? ");
        double lado = Double.parseDouble(scanner.nextLine());

        double area =  lado * lado;
        double dobroArea = area * 2;
        System.out.println(String.format("A area é de %.2f e seu dobro é %.2f", area, dobroArea));
        scanner.close();
    }
}
