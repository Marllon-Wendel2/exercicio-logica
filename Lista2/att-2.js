//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
import rl from "../user.js"

function exibirNumber(number) {
    console.log(`O número informado foi ${number}`)
    rl.close()
}

rl.question("Por favor informe um número: ", (number) => exibirNumber(number))