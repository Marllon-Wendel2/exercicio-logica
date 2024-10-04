// Tendo como dado de entrada a altura (h) de uma pessoa,
// construa um algoritmo que calcule seu peso ideal,
// utilizando as seguintes fórmulas:
//     Para homens: (72.7*h) - 58
//     Para mulheres: (62.1*h) - 44.7

package atividades.src;

import java.util.Scanner;

public class Atividade12 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double pesoIdeal = 0;

        System.out.println("Qual o seu gênero? ");
        String genero = scanner.nextLine().toLowerCase();

        System.out.println("Qual a sua altura? Em metros.");
        double altura = scanner.nextDouble();

        if(genero.equals("masculino")) {
            pesoIdeal = calculeForMan(altura);
        }else if(genero.equals("feminino")) {
            pesoIdeal = calculateForWoman(altura);
        } else {
            System.out.println("Informe um gênero valido, Masculino ou Feminino.");
            scanner.close();
            return;
        }
        String pesoFormated = String.format("%.2f", pesoIdeal);
        System.out.println("O seu peso ideal é de: " + pesoFormated);
        scanner.close();
    }

    public static double calculeForMan(double altura) {
        return (72.7 * altura) - 58;
    }

    public static double calculateForWoman(double altura) {
        return (62.1 * altura) - 44.7;
    }
}
