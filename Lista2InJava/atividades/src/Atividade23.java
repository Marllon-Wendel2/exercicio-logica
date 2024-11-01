// Faça um Programa que leia três números e mostre o maior deles

package atividades.src;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
// import java.util.stream.Collectors;
import java.util.Scanner;

public class Atividade23 {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);
        List<Double> numbers =  new ArrayList<>();

        System.out.println("Informe o primeiro número: ");
        Double number1 = scanner.nextDouble();
        numbers.add(number1);

        System.out.println("Informe o segundo número: ");
        Double number2 = scanner.nextDouble();
        numbers.add(number2);

        System.out.println("Informe o terceiro número: ");
        Double number3 = scanner.nextDouble();
        numbers.add(number3);
        
        Optional<Double> biggestNumber = verifyBiggest(numbers);
        System.out.println("O maior número é: " + biggestNumber);

        scanner.close();
    }

    static Optional<Double> verifyBiggest(List<Double> numbers) {
        return numbers.stream().max(Double::compareTo);
    }

    // static List<Double> verifyBiggest(List<Double> numbers) {
    //     List<Double> orderedNumbers = numbers.stream()
    //                                             .sorted()
    //                                             .collect(Collectors.toList());
    
    //     return orderedNumbers;
    // }
}
