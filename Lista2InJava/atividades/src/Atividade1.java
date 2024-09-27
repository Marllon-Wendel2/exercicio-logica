package atividades.src;
import java.util.Scanner;

public class Atividade1 {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe um número: ");
        String reposta = scanner.nextLine();
        int numero =  Integer.parseInt(reposta);

        System.out.println("O número informado foi: " + numero);

        scanner.close();
    }
}
