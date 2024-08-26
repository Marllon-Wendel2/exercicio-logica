//23 - Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.

function calculaSalario(valorAula, aulasLecionadas) {
    const salarioBruto = valorAula * aulasLecionadas;

    if( salarioBruto < 1391) {
        const desconto = salarioBruto * 0.075;
        const salarioLiquito = salarioBruto - desconto;
        return salarioLiquito;
    }

    if( salarioBruto < 2571.29) {
        const desconto = salarioBruto * 0.09;
        const salarioLiquito = salarioBruto - desconto;
        return salarioLiquito;
    }

    if( salarioBruto < 3856.94) {
        const desconto = salarioBruto * 0.12;
        const salarioLiquito = salarioBruto - desconto;
        return salarioLiquito;
    }

    if( salarioBruto > 3856.94) {
        const desconto = salarioBruto * 0.14;
        if(desconto > 877.63) {
            const salarioLiquito = salarioBruto - 877.63;
            return salarioLiquito;       
        }
        const salarioLiquito = salarioBruto - desconto;
        return salarioLiquito
    }
}

console.log(calculaSalario(50,108))


