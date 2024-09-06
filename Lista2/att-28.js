// Faça um Programa que peça os 3 lados de um triângulo.
// O programa deverá informar se os valores podem ser um triângulo.
// Indique, caso os lados formem um triângulo, se o mesmo é:
//     equilátero, isósceles ou escaleno.

// Dicas:
//     Três lados formam um triângulo quando a soma de
//         quaisquer dois lados for maior que o terceiro;
//     Triângulo Equilátero: três lados iguais;
//     Triângulo Isósceles: quaisquer dois lados iguais;
//     Triângulo Escaleno: três lados diferentes;
import cli from "../cli.js"

function verificaPossibilidade(triangulo) {
    if(triangulo[0] + triangulo[1] < triangulo[2]){
        console.log("Esse triangulo não é possivel.")
        return false
    }
    if(triangulo[0] + triangulo[2] < triangulo[1]){
        console.log("Esse triangulo não é possivel.")
        return false
    }
    if(triangulo[2] + triangulo[1] < triangulo[0]){
        console.log("Esse triangulo não é possivel.")
        return false
    }
    return true
}

function verificaTipoTriagulo(triangulo) {
    const existe = verificaPossibilidade(triangulo)
    if(existe) {    
        if(triangulo[0] == triangulo[1] && triangulo[1] == triangulo[2]){
            console.log("Esse triangulo é um Equilátero.")
        }
        if(triangulo[0] === triangulo[1] && triangulo[0] !== triangulo[2]){
            console.log("Esse triangulo é um Isósceles.")
        }
        if(triangulo[0] !== triangulo[1] && triangulo[0] === triangulo[2]){
            console.log("Esse triangulo é um Isósceles.")
        }
        if(triangulo[1] === triangulo[2] && triangulo[2] !== triangulo[0]){
            console.log("Esse triangulo é um Isósceles.")
        }
        if(triangulo[0] !== triangulo[1] && triangulo[0] !== triangulo[2] && triangulo[1] !== triangulo[2]){
            console.log("Esse triangulo é um Escaleno.")
        }}
        cli.close()
    }

cli.question("Quais são os três lados desse triangulo? ", (lados) => {
    const stringArrays = lados.split(", ")
    const numberArrys = stringArrays.map(Number)
    console.log(numberArrys)
    verificaTipoTriagulo(numberArrys)
})