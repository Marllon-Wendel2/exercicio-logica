// Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre
// a temperatura em graus Celsius.
// C = (5 * (F-32) / 9).

package atividades.src;
import java.util.Scanner;

public class Atividade9 {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);
        
        System.out.println("Informe quantos Farenheit deseja converter: ");
        double tempInFarenheit = scanner.nextDouble();

        double tempInCelsius = (5 * (tempInFarenheit - 32)) / 9;
        System.out.println(String.format("O valor de %.2f F equivale a %.2f C!", tempInFarenheit, tempInCelsius));

        scanner.close();
    }
}
