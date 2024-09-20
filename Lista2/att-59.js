// Faça um programa que calcule o número médio de alunos por turma.
// Para isto, peça a quantidade de turmas e a quantidade de
// alunos para cada turma.
// As turmas não podem ter mais de 40 alunos.
import cli from "../cli.js"

let qtdDeAlunosPorSala = []

async function somandoNotas(alunos) {
    const soma =  alunos.reduce((acumulador, aluno) => acumulador + aluno, 0);
    return soma / alunos.length;
};

function perguntaQtdTurma() {
    return new Promise((resolve) => {
        cli.question("Qual a quantidade de alunos? ", (qtd) => {
            const qtdAlunos = Number(qtd);
            qtdDeAlunosPorSala.push(qtdAlunos);
            resolve();
        });
    });
};

async function interacao(numeroDeTurmas) {
    for(let turma = 0; turma < numeroDeTurmas; turma++){
        await perguntaQtdTurma();
    };
};

cli.question("Possui quantas turmas? ", async (qtd) => {
    const numeroDeTurmas = Number(qtd);
    await interacao(numeroDeTurmas);
    const media = await somandoNotas(qtdDeAlunosPorSala);
    console.log(`A média de alunos por sala é: ${media.toFixed(2)}`);
    cli.close();
})