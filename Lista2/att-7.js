//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
import rl from "../user.js";

rl.question("Qual valor dos lados em cm?", (lado) => {
    const area = lado * lado;
    console.log(`O valor da área é de ${area}cm e o dobro é ${area * 2}cm`)
    rl.close()
})