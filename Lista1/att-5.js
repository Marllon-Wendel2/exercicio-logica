//5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

function calculaSalario(value) {
    const salarioMinimo = 1293.20
    const result = value / salarioMinimo
    return result.toFixed(2)
}

console.log(calculaSalario(3000))