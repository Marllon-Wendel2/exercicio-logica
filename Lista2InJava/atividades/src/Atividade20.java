// Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

package atividades.src;

import java.util.Scanner;

public class Atividade20 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o seu Gênero: M ou F");
        String genero = scanner.nextLine();

        if(genero.toUpperCase().equals("M")) {
            System.out.println("O seu gênero é masculino.");
        } else if (genero.toUpperCase().equals("F")) {
            System.out.println("O seu gênero é feminino.");
        } else {
            System.out.println("Gênero inválido.");
        }

        scanner.close();
    }
}
