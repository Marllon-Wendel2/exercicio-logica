//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirNumber(number) {
    console.log(`O número informado foi ${number}`)
    rl.close()
}

rl.question("Por favor informe um número: ", (number) => exibirNumber(number))