// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar
// o rendimento diário de seu trabalho.

// Toda vez que ele traz um peso de peixes maior que o estabelecido pelo
// regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa
// de R$ 4,00 por quilo excedente.

// João precisa que você faça um programa que leia a variável peso
// (peso de peixes) e calcule o excesso.

// Gravar na variável excesso a quantidade de quilos além do limite
// e na variável multa o valor da multa que João deverá pagar.
// Imprima os dados do programa com as mensagens adequadas.

package atividades.src;

import java.util.Scanner;

public class Atividade13 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int limit =  50;
        int finePerKg = 4;

        LimparConsole.limpa();

        System.out.println("Quantos o peso do peixei? Em quilos. ");
        double fishWeight = scanner.nextDouble();

        double overweight = fishWeight - limit;
        double amountToPay = overweight * finePerKg;

        if (overweight > 0) {
            System.out.printf("Você ultrapassou %.2fKGs e irá precisar pagar R$%.2f.", overweight, amountToPay);
        } else {
            System.out.println("Peso não foi execedido");
        }

        scanner.close();
    }
}
