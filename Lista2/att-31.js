// Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma
// é uma data válida.
import cli from "../cli.js";

function dataEhValdia(data) {
const dataConvertida = converteData(data)
const [dia, mes, ano] = dataConvertida
const meses30D = [4,6,9,11]

if(dia > 28 && mes === 2) {
    console.log("Dias ultrapassa o número de dias no mês de fevereiro!")
    cli.close()
    return
}

if(dia > 30 && meses30D.includes(mes)) {
    console.log("A data ultrapassa o número de dias do mês!")
    cli.close()
    return
}

if(dia < 1 || mes < 1) {
    console.log("Dias e Meses não podem ser zero ou negativo!!")
    cli.close()
    return
}

if(dia > 31 || mes > 12) {
    console.log("A data é invalida")
}

if(dia < 30 && mes < 12) {
    console.log("A data é valida")
}

cli.close()
}

function converteData (data) {
    const arrString = data.split("/")
    const arrNumber = arrString.map(Number)
    return arrNumber;
}

cli.question("Informe uma data no formato (dia##/mes##/ano####): ", (data) => dataEhValdia(data))