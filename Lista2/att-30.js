// Faça um Programa que peça um número correspondente a um determinado ano e em
// seguida informe se este ano é ou não bissexto.
import cli from "../cli.js"

function ehBissexto(ano) {
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        console.log(`O ano de ${ano} é bissexto!`)
    } else {
        console.log(`o ano de ${ano} não é bissexto!`)
    }
    cli.close()
}

cli.question("Vamos verificar se o ano é bissexto, digite qual vamos verificar: ", (ano) => {
    const anoNumber = Number(ano);
    ehBissexto(anoNumber)
})