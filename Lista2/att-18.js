// Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
import cli from "../cli.js"

function verifyGenero(genero) {
    const generoConvertido = genero.toUpperCase()

    if(generoConvertido !== "M" && generoConvertido !== "F") {
        console.log("Informe o genero somente com 'M' ou 'F'.")
    }
    if(generoConvertido === "M") {
        console.log("O seu genero é masculino.")
    }
    if(generoConvertido === "F") {
        console.log("O seu genero é feminino.")
    }

    cli.close()
}

cli.question("Qual seu genero Masculino ou Feminino? (Informe M ou F) ", (genero) => verifyGenero(genero));