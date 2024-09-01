//Faça um Programa que converta metros para centímetros.
import cli from "../cli.js";

cli.question('Qual quantos metros quer converter?', (metro) => {
    const centrimetros = parseFloat(metro) * 100
    console.log(`Os ${metro}m são ${centrimetros}cm.`)
    cli.close()
})