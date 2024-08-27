//24 - Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.

//calcula combustivel usado em uma viagem
function combustivelGasto(distancia, gastoPorKm = 12) {
    const combustivelNecessario = distancia / gastoPorKm
    return `Serão necessarios ${combustivelNecessario.toFixed(2)} litros de combustivel para realizar a viagem`
}

function calculaTempoViagem(distancia, velocidade) {
    const tempoDeViagem = distancia / velocidade
    const tempoEmMinutos = tempoDeViagem * 60
    const tempoEmhoras = Math.floor(tempoDeViagem)
    const minutosRestantes = tempoEmMinutos % 60;
    return `A viagem irá durar ${tempoEmhoras} hor${ tempoEmhoras > 1 ? 's' : ""} e ${minutosRestantes.toFixed(0)} min`
}

console.log(combustivelGasto(200))

console.log(calculaTempoViagem(100, 60))
console.log(calculaTempoViagem(300, 110))