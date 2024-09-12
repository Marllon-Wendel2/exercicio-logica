// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma
// taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes
// com uma taxa de crescimento de 1.5%.

// Faça um programa que calcule e escreva o número de anos necessários para que a
// população do país A ultrapasse ou iguale a população do país B, mantidas as
// taxas de crescimento.

// DESAFIO DUPLO:
// Altere o programa anterior permitindo ao usuário informar as populações e as
// taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
import cli from "../cli.js";

let cidade1 = 0;
let cidade2 = 0;
let contador = 0;
let taxaCrescimento1= 0;
let taxaCrescimento2= 0;

function cresceCidadeAno(cidade1, cidade2, taxaCrescimento1, taxaCrescimento2) {
    

 const novaCidade1 = cidade1 + (cidade1 * taxaCrescimento1)
 const novaCidade2 = cidade2 + (cidade2 * taxaCrescimento2)

    return [novaCidade1, novaCidade2]
}

function contaAnos(cidade1, cidade2, taxaCrescimento1, taxaCrescimento2) {
    while( cidade1 <= cidade2) {

    const result =  cresceCidadeAno(cidade1, cidade2, taxaCrescimento1, taxaCrescimento2);
    contador++
    cidade1 = result[0];
    cidade2 = result[1];
    }
}

cli.question("Qual a população da cidade A? ", (cidadeA) => {
    cli.question("Qual a taxa de crescimento dela? ", (taxaCrescimentoA) => {
        cli.question("Qual a população da cidade B? ", (cidadeB) => {
            cli.question("Qual a taxa de crescimento dela? ", (taxaCrescimentoB) => {
                cidade1 = Number(cidadeA);
                cidade2 = Number(cidadeB);
                taxaCrescimento1 = Number(taxaCrescimentoA);
                taxaCrescimento2 = Number(taxaCrescimentoB);
                contaAnos(cidade1, cidade2, taxaCrescimento1, taxaCrescimento2)
                
                console.log(cidade1 > cidade2 ? `A cidade A demorou ${contador} anos para ter mais habitantes` : `A cidade A demorou ${contador} anos para ter a mesma quantidade de habitantes.`);

                cli.close()
            })
        })
    })
})

