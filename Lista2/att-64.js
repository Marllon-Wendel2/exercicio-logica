// O Departamento Estadual de Meteorologia lhe contratou para desenvolver um
// programa que leia as um conjunto indeterminado de temperaturas,
// e informe ao final a menor e a maior temperaturas informadas,
// bem como a média das temperaturas.
import cli from "../cli.js";

let temperaturas = [];

function listarTemperatura(temperatura) {
    temperaturas.push(temperatura);
};

function perguntaTemperatura() {
    return new Promise((resolve) => {
        cli.question("Qual é a temperatura da cidade? ", (temp) => {
            if(temp === "encerrar") {
                interacao(false)
                cli.close();
            } else {
                const tempoN =  Number(temp)
                listarTemperatura(tempoN);
                interacao(true);
                resolve();
            }
        })
    })
}

function interacao(status) {
    if(status) {
        perguntaTemperatura();
    } else {
        const maior = pegarMaior(temperaturas);
        const menor = pegaMenor(temperaturas);
        const media = calculaMedia2(temperaturas);

        console.log(`A maior temperatura é ${maior}, a menor temperatura ${menor}.`);
        console.log(`A temperatura média é de: ${media.toFixed()}.`)
    };
};

function pegaMenor(listaTemp) {
    ordenaLista(listaTemp);
    return listaTemp[0];
}

function pegarMaior(listaTemp) {
    ordenaLista(listaTemp);
    return listaTemp[listaTemp.length - 1]
}

function ordenaLista(lista) {
    return lista.sort((a ,b) => a- b);
}

function calculaMedia2(lista) {
    let soma = 0;
    for(let index in lista) {
        soma += lista[index]
    }
    return soma/lista.length;
}

perguntaTemperatura()