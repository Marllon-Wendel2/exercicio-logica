// Faça um programa para uma loja de tintas.
// O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

// Considere que a cobertura da tinta é de 1 litro para cada 3 metros
// quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.

// Informe ao usuário a quantidades de latas de tinta
// a serem compradas e o preço total.

package atividades.src;

import java.util.Scanner;

public class Atividade15 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double valorDasLatas =  80.00;
        double metrosPorLitros = 3;
        double litrosPorLata = 18;
        

        System.out.println("Quantos metros quadrados deseja pintar: ");
        double metros =  scanner.nextDouble();

        double litrosUsados = metros / metrosPorLitros;
        double qtdDeLatas = Math.ceil(litrosUsados/litrosPorLata);
        double valorAPagar = qtdDeLatas * valorDasLatas;

        System.out.printf("Você irá precisa de %.2f de latas, que custarão R$%.2f. ", qtdDeLatas, valorAPagar);
        scanner.close();

    }
}
