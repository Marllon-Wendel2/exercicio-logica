// Faça um Programa que leia um número e exiba o dia correspondente da semana.
// (1-Domingo, 2- Segunda, etc.),
// se digitar outro valor deve aparecer valor inválido.
import cli from "../cli.js"

function diaDaSemana(numero) {

    if(isNaN(numero)){
        console.log("Tipo inválido")
        cli.close()
    } else {
        if(numero > 7) {
            console.log("Informe um numero entre 1 e 7")
            cli.close()
            return
        }
        const semana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SABÁDO"];
        console.log(semana[numero -1]);
        cli.close()
    }
}

cli.question("Qual dia da semana deseja saber? Informe o número dele exemplo informe '1' para domingo.", (numero) => diaDaSemana(Number(numero)))