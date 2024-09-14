// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,...
// Faça um programa capaz de gerar a série até o n−ésimo termo.
import cli from "../cli.js";

function fibonacci(repeticao) {
    let a = 1;
    let b = 1;
    let c = 0;
    let result = [];

    for(let contador = 2; contador <= repeticao; contador++) {
        if(result.length === 0) {
            result.push(a)
            result.push(b)
        } else {           
            c = a + b
            a = b
            b = c
            result.push(c)
        }
    }
    console.log(result)
    cli.close()
}

cli.question("Quantos números da sequescia de Fivbonacci deseja gerar? ", (numero) => {
    const numeroNumber = Number(numero);
    fibonacci(numeroNumber)
})