import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Qual o valor limite do seu cartão? " );
        int limite = Integer.parseInt(scanner.nextLine());

        Carrinho carrinho = new Carrinho(limite);

        comprar(scanner, carrinho);
        
        scanner.close();
    }

    public static void comprar(Scanner scanner, Carrinho carrinho) {
        System.out.print("Qual o produto deseja comprar? ");
        String nomeProduto = scanner.nextLine();

        System.out.print("Qual o preço do produto? ");
        Double precoProduto = Double.parseDouble(scanner.nextLine());

        carrinho.adicionarProduto(nomeProduto.toUpperCase(), precoProduto);

        verificarFinalizar(scanner, carrinho);
    }

    public static void verificarFinalizar(Scanner scanner, Carrinho carrinho) {
        System.out.print("Para continuar comprando digite 1, para finalizar digite 0: ");
        int respose = Integer.parseInt(scanner.nextLine());

        switch (respose) {
            case 1:
                comprar(scanner, carrinho);
                break;
            
            case 0:
                System.out.println(carrinho);
                break;
            default:
                scanner.close();
                break;
        }
    }
}
