// O cardápio de uma lanchonete é o seguinte:
//     Especificação   Código  Preço
//     Cachorro Quente 100     R$ 1,20
//     Bauru Simples   101     R$ 1,30
//     Bauru com ovo   102     R$ 1,50
//     Hambúrguer      103     R$ 1,20
//     Cheeseburguer   104     R$ 1,30
//     Refrigerante    105     R$ 1,00
// Faça um programa que leia o código dos itens pedidos e as quantidades
// desejadas.

// Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total
// geral do pedido.

// Considere que o cliente deve informar quando o pedido deve ser encerrado.

import cli from "../cli.js";

class Produto {
    nome;
    codigo;
    preco;
    quantidade;

    constructor(nome, codigo, preco, quantidade = 0) {
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
        this.quantidade = quantidade;
    }

}

const cachorroQuente = new Produto("Cachorro Quente", 100, 1.20);
const bauruSimples = new Produto("Bauru Simples", 101, 1.30);
const bauruComOvo = new Produto("Bauru com ovo", 102, 1.50);
const hamburger =  new Produto("Hambuger", 103, 1.20);
const cheeseburguer = new Produto("Cheeseburguer", 104, 1.30);
const refrigerante = new Produto("Refrigerante", 105, 1);

const todosOsProdutos = [cachorroQuente, bauruSimples, bauruComOvo, hamburger, cheeseburguer, refrigerante];


console.log(`Bem-vindo ao nosso restaurante! 
Oque deseja e a quantidade?.`);
exibeMenu()

cli.on('line', (res) => {
    const respostasSeparadas = res.split(', ')
    const pedido = Number(respostasSeparadas[0]);
    const quantidade =  Number(respostasSeparadas[1])

    switch(true) {
        case pedido === 100:
            adicionarProduto("Cachorro Quente", quantidade);
            verificaSeContinua();
            break;
        case pedido == 101:
            adicionarProduto("Bauru Simples", quantidade);
            verificaSeContinua();
            break;
        case pedido == 102:
            adicionarProduto("Bauru com ovo", quantidade);
            verificaSeContinua();
            break;
        case pedido == 103:
            adicionarProduto("Hambuger", quantidade);
            verificaSeContinua();
            break;
        case pedido == 104:
            adicionarProduto("Cheeseburguer", quantidade);
            verificaSeContinua();
            break;
        case pedido == 105:
            adicionarProduto("Refrigerante", quantidade);
            verificaSeContinua();
            break;
    }

})

async function adicionarProduto(nomeDoProduto, quantidadeAInserir) {
    if(quantidadeAInserir >= 0) {
        const produtoSelecionado = todosOsProdutos.filter(produto => produto.nome === nomeDoProduto);

        if(produtoSelecionado.length > 0) {
            produtoSelecionado[0].quantidade += quantidadeAInserir
            console.log("Produto inserido com sucesso!")
        } else {
            console.log("Produto não encontrado")
        }
    } else {
        console.log("Produto não inserido, informe a quantidade");
    }
}

function exibeMenu() {
    console.log(`   
        Especificação   Código  Preço
        Cachorro Quente 100     R$ 1,20
        Bauru Simples   101     R$ 1,30
        Bauru com ovo   102     R$ 1,50
        Hambúrguer      103     R$ 1,20
        Cheeseburguer   104     R$ 1,30
        Refrigerante    105     R$ 1,00`)
}


function verificaSeContinua() {
    cli.question("Deseja continuar comprando? ", (confirmacao) => {
        if(confirmacao.toLowerCase() === 'sim') {
            console.clear();
            console.log("Digite o codigo do produto que deseja comprar: ")
            exibeMenu();
        } else {
            console.clear();
            console.log("Compra finalizada: ");
            const carrinho = todosOsProdutos.filter(produto => produto.quantidade > 0);
            carrinho.forEach(produto => console.log(`Você comprou ${produto.quantidade} ${produto.nome}, custando R$${(produto.quantidade * produto.preco).toFixed(2)}`));
            const totalAPagar = calculeTotal(carrinho);
            console.log(`Valor total da compra é de R$${totalAPagar.toFixed(2)}`);
            cli.close();
        }
    })
}

function calculeTotal(lista) {
    let total = 0;
    lista.forEach(produto => total += (produto.quantidade * produto.preco));
    return total;
}