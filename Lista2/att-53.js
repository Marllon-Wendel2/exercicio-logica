// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo
// usuário. Ex.: 5!=5.4.3.2.1=120
import cli from "../cli.js"

function fatorial(numero) {
    let result = numero;
    for(numero; numero > 1; numero--){
        result = result * (numero - 1)

    }
    console.log(result);
    cli.close()
}

cli.question("Informe um número: ", (numero)=> {
    const numeroN =  Number(numero);
    fatorial(numeroN)
})