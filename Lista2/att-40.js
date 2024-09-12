// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha
// igual ao nome do usuário, mostrando uma mensagem de erro e voltando a
// pedir as informações.
import cli from "../cli.js"

function verifaSenha (nome, senha) {
    if(nome == senha) {
        console.log("A senha não pode ser igual ao nome.")
        return true;
    } else {
        return false
    }
}

cli.question("Qual nome do nome do usuario? ", (nome) => {
    perguntaSenha(nome)

})

 function perguntaSenha(nome) {
    cli.question("Qual a senha? ", (senha) => {
        const result = verifaSenha(nome, senha)
        if(result) {
            perguntaSenha(nome)
        } else {
            console.log("Cadastro realizado")
            cli.close()
        }
    })
 }