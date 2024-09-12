// Faça um programa que leia e valide as seguintes informações:
//     Nome: maior que 3 caracteres;
//     Idade: entre 0 e 150;
//     Salário: maior que zero;
//     Sexo: 'f' ou 'm';
//     Estado Civil: 's', 'c', 'v', 'd';
import cli from "../cli.js";


function verifyNome(nome) {
    if(nome.length < 3) {
        console.log("O nome precisar ter 3 ou mais caracteres.")
        cli.close()
    } else {
        return true;
    }
}

function verifyIdd(idd) {
    if(idd < 0 || idd > 150) {
        console.log("A idade precisa ser entre 0 até 150")
        cli.close()
    } else {
        return true;
    }
}

function verifySalario(salario) {
    if(salario <= 0) {
        console.log("O salario precisa ser maior que 0")
        cli.close()
    } else {
        return true;
    }
}

function verifySexo(genero) {
    if(genero !== "m" && genero !== "f") {
        console.log("Informe o genero com a inicial: m ou f")
        cli.close()
    } else { 
        return true;
    }
}

function verifyEstadoCivil(estado) {
    const estadosCivil = ['s', 'c', 'v', 'd']
    if(!estadosCivil.includes(estado)) {
        console.log("Informe o seu estado civil com a inicial: s, c, v, d")
        cli.close()
    } else {
        return true;
    }
}

cli.question("Qual se nome? ", (nome) => {
    if(verifyNome(nome)){        
        cli.question("Qual sua idade? ", (idade) => {
            if(verifyIdd(Number(idade))) {
                cli.question("Qual seu salario? ", (salario) => {
                    if(verifySalario(salario)) {
                        cli.question("Qual o seu genero? Informe as iniciais m ou f: ", (genero) =>{
                            console.log(genero)
                            if(verifySexo(genero)) {
                                cli.question('Qual seu estado civil? ', (estadoC) => {
                                    if(verifyEstadoCivil(estadoC)) {
                                        const result = {nome, idade, salario, genero, estadoC}
                                        console.log(result)
                                        cli.close()
                                    }
                                })
                            }
                    })
                    }
                })
            }
        })
    }
})