// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a
// velocidade de um link de Internet (em Mbps), calcule e informe o tempo
// aproximado de download do arquivo usando este link (em minutos).

package atividades.src;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Scanner;

public class Atividade17 {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual o tamanho do arquivo que deseja baixar em MB?");
        double fileSize = scanner.nextDouble();

        System.out.println("Qual a velocidade da sua internet em Mbps?");
        double net = scanner.nextDouble();

        double timeSec =  fileSize / net;
        double timeMim = timeSec / 60;
        BigDecimal numberConverted = new BigDecimal(timeMim).setScale(2, RoundingMode.HALF_UP);

        System.out.println("Vai ser preciso " + numberConverted + " minutos!");
        scanner.close();
    }
}
