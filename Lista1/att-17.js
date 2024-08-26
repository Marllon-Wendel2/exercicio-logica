//17 - Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas. Fórmula: C = (5 * ( F-32) / 9)

function converteParaC(temperaturaF) {
    const tF = temperaturaF.toString()
    let temperaturaC = temperaturaF - 32;
    temperaturaC = temperaturaC * 5;
    temperaturaC = temperaturaC / 9;
    const temperaturaConvertida = temperaturaC.toFixed(1);
    return {
        Fahrenheit: tF,
        Celsius: temperaturaConvertida
    }
}

console.log(converteParaC(75))