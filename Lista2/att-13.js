// Faça um programa para uma loja de tintas.
// O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

// Considere que a cobertura da tinta é de 1 litro para cada 3 metros
// quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.

// Informe ao usuário a quantidades de latas de tinta
// a serem compradas e o preço total.
import cli from "../cli.js";

function calculaQuantidade(metroQuadro) {
    const tintaEmLitros =  metroQuadro / 3
    console.log(tintaEmLitros)
    const latasNecessarias =  Math.ceil(tintaEmLitros / 18)
    const valorAPagar =  latasNecessarias * 18

    console.log(`Você precisara de ${latasNecessarias} latas de tinta, que custará no total o valor de R$${valorAPagar}`)
    cli.close()
}

cli.question("Quantos metros quadrados deseja pintar? ", (metros) => calculaQuantidade(metros))