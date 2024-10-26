// Faça um Programa para uma loja de tintas.

// O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

// Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados
// e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00
// ou em galões de 3,6 litros, que custam R$ 25,00.

// Informe ao usuário as quantidades de tinta a serem compradas
// e os respectivos preços em 3 situações:

//     comprar apenas latas de 18 litros;
//     comprar apenas galões de 3,6 litros;
//     misturar latas e galões, de forma que o preço seja o menor.
//         Acrescente 10% de folga e sempre arredonde os valores para cima,
//         isto é, considere latas cheias.

package atividades.src;

import java.util.Scanner;

public class Atividade16 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Quantos metros quadrados deseja pintar? ");
        double areaPainted = scanner.nextDouble();
        double liters = areaPainted / 6;

        double litersInCans = Math.ceil(liters);
        double qtdOfCans = Math.floor(litersInCans / 18); 


        double qtdOgGallon = Math.ceil((liters - (qtdOfCans * 18)) / 3.6);

        double valueCans = qtdOfCans * 80.00;
        double valueGallon =  qtdOgGallon * 25.00;


        System.out.println(String.format("Você ira precisa de %.2f latas de tinta que custarão R$%.2f e de %.2f galões que custarão R$%.2f!", qtdOfCans, valueCans, qtdOgGallon, valueGallon));

        scanner.close();
        
    }
}
