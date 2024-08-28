//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
import rl from "../user.js";

rl.question("Qual o valor raio em cm?", (raio) => {
    const pi = 3.14;
    const area = pi * (raio * raio);
    console.log(`O valor da área é de ${area.toFixed(1)}cm`);
    rl.close();
})