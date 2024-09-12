// Faça um programa que peça uma nota, entre zero e dez.
// Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o
// usuário informe um valor válido.
import cli from "../cli.js";

function calculaMedia(arrNotas) {
    let totalNotas = 0;
    arrNotas.forEach((nota) => totalNotas += nota)
    const media =  totalNotas / arrNotas.length
    return (media.toFixed(2))
}

// calculaMedia([7,5,3])

let notasAluno = []

function perguntarNota() {

    if(notasAluno.length < 3) {
        cli.question("Qual a nota do aluno? ", (nota) => {
            const notaNumber = Number(nota)
            if(isNaN(notaNumber)) {
                console.log("Informe um número.")
                cli.close()
                return
            }
            if(notaNumber < 0 || notaNumber > 10) {
                console.log("A nota precisa ser entre 0 e 10.")
                cli.close()
                return
            }
            notasAluno.push(notaNumber)
            perguntarNota()
        })
} else {
    console.log(notasAluno)
    console.log(calculaMedia(notasAluno))
    cli.close()
}
}
perguntarNota()