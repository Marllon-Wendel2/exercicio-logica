// Faça um programa que lê as duas notas parciais obtidas por um aluno numa
// disciplina ao longo de um semestre, e calcule a sua média.
// A atribuição de conceitos obedece à tabela abaixo:
//     Média de Aproveitamento  Conceito
//     Entre 9.0 e 10.0         A
//     Entre 7.5 e 9.0          B
//     Entre 6.0 e 7.5          C
//     Entre 4.0 e 6.0          D
//     Entre 4.0 e zero         E
// O algoritmo deve mostrar na tela as notas, a média,
// o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C
// ou “REPROVADO” se o conceito for D ou E.
import cli from "../cli.js"

let conceitoNota= ""
function calculaMedia(nota1, nota2) {
    const somaNota = Number(nota1) + Number(nota2)
    const mediaNota = (somaNota / 2)
    verificaConceito(mediaNota.toFixed(1))
}

function verificaConceito(media) {
    if(media > 0 && media <= 4){
        conceitoNota = "E"
        console.log(`A nota foi ${conceitoNota} o aluro irá reprovar`)
        cli.close()
        return
    }
    if(media > 4 && media <= 6){
        conceitoNota = "D"
        console.log(`A nota foi ${conceitoNota} o aluro irá reprovar`)
        cli.close()
        return
    }
    if(media > 6 && media <= 7.5){
        conceitoNota = "C"
        console.log(`A nota foi ${conceitoNota} o aluro irá ser aprovado`)
        cli.close()
        return
    }
    if(media > 7.5 && media <= 9){
        conceitoNota = "B"
        console.log(`A nota foi ${conceitoNota} o aluro irá ser aprovado`)
        cli.close()
        return
    }
    if(media > 9 && media <= 10){
        conceitoNota = "A"
        console.log(`A nota foi ${conceitoNota} o aluro irá ser aprovado`)
        cli.close()
        return
    }
}

cli.question("Qual foi a primeira nota? ", (nota1) => {
    cli.question("Qual foi a segunda nota? ", (nota2) => calculaMedia(nota1, nota2))
})