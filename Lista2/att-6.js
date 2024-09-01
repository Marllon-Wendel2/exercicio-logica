//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
import cli from "../cli.js";

cli.question("Qual o valor raio em cm?", (raio) => {
    const pi = 3.14;
    const area = pi * (raio * raio);
    console.log(`O valor da área é de ${area.toFixed(1)}cm`);
    cli.close();
})