// Faça um Programa que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.

// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou
// "Valor Inválido!", conforme o caso.
import cli from "../cli.js";

function confereTurno(turno) {
    if(turno !== "M" || turno !== "V" || turno !== "N" ){
        console.log("Informe valor valido")
    }
    if(turno === "M"){
        console.log("Bom dia!!");
    }
    if(turno === "V"){
        console.log("Boa tarde!!");
    }
    if(turno === "N"){
        console.log("Boa noite!!");
    }
    cli.close()
}

cli.question("Qual turno você estuda? (Informe com a inicial, M-matutino ou V-Vespertino ou N- Noturno) ", (turno) => {
    const turnoPadrao =  turno.toUpperCase()
    confereTurno(turnoPadrao)
})