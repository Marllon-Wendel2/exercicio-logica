import cli from "../cli.js";

const alunos = [];
const totalConjuntos = 10;

function encontrarAltosBaixos(alunos) {
    let maisAlto = alunos[0];
    let maisBaixo = alunos[0];

    for (let i = 1; i < alunos.length; i++) {
        if (alunos[i].altura > maisAlto.altura) {
            maisAlto = alunos[i];
        }
        if (alunos[i].altura < maisBaixo.altura) {
            maisBaixo = alunos[i];
        }
    }

    return { maisAlto, maisBaixo };
}

function perguntarAluno(contagem) {
    if (contagem <= totalConjuntos) {
        cli.question(`Informe o número e a altura do aluno ${contagem} (ex: '1, 1.70'): `, (answer) => {
            const [numero, altura] = answer.split(", ").map(Number);

            if (!isNaN(numero) && !isNaN(altura)) {
                alunos.push({ numero, altura });
                perguntarAluno(contagem + 1);
            } else {
                console.log("Por favor, insira valores válidos.");
                perguntarAluno(contagem);
            }
        });
    } else {
        const { maisAlto, maisBaixo } = encontrarAltosBaixos(alunos);

        console.log(`O aluno mais alto é o número ${maisAlto.numero} com ${maisAlto.altura} cm.`);
        console.log(`O aluno mais baixo é o número ${maisBaixo.numero} com ${maisBaixo.altura} cm.`);
        cli.close();
    }
}

perguntarAluno(1);