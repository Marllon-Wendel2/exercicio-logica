// Uma academia deseja fazer um senso entre seus clientes para descobrir o mais
// alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um
// programa que pergunte a cada um dos clientes da academia seu código,
// sua altura e seu peso.

// O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero)
// no campo código.

// Ao encerrar o programa também deve ser informados os códigos e valores do
// clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média
// das alturas e dos pesos dos clientes.
import cli from "../cli.js";

let codigosAlunos = [];
let pesos = [];
let alturas = [];

function registraAluno(cod, peso, altura) {
    codigosAlunos.push(cod);
    pesos.push(peso);
    alturas.push(altura);
};

function perguntaAluno() {
    return new Promise((resolve) => {
        cli.question("Qual cod. do aluno, altura e peso? Exemplo: 123, 1.70, 65... ou digite 0 para encerrar. ", (resposta) => {
            if(resposta === "0"){
                console.clear();
                messagePeso(codigosAlunos, pesos);
                console.log(`\n*****************\n`);
                messageAltura(codigosAlunos, alturas)
                cli.close()
            } else {
                const respostaInString = resposta.split(", ");
                const respostaInNumber = respostaInString.map(Number);
                registraAluno(respostaInNumber[0], respostaInNumber[2], respostaInNumber[1]);
                perguntaAluno()
            }
        }
    )
    resolve()
    });
};

function criaMatriz(lista1, lista2) {
    return lista2.map((value, index) => [value, lista1[index]])
}

function ordenaMatriz(lista) {
    return lista.sort((a, b) => a[0] - b[0]);
}

function separaMatriz(matriz) {
    const lista1 = matriz.map(item => item[0]);
    const lista2 = matriz.map(item => item[1]);

    return [lista1, lista2]
}

function calculaMedia(lista) {
    let soma = 0;
    for(let index in lista) {
        soma += lista[index]
    }
    return soma/lista.length
}

function messagePeso(listaAlunos, listaPesos){
    const alunosEPeso = criaMatriz(listaAlunos, listaPesos);
    const alunosEPesoOrdenados =  ordenaMatriz(alunosEPeso);
    const [pesosOrdenados, alunosOrdenados] = separaMatriz(alunosEPesoOrdenados);
    const media = calculaMedia(listaPesos)

    console.log(`O(A) aluno(a) de codigo: ${alunosOrdenados[0]} é o mais magro com ${pesosOrdenados[0]}KG`);
    console.log(`O(A) aluno(a) de codigo: ${alunosOrdenados[alunosOrdenados.length - 1]} é o mais acima do peso com ${pesosOrdenados[alunosOrdenados.length - 1]}KG`);
    console.log(`A média de peso é de ${media}KG`)
}

function messageAltura(listaAlunos, listaAltura) {
    const alunoEAltura = criaMatriz(listaAlunos, listaAltura);
    const alunosEAlturaOrdenados = ordenaMatriz(alunoEAltura);
    const [alturaOrdenada, alunosOrdenados] = separaMatriz(alunosEAlturaOrdenados);
    const media = calculaMedia(listaAltura);

    console.log(`O(A) aluno(a) de codigo: ${alunosOrdenados[0]} é o mais baixo com ${alturaOrdenada[0]} metros.`);
    console.log(`O(A) aluno(a) de codigo: ${alunosOrdenados[alunosOrdenados.length - 1]} é o mais alto com ${alturaOrdenada[alturaOrdenada.length - 1]} metros.`);
    console.log(`A média de altura é de ${media.toFixed(2)} Metros.`)
}

perguntaAluno()