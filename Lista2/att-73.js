// Em uma eleição presidencial existem quatro candidatos.
// Os votos são informados por meio de código.
// Os códigos utilizados são:
//     1, 2, 3, 4  - Votos para os respectivos candidatos
//     (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
//     5 - Voto Nulo
//     6 - Voto em Branco

// Faça um programa que calcule e mostre:
//     O total de votos para cada candidato;
//     O total de votos nulos;
//     O total de votos em branco;
//     A percentagem de votos nulos sobre o total de votos;
//     A percentagem de votos em branco sobre o total de votos.

// Para finalizar o conjunto de votos tem-se o valor zero.

import cli from "../cli.js";
import { sleep } from "../sleep.js";

class Candidato {
    nome;
    codigo;
    qtaDeVotos;

    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
        this.qtaDeVotos = 0;
    }

    adicionaVoto() {
        this.qtaDeVotos += 1;
    }
}

exibeMensagemInicial();

const candidato1 = new Candidato('Felipe', 1);
const candidato2 = new Candidato('Paola', 2);
const candidato3 = new Candidato('Zé vaqueiro', 3);
const branco = new Candidato('Branco', 5);
const nulo =  new Candidato('Nulo', 6);



cli.on('line', async (res) => {
    const voto =  Number(res);


    const listOfCanditatos =  [candidato1, candidato2, candidato3, branco, nulo];

    if(isNaN(voto)) {
        console.log("Informe um número!")
        await sleep(3000);
        console.clear();
        exibeMensagemInicial()
    } else if(voto === 0) {
        let somaDosVotos = 0;
        listOfCanditatos.forEach(candidato => {
            console.log(`O candidato(a) ${candidato.nome} recebeu ${candidato.qtaDeVotos} votos.`);
            somaDosVotos += candidato.qtaDeVotos;
        });

        console.log(`A soma dos votos foram ${somaDosVotos}.`);
        cli.close()
    } else {
        const candidatoEncontrado = listOfCanditatos.find(candidato => candidato.codigo === voto);
        if(candidatoEncontrado) {
            candidatoEncontrado.adicionaVoto();
            console.log(`O candidato ${candidatoEncontrado.nome} recebeu mais um voto!`)
            
        } else {
            console.log('Candidato não encontrado.');
            await sleep(3000);
            console.clear();
            exibeMensagemInicial()
        }
    }
})

function exibeMensagemInicial() {
    console.log("Qual seu voto? (digite zero para encerrar as votações)")
}