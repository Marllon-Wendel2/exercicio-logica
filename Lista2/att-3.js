//Faça um Programa que peça dois números e imprima a soma.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somaNumeros(number1) {
    rl.question("Qual  o segundo número a sersomado?", (number2) => {
        const soma = Number(number1) + Number(number2);
        console.log(`A somo do ${number1} ao ${number2} é ${soma}`);
        rl.close()
    })
}

rl.question("Qual o primeiro número da soma?", (number1) => somaNumeros(number1))