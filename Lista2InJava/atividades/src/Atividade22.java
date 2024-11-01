// Faça um programa para a leitura de duas notas parciais de um aluno.
// O programa deve calcular a média alcançada por aluno e apresentar:
//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

package atividades.src;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Atividade22 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Double> notes = new ArrayList<>();

        System.out.println("Qual a primeira nota?");
        Double note1 = scanner.nextDouble();
        notes.add(note1);
        
        System.out.println("Qual a segunda nota?");
        Double note2 = scanner.nextDouble();
        notes.add(note2);

        Double media = media(notes);
        boolean aproved = isAproved(media);

        if(aproved && media == 10) {
            System.out.println("Aluno aprovado com distinção!!");
        } else if(aproved) {
            System.out.println("Aluno aprovado.");
        } else {
            System.out.println("Aluno reprovado.");
        }
        System.out.println(media);
        scanner.close();
    }

    static Double media (List<Double> list) {
        Double soma = 0.0;
        for(Double note :  list) {
            soma += note;
        }
        return soma/ list.size();
    }

    static Boolean isAproved(Double media) {
        return media >= 7 ? true:false;
    }
}
