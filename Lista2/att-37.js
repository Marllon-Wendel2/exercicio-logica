// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime.
// As perguntas são:
//     "Telefonou para a vítima?"
//     "Esteve no local do crime?"
//     "Mora perto da vítima?"
//     "Devia para a vítima?"
//     "Já trabalhou com a vítima?"

// O programa deve no final emitir uma classificação sobre a participação
// da pessoa no crime.

// Se a pessoa responder positivamente a 2 questões ela deve ser classificada
// como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
// Caso contrário, ele será classificado como "Inocente".
import cli from "../cli.js"

function ehSuspeito(qtd) {
    let message;
    if(qtd === 0) {
        console.log("Você é inocente!")
    }
    if(qtd <= 2 && qtd > 0) {
        console.log("Você é suspeito!")
    }
    if(qtd < 5 && qtd > 2) {
        console.log("Você é cumplicide!")
    }
    if(qtd === 5) {
        console.log("Você é o assassino!")
    }
    cli.close()
}

cli.question("Telefonou para a vítima? ", (resposta1) => {
    let sins = 0;
    if(resposta1 === "sim" || resposta1 === "s") {
        sins++
    }
    cli.question("Esteve no local do crime? ", (resposta2) => {
        if(resposta2 === "sim" || resposta2 === "s") {
            sins++
        }
        cli.question("Mora perto da vítima? ", (resposta3) => {
            if(resposta3 === "sim" || resposta3 === "s") {
                sins++
            }
            cli.question("Devia para a vítima? ", (resposta4) => {
                if(resposta4 === "sim" || resposta4 === "s") {
                    sins++
                }
                cli.question("Já trabalhou com a vítima? ", (resposta5) => {
                    if(resposta5 === "sim" || resposta5 === "s") {
                        sins++
                    }
                    ehSuspeito(sins)
                })
            })
        })
    })
})