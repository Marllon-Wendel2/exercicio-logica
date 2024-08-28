//Faça um Programa que converta metros para centímetros.
import rl from "../user.js";

rl.question('Qual quantos metros quer converter?', (metro) => {
    const centrimetros = parseFloat(metro) * 100
    console.log(`Os ${metro}m são ${centrimetros}cm.`)
    rl.close()
})