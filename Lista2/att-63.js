// O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e
// agora possui uma loja de conveniências.

// Faça um programa que implemente uma caixa registradora rudimentar.

// O programa deverá receber um número desconhecido de valores referentes aos
// preços das mercadorias.

// Um valor zero deve ser informado pelo operador para indicar o final da compra.

// O programa deve então mostrar o total da compra e perguntar o valor em dinheiro
// que o cliente forneceu, para então calcular e mostrar o valor do troco.

// Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a
// próxima compra.

// A saída deve ser conforme o exemplo abaixo:
//     Lojas Tabajara
//     Produto 1: R$ 2.20
//     Produto 2: R$ 5.80
//     Produto 3: R$ 0
//     Total: R$ 9.00
//     Dinheiro: R$ 20.00
//     Troco: R$ 11.00
import cli from "../cli.js";

let listaProdutos = [];
let listaPreco = [];

function registraProduto(produto, preco) {
    listaProdutos.push(produto);
    listaPreco.push(preco);
};

function caixa () {
        return new Promise((resolve) => {
            cli.question("Qual o produto e o valor? (Produto, valor) ", (respota) =>{
                const respostaString =  respota.split(", ");
                const preco = Number(respostaString[1])
                registraProduto(respostaString[0], preco)
                pergunta()
                resolve()
            } )
        })
}

async function compra(resolve) {
    if(resolve) {
        await caixa()
    } else {
        console.clear()
        console.log("Lojas tabajara: ");
        listaProdutos.forEach((produto, index) => {
            console.log(`Produto: ${produto}, Preço: R$${(listaPreco[index]).toFixed(2)}`);
        })
        const somaDosPrecos = listaPreco.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
        console.log(somaDosPrecos.toFixed(2));
        cli.close()
    }
}

function pergunta () {
    cli.question("Deseja comprar? ", (resposta) => {
    console.clear()
    if(resposta !== "sim" && resposta !== "nao") {
        console.log("Informe 'sim' ou 'nao' ")
        pergunta()
    }
    if(resposta ==="sim"){
        compra(true)
    };
    if(resposta === "nao") {
        compra(false)
    }
})
}

pergunta()