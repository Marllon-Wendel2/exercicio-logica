// Faça um Programa que leia um número inteiro maior que 0 e menor que 1000 e
// imprima a quantidade de centenas, dezenas e unidades do mesmo.

// Observando os termos no plural a colocação do "e", da vírgula entre outros.

// Exemplo:
// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidade
import cli from "../cli.js"

function divideNumber(numeroInString) {
    const numeroNumber =  Number(numeroInString)

    if(numeroNumber >= 0 && numeroNumber <= 1000) {
       const listaString = numeroInString.split("")
        if(listaString.length === 3){
            console.log(`${listaString[0] > 1 ? 'As centenas são no valor de' : 'A centena é no valor de'} ${listaString[0]}, ${listaString[1] > 1 ? 'As dezenas são no valor de' : 'A dezena é no valor de'} ${listaString[1]}, ${listaString[2] > 1 ? 'As unidades são no valor de' : 'A unidade é no valor de'} ${listaString[2]}`)
        }
        if(listaString.length === 2){
            console.log(`${listaString[0] > 1 ? 'As dezenas são no valor de' : 'A dezena é no valor de'} ${listaString[0]}, ${listaString[1] > 1 ? 'As unidades são no valor de' : 'A unidade é no valor de'} ${listaString[1]}`)
        }
        if(listaString.length === 1){
            console.log(`${listaString[0] > 1 ? 'As unidades são no valor de' : 'A unidade é no valor de'} ${listaString[0]}`)
        } 
    } else {
        console.log("Número precisa ser entre 0 e 1000!")
    }
    cli.close()
}

cli.question("Informe um valor de 0 a 100: ", (numero) => divideNumber(numero))