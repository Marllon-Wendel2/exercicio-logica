//Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).
import cli from "../cli.js"
import converteParaC from "../Lista1/att-17.js"

cli.question("Informe qual a temperatura em F: ", (f) => converteParaC(f))