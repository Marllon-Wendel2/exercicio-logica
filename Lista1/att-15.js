//15 - Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.

function verifyVida(nome, nascimento) {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear()

    const anosDeVida = anosVividos(nascimento, anoAtual);
    const mesesDeVida = anosDeVida * 12;
    const diasDeVida =  mesesDeVida * 365;

    console.log(`${nome} nasceu em ${nascimento} e já viveu ${anosDeVida} anos, que são ${mesesDeVida} meses, que são ${diasDeVida} dias!!`)
    
}

function anosVividos(nascimento, anoAtual) {
    const anosDeVida =  anoAtual - nascimento;
    return anosDeVida
}

verifyVida("Vannely", 2000)