//9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição 

function IMC(peso, altura) {
    const passo1 = altura**2;
    const result = peso/passo1;
   result.toFixed(1);

   if(result < 18.5) {
    console.log("Abaixo do peso.");
   }
   if(result > 18.6 && result < 29.9) {
    console.log("Peso ideal");
   }
   if(result > 25 && result < 29.9) {
    console.log("Levemente acima do peso");
   }
   if(result > 30 && result < 34.9) {
    console.log("Obesidade grau 1");
   }
   if(result > 35 && result < 39.9) {
    console.log("Obesidade grau 2");
   }
   if(result > 40) {
    console.log("Obesidade grau 3")
   }
}

IMC(99, 1.70)