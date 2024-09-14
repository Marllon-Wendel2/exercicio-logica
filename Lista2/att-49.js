// Faça um programa que peça dois números, base e expoente,
// calcule e mostre o primeiro número elevado ao segundo número.
// Não utilize a função de potência da linguagem.
import cli from "../cli.js";

function calculeExpoente(base, expoente) {
    let result = base;
    console.log(base)
    for(let repetir= 0; repetir < expoente; repetir++) {
        result = result * base
    }
console.log(result)
cli.close()
}

    cli.question("Qual a base? ", (base) => {
        cli.question("Qual o expoente? ", (expoente) => {
            const baseNumber = Number(base)
            const expoenteNumber = Number(expoente)
            calculeExpoente(baseNumber, expoenteNumber)
        })
    })