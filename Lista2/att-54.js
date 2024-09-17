// Faça um programa que peça um número inteiro e determine se ele é ou não um
// número primo. Um número primo é aquele que é divisível somente por ele mesmo
// e por 1.

// Altere o programa de cálculo dos números primos, informando, caso o número não
// seja primo, por quais número ele é divisível.
import cli from "../cli.js";

function ehMultipo(numero, primosMenores) {
  const verificacao = primosMenores.map((divisor) => {
       return numero % divisor;
    })

    return verificacao.includes(0) ? false : true
}

function listaMultiplo(numero, primosMenores) {
    let multiplos = []
    const verificacao = primosMenores.map((divisor) => {
        return numero % divisor;
     })
 
     primosMenores.forEach((numero,index) => {
        if(verificacao[index] === 0) {
            multiplos.push(numero)
        }
    })
    return multiplos
}

function ehPrimo(numero) {
    let primosMenores = [2,3,5,7];
    let result =  true;

    result= primosMenores.includes(numero) ?  true : false
    if(!result) {
       result = ehMultipo(numero, primosMenores)
    }
    if(result) {
        return{result, message: "É primo", multiplos}
    } else {
        const multiplos = listaMultiplo(numero, primosMenores);
        return({result, message: "Não é primo", multiplos});
    }

}

cli.question("Informe um número e diremos se ele é primo: ", (numero) => {
    const numeroN = Number(numero);
   console.log(ehPrimo(numeroN));
    cli.close()
})