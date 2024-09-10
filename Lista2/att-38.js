// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//     Álcool:
//         até 20 litros, desconto de 3% por litro
//         acima de 20 litros, desconto de 5% por litro
//     Gasolina:
//         até 20 litros, desconto de 4% por litro
//         acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos,
// o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina),
// calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do
// litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
import cli from "../cli.js";

function calculaDescontro(tipo, litros) {
    let desconto;
    let valorAPagar;
    let valorSemDesconto;
    if(tipo === "G") {
        valorSemDesconto = litros * 2.5;
        if(litros < 20) {
            desconto = valorSemDesconto * 0.03;
            valorAPagar = valorSemDesconto - desconto;
        }
        if(litros > 20) {
            desconto = valorSemDesconto * 0.05;
            valorAPagar = valorSemDesconto - desconto;
        }
    }

    if(tipo === "A") {
        valorSemDesconto = litros * 1.9;
        if(litros < 20) {
            desconto = valorSemDesconto * 0.04;
            valorAPagar = valorSemDesconto - desconto;
        }
        if(litros > 20) {
            desconto = valorSemDesconto * 0.06;
            valorAPagar = valorSemDesconto - desconto
        }
    }


    console.log(`O valor total do combustivel foi de R$${valorSemDesconto.toFixed(2)} após o desconto de ${desconto.toFixed(2)} será pago ${valorAPagar.toFixed(2)}`)
    cli.close()
}

cli.question("Qual combustivel abastecido G-gasolina ou A-alcool? ", (tipo) => {
    cli.question("Quantos litros? ", (litros) => {
        const litrosN = Number(litros)
        calculaDescontro(tipo, litrosN)
    })
})
