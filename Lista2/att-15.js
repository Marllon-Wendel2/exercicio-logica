// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a
// velocidade de um link de Internet (em Mbps), calcule e informe o tempo
// aproximado de download do arquivo usando este link (em minutos)
import cli from "../cli.js"

function calculaTempo(tamanho, velocidade) {
    const tamanhoNumber = Number(tamanho);
    const velocidadeNumber = Number(velocidade);

    const tempoEmSegundos = tamanhoNumber / (velocidadeNumber/8) ;

    console.log(tempoEmSegundos.toFixed())

    const tempoEmMinutos = Math.ceil(tempoEmSegundos / 60);
    const segundosRestantes =  tempoEmSegundos % 60;
    console.log(`Irá demorar ${tempoEmMinutos} minutos e ${segundosRestantes} segundos.`)

    
    cli.close()
}

cli.question("Qual o tamanho do arquivo que deseja realizar o dowload? ", (tamanho) => {
    cli.question("Qual a velocidade da sua internet em Mgps? ", (velocidade) => calculaTempo(tamanho, velocidade))
})
