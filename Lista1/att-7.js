//7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

let a = true;
let b = true;
let c = false
let d = false;

function verifyBoolean(a,b) {
    if (typeof a !== "boolean" || typeof b !== "boolean") {
        return "Informe booleans"
    }
    if(a === b && a === true) {
        return "Ambos são verdadeiros"
    }
    if(a === b && a === false) {
        return "Ambos são falsos"
    }
    if(a !== b) {
        return "São bolleanos diferentes"
    }
}

console.log(verifyBoolean(a,b))
console.log(verifyBoolean(c,d))
console.log(verifyBoolean(b,c))