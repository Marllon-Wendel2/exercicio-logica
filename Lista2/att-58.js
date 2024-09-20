// Faça um programa que peça para n pessoas a sua idade, ao final o programa
// deverá verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e
// maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a
// média calculada.
import cli from "../cli.js";

let somaDasIdd = 0;

async function somandoIdd(idade) {
    somaDasIdd += idade;
}

function perguntaIdd() {
    return new Promise((resolve) => {
        cli.question("Qual sua idade? ", (idade) => {
            const idd = Number(idade);
            somandoIdd(idd);
            resolve()
        });
    });
};

async function interacao(numeroDePessoas) {
    for(let pessoa = 0; pessoa < numeroDePessoas; pessoa++) {
        await perguntaIdd()
    }
    return somaDasIdd/numeroDePessoas;
}

cli.question("Quantas pessoas tem na turma? ", async (quantidade) => {
    const numeroDePessoas = Number(quantidade);
    const media = await interacao(numeroDePessoas);

    if(media > 0 && media < 26) {
        console.log(`A média da idade da turma é ${media.toFixed()}, por tanto é uma tumar jovem!`);
    };
    if(media > 25 && media < 61) {
        console.log(`A média da idade turma é de ${media.toFixed()}, por tanto é uma turma adulta!`);
    };
    if(media > 60) {
        console.log(`A média da idade turma é de ${media.toFixed()}, por tanto é uma turma idosa!`)
    }
    cli.close()
})