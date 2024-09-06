// Faça um programa que calcule as raízes de uma equação do segundo grau,
// na forma ax² + bx + c.

// O programa deverá pedir os valores de a, b e c e fazer as consistências,
// informando ao usuário nas seguintes situações:

//     Se o usuário informar o valor de A igual a zero, a equação não é do segundo
//         grau e o programa não deve fazer pedir os demais valores,
//         sendo encerrado;
//     Se o delta calculado for negativo, a equação não possui raízes reais.
//         Informe ao usuário e encerre o programa;
//     Se o delta calculado for igual a zero a equação possui apenas uma raiz
//         real; informe-a ao usuário;
//     Se o delta for positivo, a equação possui duas raiz reais;
//         informe-as ao usuário;
import cli from "../cli.js";

function resolveEquecao(arrValor) {
    let a = arrValor[0];
    let b = arrValor[1];
    let c = arrValor[2];
    let x;

    const delta = (b * b) - (4 * (a * c));
    console.log(Math.sqrt(delta))
    const x1= ((-(b))+(Math.sqrt(delta))) / (2 * a)
    const x2= ((-(b))-(Math.sqrt(delta))) / (2 * a)

    console.log(`Os valore de x1 é ${x1.toFixed(2)} do x2 é ${x2.toFixed(2)}!`)
    cli.close()
}

cli.question("Qual os valores da equação: a, b, c. ", (valores) => {
    const stringArrays = valores.split(", ");
    const numberArrys = stringArrays.map(Number);

    resolveEquecao(numberArrys)
})