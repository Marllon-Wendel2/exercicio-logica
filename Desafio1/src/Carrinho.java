import java.util.ArrayList;
import java.util.List;

public class Carrinho {
    private List<String> produtos;
    private List<Double> precos;
    private double limite;

    public Carrinho(double limite) {
        this.produtos = new ArrayList<>();
        this.precos = new ArrayList<>();
        this.limite =  limite;
    }

    public void adicionarProduto(String produto, Double preco) {
        double totalAtual = this.precos.stream().mapToDouble(Double::doubleValue).sum();

        if(totalAtual + preco > this.limite) {
            System.out.println("Limite de compra excedido! Não foi possível inserir o produto");
        } else {
            this.produtos.add(produto);
            this.precos.add(preco);
            System.out.println(String.format("O produto %s foi inserido com sucesso", produto));
        }
    }

    public List<String> getProdutos() {
        return produtos;
    }

    public List<Double> getPrecos() {
        return precos;
    }

    public double getLimite() {
        return limite;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        final int[] index = {0};

        produtos.forEach(produto -> {
            sb.append(String.format("%s R$ %.2f\n", produto, precos.get(index[0])));
            index[0]++;
        });

        return sb.toString();
    }
}