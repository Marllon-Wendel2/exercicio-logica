// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.
// 11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

const notas = [6,8,7,1]
const aluno = "Ruan"

function mediasNotas(array) {
    let totalNotas = 0;
    array.forEach(nota => {
        totalNotas += nota
    });
   const media =  totalNotas/array.length
   return media.toFixed(1)
}

function verifyAproved(media) {
    const mediaMinima = 7
    return media >= mediaMinima ? true : false
}

function messageAluno(nome, notas) {
    const media = mediasNotas(notas)
    const result = verifyAproved(media)

    if(result) {
        return `O aluno ${nome} obteve a média de ${media} portanto aprovado`
    } else {
        return `O aluno ${nome} obteve a média de ${media} portanto reprovado`
    }
}

console.log(messageAluno(aluno,notas))