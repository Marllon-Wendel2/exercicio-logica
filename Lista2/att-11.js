// Tendo como dados de entrada a altura de uma pessoa,
// construa um algoritmo que calcule seu peso ideal,
// usando a seguinte fórmula: (72.7*altura) - 58
//     Para mulheres: (62.1*h) - 44.7
import cli from "../cli.js";

function calculaPesoIdeal(altura, genero) {
    const alturaEmNumber = Number(altura);
    const generoPadrao =  genero.toLowerCase()

    if(generoPadrao === "masculino"){
        const result = (72.7 * alturaEmNumber) - 58
        console.log(`O seu peso ideal é ${result.toFixed(2)}`)
    }
    if(generoPadrao === "feminino") {
        const result = (62.1 * alturaEmNumber) - 44.7
        console.log(`O seu peso ideal é ${result.toFixed(2)}`)
    }
    cli.close()
}

cli.question("Qual sua altura em metros? ", (altura) => {
    cli.question("Qual seu genero? Masculino ou Feminino? ", (genero) => {
        calculaPesoIdeal(altura, genero)
    })
})