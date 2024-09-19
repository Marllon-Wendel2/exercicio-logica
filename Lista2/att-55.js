// Faça um programa que calcule o mostre a média aritmética de N notas.
import cli from "../cli.js"

function calculaMedia(notas) {
    let somaNotas = 0;
    let media = 0;
    
    notas.forEach((nota) => {
        somaNotas += nota;
        media = somaNotas / notas.length;
    });

    return media;
}

cli.question("Informe as notas? ", (notas) => {
    const listaNotasString = notas.split(",");
    const listaNotasNumero = listaNotasString.map(Number);
    
    const media = calculaMedia(listaNotasNumero)
    
    console.log(`A média é: ${media}`)
    cli.close()
})