// //12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
// Tabela de Código de Condições de Pagamento

// 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

// 2 - À Vista no cartão de crédito, recebe 10% de desconto

// 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

// 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

function pagamentoAvista(preco) {
    const desconto = preco * 0.15;
    const valorAPagar = preco - desconto;
    const mensagemPagamento = `Compra paga à vista`
    return  {
        valorAPagar: valorAPagar,
        message: mensagemPagamento
    }
}

function pagamentoCard(preco, parcelas) {

    if(parcelas <= 1) {
        const desconto = preco * 0.10;
        const valorAPagar = preco - desconto;
        const mensagemPagamento = `Compra parcelada em ${parcelas}x sem juros`
        return  {
            valorAPagar: valorAPagar,
            message: mensagemPagamento
        }
    }

    if(parcelas == 2) {
        const mensagemPagamento = `Compra parcelada em ${parcelas}x sem juros`
        return {
            valorAPagar: preco,
            message: mensagemPagamento
        }
    }

    if(parcelas >= 3) {
        const mensagemPagamento = `Compra parcelada em ${parcelas}x com juros`
        const juros = preco * 0.1;
        const valorAPagar = preco + juros;
        return  {
            valorAPagar: valorAPagar,
            message: mensagemPagamento
        }
    }
}

const produtoValor = 100

//a vista
console.log(pagamentoAvista(produtoValor))

//a vista cartao
console.log(pagamentoCard(produtoValor, 1))

//a parcelado 2x cartao
console.log(pagamentoCard(produtoValor, 2))

//a parcelado 3x cartao
console.log(pagamentoCard(produtoValor, 3))

//a parcelado 4x cartao
console.log(pagamentoCard(produtoValor, 4))