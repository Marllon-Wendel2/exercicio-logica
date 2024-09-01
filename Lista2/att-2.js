//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
import cli from "../cli.js";

function exibirNumber(number) {
    console.log(`O número informado foi ${number}`)
    cli.close()
}

cli.question("Por favor informe um número: ", (number) => exibirNumber(number))