// Faça um programa que peça dois números, base e expoente,
// calcule e mostre o primeiro número elevado ao segundo número.
// Não utilize a função de potência da linguagem.

// Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o
// fatorial várias vezes e limitando o fatorial a números inteiros positivos e
// menores que 16.
import cli from "../cli.js";

function calculeExpoente(base, expoente) {
    if(Math.floor(expoente) !== expoente) {
        console.log("O expoente precisar ser um número inteiro.")
        fazPergunta()
        return
    }

    let result = base;
    for(let repetir= 1; repetir < expoente; repetir++) {
        result = result * base
    }
console.log(result)
cli.close()
}

function fazPergunta(){
    cli.question("Qual a base? ", (base) => {
        cli.question("Qual o expoente? ", (expoente) => {
            const baseNumber = Number(base)
            const expoenteNumber = Number(expoente)
            calculeExpoente(baseNumber, expoenteNumber)
        })
    })
}

fazPergunta()