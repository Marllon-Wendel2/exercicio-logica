public class Produto {
    private String produto;
    private int preco;

    Produto(String produto, int preco) {
        this.produto = produto;
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Produto: " + produto + ", Preço: R$" + preco;
    }
}