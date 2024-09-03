// Faça um programa para a leitura de duas notas parciais de um aluno.
// O programa deve calcular a média alcançada por aluno e apresentar:
//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.
import cli from "../cli.js"

function calculaMedia(nota1, nota2) {
    const media = (Number(nota1) + Number(nota2)) / 2

    if(media < 7) {
        console.log(`Sua nota foi ${media}, esta reprovado `)
    } else if( media < 10 && media >= 7) {
        console.log(`Sua nota foi ${media}, esta aprovado `)
    } else if(media == 10) {
        console.log(`Sua nota foi ${media}, parabéns, aprovado com Distinção `)
    }
    cli.close()
}

cli.question("Informe a primeira nota: ", (nota1) => {
    cli.question("Informe a segunda nota: ", (nota2) => {
        if(nota1 >10 || nota2 > 10) {
            console.log("Informe notas de 0 a 10.")
        }
        calculaMedia(nota1, nota2)

    })
})