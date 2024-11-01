// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

package atividades.src;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Atividade21 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> vogais = Arrays.asList("A", "E", "I", "O", "U");

        System.out.println("Digite uma letra:");
        String letter = scanner.nextLine();

        if(letter.length() == 1 && Character.isLetter(letter.charAt(0))) {
            String letterUpper =  letter.toUpperCase();

            if(vogais.contains(letterUpper)) {
                System.out.println("A letra digitada é uma vogal.");
            } else {
                System.out.println("A letra digitada é uma consoante.");
            }
        } else {
            System.out.println("Entrada inválida! Por favor, digite apenas uma letra.");
        }
        scanner.close();
    }
}
