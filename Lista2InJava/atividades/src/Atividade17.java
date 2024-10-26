// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a
// velocidade de um link de Internet (em Mbps), calcule e informe o tempo
// aproximado de download do arquivo usando este link (em minutos).

package atividades.src;

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

        System.out.println("Vai ser preciso " + timeMim + " minutos!");
        scanner.close();
    }
}
