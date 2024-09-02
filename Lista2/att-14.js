// Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados
// e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00
// ou em galões de 3,6 litros, que custam R$ 25,00.

// Informe ao usuário as quantidades de tinta a serem compradas
// e os respectivos preços em 3 situações:

//     comprar apenas latas de 18 litros;
//     comprar apenas galões de 3,6 litros;
//     misturar latas e galões, de forma que o preço seja o menor.
//         Acrescente 10% de folga e sempre arredonde os valores para cima,
//         isto é, considere latas cheias.
import cli from "../cli.js";

function calculaValorPago(metros) {
    const converteNumber = Number(metros)
    const litrosDeTinta = Math.ceil(converteNumber / 6);
    const quantidadeDeLatas = Math.floor(litrosDeTinta / 18);
    const quantidadeDeGalao =  Math.ceil((litrosDeTinta - (quantidadeDeLatas * 18)) / 3.6);

    const valorDasLatas =  quantidadeDeLatas * 80;
    const valorDosGaloes = quantidadeDeGalao * 25;
    const valorTotal = valorDasLatas + valorDosGaloes;

    console.log(`Será necessário ${quantidadeDeLatas} latas e ${quantidadeDeGalao} galões de tinta. \nO valor das latas será de R$${valorDasLatas.toFixed(2)}.\nO Valor dos galões é de R$${valorDosGaloes.toFixed(2)}.\nO valor total a pagar é de R$${valorTotal}.`)
    cli.close()
 
}

cli.question("Quantos metros quadrados deseja pintar?", (metros) => calculaValorPago(metros))