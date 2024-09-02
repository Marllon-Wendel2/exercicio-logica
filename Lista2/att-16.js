// Faça um Programa que peça dois números e imprima o maior deles.
import cli from "../cli.js";

function comparaNumber(a, b) {
    if(a === b) {
        console.log("Os números são iguais");
        cli.close()
        return;
    }
    const result =  a > b ? `O ${a} é maior` : `O ${b} é maior`;
    console.log(result);
    cli.close();
}

cli.question("Informe um número: ", (number1) => [
    cli.question("Informe o segundo número: ", (number2) => comparaNumber(number1, number2))
])