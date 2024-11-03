// Faça um programa que pergunte o preço de três produtos e informe qual produto
// você deve comprar, sabendo que a decisão é sempre pelo mais barato.
package atividades.src;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class Atividade25 {
    private static List<Produtos> produtos = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        var opcao = -1;


      
        while (opcao != 0) {
            System.out.format("""  
                MENU:    
                
                    1 - Adicionar um novo produto;
                    2 - Exibir produtos listados;
            
                    0 - Encerrar.
                        
                        """);

            opcao = scanner.nextInt();
            scanner.nextLine();
    
            switch (opcao) {
                case 1:
                    formProduto();
                    break;
            
    
                case 2:
                    showProdutos();
                    break;
    
                case 0:
                    System.out.println("Finalizando o sistema...");
                    break;
            }
        }
    }

    private static void formProduto(){
        System.out.println("Qual produto deseja inserir?");
        var nameProduto = scanner.nextLine();

        System.out.println("Qual o valor? ");
        Double precoProduto = scanner.nextDouble();
        scanner.nextLine();

        createProduto(nameProduto, precoProduto);
    }

    static void createProduto(String nome, Double preco) {
        Produtos novoProduto = new Produtos(nome, preco);
        try {
            produtos.add(novoProduto);
            System.out.println("Produto inserido com sucesso");
        } catch (Exception e) {
            System.out.println("Erro ao adicionar o produto: " + e.getMessage());
        }
    }

    static void showProdutos() {
        produtos.sort(Comparator.comparing(Produtos::getPreco));
        for(Produtos produto : produtos) {
            System.out.println(produto);
        }
    }
}
