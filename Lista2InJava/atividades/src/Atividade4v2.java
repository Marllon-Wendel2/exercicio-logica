package atividades.src;

import java.util.Scanner;

public class Atividade4v2 {
    public static void main(String[] args) {
    Scanner scanner =  new Scanner(System.in);

    double[] notas = new double[4];
    double soma = 0;

    for(int i = 0; i < 4; i++) {
        System.out.println("Informe a nota do bimestre " + ( i + 1) + ": ");
        notas[i] = Double.parseDouble(scanner.nextLine());
        soma += notas[i];
    }

    double media = soma / 4;
    double mediaArredondada = Math.round(media * 100.0) / 100.0;
    System.out.println("A média das notas é " + mediaArredondada);

    scanner.close();
}
}
