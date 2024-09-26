// Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre
// acidentes de trânsito.

// Foram obtidos os seguintes dados:
//     Código da cidade;
//     Número de veículos de passeio (em 1999);
//     Número de acidentes de trânsito com vítimas (em 1999).

// Deseja-se saber:
//     Qual o maior e menor índice de acidentes de transito
//         e a que cidade pertence;
//     Qual a média de veículos nas cinco cidades juntas;
//     Qual a média de acidentes de trânsito nas cidades com menos de
//         2.000 veículos de passeio.

import cli from "../cli.js"

let listaCidades = [];
let qtdVeiculos = [];
let acidentesList = [];

function perguntas(contagem) {
    if(contagem <= 5) {
        console.clear()
        cli.question("Qual o codigo da cidade? ", (cod) => {
            listaCidades.push(cod)
            cli.question("Quantos veiculos domesticos essa cidade possui? ", (quantitade) => {
                const quantidadeInNumber =  Number(quantitade);
                qtdVeiculos.push(quantidadeInNumber);
                cli.question("Qual o número de acidentes de transito? ", (acidentes) => {
                    const acidentesInNumber =  Number(acidentes);
                    acidentesList.push(acidentesInNumber);
                    perguntas(contagem + 1);
                })
            })
        })
    } else {
        pegarMaiorIndice(listaCidades, acidentesList);
        pegarMenorIndice(listaCidades, acidentesList)
        const mediaAcidentes = calculaMedia(acidentesList);
        console.log(`A média de acidentes é de ${mediaAcidentes.toFixed(2)}`);
        cli.close()
    }
}

perguntas(1);

function criaMatrizOrdenada(lista1, lista2) {
    const matriz = lista2.map((value, index) => [value, lista1[index]]);
    return matriz.sort((a,b) => a[0] - b[0]);
}

function separaMatriz(matriz) {
    const lista1 = matriz.map(item => item[0]);
    const lista2 = matriz.map(item => item[1]);

    return [lista1, lista2]
}

function pegarMaiorIndice(listaCidades, listaAcidentes) {
    const acidentesPorCidade = criaMatrizOrdenada(listaCidades, listaAcidentes);
    const [acidentesOrdenados, codCidades] = separaMatriz(acidentesPorCidade);
    console.log( `A cidade de codigo: ${codCidades[codCidades.length - 1]} possui o maior indice de acidentes: ${acidentesOrdenados[acidentesOrdenados.length -1]}`)
}

function pegarMenorIndice(listaCidades, listaAcidentes) {
    const acidentesPorCidade = criaMatrizOrdenada(listaCidades, listaAcidentes);
    const [acidentesOrdenados, codCidades] = separaMatriz(acidentesPorCidade);
    console.log( `A cidade de codigo: ${codCidades[0]} possui o menor indice de acidentes: ${acidentesOrdenados[0]}`)
}

function calculaMedia(lista) {
    let soma = 0;
    for(let index in lista) {
        soma += lista[index];
    }

    return soma/lista.length;
}