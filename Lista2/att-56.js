// Faça um programa que peça para n pessoas a sua idade, ao final o programa
// deverá verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e
// maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a
// média calculada.
import cli from "../cli.js";

function calculaMedia(notas) {
    let somaNotas = 0;
    let media = 0;
    
    notas.forEach((nota) => {
        somaNotas += nota;
        media = somaNotas / notas.length;
    });

    return media;
};

let notasAlunos = [];
// let interacao = true;
function fazPergunta() {
    cli.question("Qual a nota do aluno? ", (numero) => {
        const numeroN = Number(numero);
        notasAlunos.push(numeroN);
        cli.question("Deseja inserir outra nota? Sim (s) ou Não (n) ", (resposta) => {
            if(resposta === "s") {
                fazPergunta()
            }
            if(resposta === "n") {
                console.log(`A média do aluno é: ${calculaMedia(notasAlunos).toFixed(2)}`);
                cli.close()
            }
        })
    })
};

fazPergunta()