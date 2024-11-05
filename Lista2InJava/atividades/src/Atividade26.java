// Faça um Programa que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.

// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou
// "Valor Inválido!", conforme o caso.

package atividades.src;

import java.util.Scanner;

public class Atividade26 {
    private static Scanner scanner = new Scanner(System.in);
 public static void main(String[] args) {
    System.out.println("Qual turno você estuda?");
    String turno = scanner.nextLine();

    cumprimentar(turno);
 }

 static void cumprimentar(String turno) {
    if(turno.toLowerCase().equals("m")) {
        System.out.println("Bom dia!!");
    }
    else if(turno.toLowerCase().equals("v")) {
        System.out.println("Boa tarde!!");
    }
    else if(turno.toLowerCase().equals("n")) {
        System.out.println("Boa noite!!");
    } else {
        System.out.println("Entrada inválida...");
    }
 }
}
