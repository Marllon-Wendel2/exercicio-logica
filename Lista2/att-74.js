// Desenvolver um programa para verificar a nota do aluno em uma prova com 10
// questões, o programa deve perguntar ao aluno a resposta de cada questão e ao
// final comparar com o gabarito da prova e assim calcular o total de acertos e a
// nota (atribuir 1 ponto por resposta certa).

// Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno
// vai utilizar o sistema.

// Após todos os alunos terem respondido informar:
//     Maior e Menor Acerto;
//     Total de Alunos que utilizaram o sistema;
//     A Média das Notas da Turma.
//     Gabarito da Prova:
//         01 - A
//         02 - B
//         03 - C
//         04 - D
//         05 - E
//         06 - E
//         07 - D
//         08 - C
//         09 - B
//         10 - A

// Após concluir isto você poderia incrementar o programa permitindo que o
// professor digite o gabarito da prova antes dos alunos usarem o programa.
import cliPromise from "../cliPromise.js"

class Aluno {
    id;
    nota;
    constructor(id, nota = 0) {
        this.id = id;
        this.nota = nota;
    }
}

const testAnswerKey = ["A", "B", "C", "D", "E", "E", "D", "C", "B", "A"];
const alunos =  [];

let alunoContador = 1;

async function mensagemInicial(){
    const answer = await cliPromise.question("Deseja criar um novo aluno?: ")
    interacao(answer);
}

async function interacao(answer) {
    if(answer.toLowerCase() === 'sim') {
        const alunoNovo =  new Aluno(alunoContador);
        const respostaDoAluno = await perguntaRespostas();
        const nota = await calculaNota(respostaDoAluno);
        alunoNovo.nota = nota;
        alunos.push(alunoNovo);
        console.clear();
        console.log(`O aluno ${alunoNovo.id} foi registrado com sucesso! Sua nota foi de ${alunoNovo.nota}`);
        await perguntaSeContinua();

    } else if(answer.toLowerCase() === 'nao') {
        console.log('Programa encerrado!')
        cliPromise.close();
    } else {
        console.log("Insira um valor valido. (sim ou nao)");
        mensagemInicial();
    }
}

async function perguntaRespostas() {
    const respostaDoAluno = await cliPromise.question("Informe o gaberito do aluno: ");
    const listaRespostaDoAluno = respostaDoAluno.toUpperCase().split(',');
    if(listaRespostaDoAluno.length > 10 || listaRespostaDoAluno.length < 10) {
        throw new Error("Numero de respostas invalido")
    } else {
        return listaRespostaDoAluno
    }
}

async function calculaNota(listaDeRespostas) {
    let nota = 0;
    for(let resposta = 0; resposta < testAnswerKey.length; resposta++) {
        if(listaDeRespostas[resposta] === testAnswerKey[resposta]) {
            nota++
        }
    }
    return nota;
}

async function perguntaSeContinua() {
    const continua = await cliPromise.question("Deseja inserir outro aluno? ");

    if(continua.toLowerCase() === 'sim') {
        alunoContador++;
        mensagemInicial();
    } else if(continua.toLowerCase() === 'nao') {
        exibeResumo();
        cliPromise.close();
    } else {
        console.log("Insira um valor valido. (sim ou nao)")
    }
}

async function exibeResumo() {
    const media = calculaMedia(alunos);
    const maiorNota = pegarMaiorNota(alunos);
    const menorNota = pegarMenorNota(alunos);

    console.log(`Foram registrados ${alunoContador} alunos;`);
    console.log(`A maior nota foi do aluno ${maiorNota.id} com ${maiorNota.nota} pontos!`);
    console.log(`A menor nota foi do aluno ${menorNota.id} com ${menorNota.nota} pontos!`);
}

function calculaMedia(lista) {
    let soma = 0;
    for(const aluno of alunos) {
        soma += aluno.nota;
    }

    return soma/ lista.length;
}

function pegarMaiorNota(lista) {
    lista.sort((a, b) => a.nota - b.nota);
    return lista[lista.length - 1];
}

function pegarMenorNota(lista) {
    lista.sort((a, b) => a.nota - b.nota);
    return lista[0];
}

mensagemInicial()
