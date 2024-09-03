//Faça um Programa que verifique se uma letra digitada é vogal ou consoante./

import cli from '../cli.js'
function ehVogal(letra) {
    if(letra.length > 2 ) {
        console.log("Informe somente uma letra")
        return
    }
    const vogal = ['a', 'e', 'i', 'o', 'u']

    const result = vogal.includes(letra.toLowerCase())
    if(result) {
        console.log("É uma vogal")
    } else {
        console.log("É uma consoante")
    }
    cli.close()
}

cli.question("Informe uma letra: ", (letra) => ehVogal(letra))