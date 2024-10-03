// Faça um Programa que peça 2 números inteiros e um número real.
// Calcule e mostre:
//     o produto do dobro do primeiro com metade do segundo.
//     a soma do triplo do primeiro com o terceiro.
//     o terceiro elevado ao cubo

package atividades.src;
import java.util.Scanner;

public class Atividade10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe um número inteiro: ");
        int inteiro1 = scanner.nextInt();

        System.out.println("Informe outro número inteiro: ");
        int inteiro2 = scanner.nextInt();

        System.out.println("Informe um número real: ");
        float real = scanner.nextFloat();

        int answer1 = calculate1(inteiro1, inteiro2);
        float answer2 = calculate2(inteiro1, real);
        double answer3 = calculate3(real);

        System.out.println(String.format("Resposta 1: %d. Resposta 2: %.2f. Resposta 3: %.2f.", answer1, answer2, answer3));

        scanner.close();
    }

    static public int calculate1 (int numero1, int numero2) {
        return (numero1 * 2) * (numero2 /2);
    }

    static public float calculate2 (int numero1, float numero3) {
        return (numero1 * 3) + numero3;
    }

    static public double calculate3 (float numero3) {
        return Math.pow(numero3, 3);
    }
}
