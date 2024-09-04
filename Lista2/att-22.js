//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
import cli from "../cli.js";

//escolher o produto mais barato recebendo uma array que contenha [nomeProduto, preco]
function produtoBarato(array1, array2, array3 ) {
    let menor = [];
    if(Number(array1[1]) < Number(array2[1]) && Number(array1[1]) < Number(array3[1])) {
        menor = array1;
    }
    if(Number(array2[1]) < Number(array1[1]) && Number(array2[1]) < Number(array3[1])) {
        menor = array2;
    }
    if(Number(array3[1]) < Number(array1[1]) && Number(array3[1]) < Number(array1[1])) {
        menor = array3;
    }

    if(menor === array1) {
        console.log(`O menor produto a se comprar ${array1[0]} e o valor é de R$${array1[1]}`);
    }
    if(menor === array2) {
        console.log(`O menor produto a se comprar ${array2[0]} e o valor é de R$${array2[1]}`);
    }
    if(menor === array3) {
        console.log(`O menor produto a se comprar ${array3[0]} e o valor é de R$${array3[1]}`);
    }
    cli.close();
}

cli.question("Qual produto que deseja comprar? (Nome do produto, preço): ", (produto1) => {
   const arrProduto1 =  produto1.split(', ');
   console.log(arrProduto1)
   cli.question("Qual produto que deseja comprar? (Nome do produto, preço): ", (produto2) => {
    const arrProduto2 =  produto2.split(', ');
    cli.question("Qual produto que deseja comprar? (Nome do produto, preço): ", (produto3) => {
        const arrProduto3 =  produto3.split(', ');
        produtoBarato(arrProduto1, arrProduto2, arrProduto3)
    })
   })
})