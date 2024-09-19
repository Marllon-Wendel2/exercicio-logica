// Numa eleição existem três candidatos.
// Faça um programa que peça o número total de eleitores.
// Peça para cada eleitor votar e ao final mostrar o número de votos
// de cada candidato.
import cli from "../cli.js";

let candidato1 = 0;

let candidato2 = 0;

let candidato3 = 0;

function eleicao(voto) {
    if(voto === "13") {
        candidato1++
    };
    if(voto === "20") {
        candidato2++
    };
    if(voto === "22") {
        candidato3++
    };
};

cli.question("Quantos eleitores total? ", async (eleitores) => {
    const totalEleitores = Number(eleitores);
    await votacao(totalEleitores);

    console.log(`
        O candidato 1 recebeu ${candidato1} votos,
        O candidato 2 recebeu ${candidato2} votos,
        O candidato 3 recebeu ${candidato3} votos`)
    cli.close()
});

function perguntaVoto() {
    return new Promise((resolve) => {
        cli.question("Qual seu voto? ", (voto) => {
            eleicao(voto);
            resolve();
        });
    });
}

async function votacao(totalEleitores) {
    for(let votacao = 0; votacao < totalEleitores; votacao++) {
        await perguntaVoto();
    };
}