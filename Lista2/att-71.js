// Faça um programa que leia uma quantidade indeterminada de números positivos e
// conte quantos deles estão nos seguintes intervalos:
// [0-25], [26-50], [51-75] e [76-100].

// A entrada de dados deverá terminar quando for lido um número negativo.
import cli from "../cli.js";

console.log("Informe os números: ");

let lista0A25 = [];
let lista26A50 = [];
let lista51A75 = [];
let lista76A100 = [];

cli.on('line', (res) => {
    const resNumber = parseInt(res);

    switch (true) {
        case resNumber >= 0 && resNumber < 26:
            addLista(lista0A25, resNumber);
            break;

        case resNumber >= 26 && resNumber < 50:
            addLista(lista26A50, resNumber);
            break;

        case resNumber >= 50 && resNumber < 75:
            addLista(lista51A75, resNumber);
            break;

        case resNumber >= 75 && resNumber <=100:
            addLista(lista76A100, resNumber);
            break;

        case resNumber < 0:
            console.log("O número foi negativo, programa encerrado");
            console.log(lista0A25, lista26A50, lista51A75, lista76A100);
            cli.close();
            

        case isNaN(resNumber):
            console.log("Informe números: ");
    
        default:
            
            break;
    }
})

function addLista(list, value) {
    list.push(value);
}