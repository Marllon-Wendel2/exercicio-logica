// Faça um Programa que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

package atividades.src;

import java.util.Scanner;

public class Atividade8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Quantas horas você trabalhou? ");
        double hoursWorked = scanner.nextDouble();

        System.out.print("Quanto você recebe por hora? ");
        double hourlyPay = scanner.nextDouble();

        double payment = calculatePaymente(hoursWorked, hourlyPay);

        System.out.println("Você vai receber: " + payment);

        scanner.close();
    }
    
    public static double calculatePaymente(double hoursWorked, double hourlyPay ) {
        return hoursWorked * hourlyPay;
    }
}
