//Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.


function verificaExistencia(lado1, lado2, lado3) {
    
    if(lado1 + lado2 > lado3 && lado3 + lado2 > lado1 && lado1 + lado3 > lado2) {
        return {
            validated: true,
            message: "Lados validos"
        };
    } else {
        return {
            validated: false,
            message: "Lados invalidos"
        };
    }
}

function classificaTri(lado1, lado2, lado3) {

    if(lado1 == lado2 && lado2 && lado3) {
        return "O triângulo é equilatero"
    }

    if(lado1 == lado2 || lado1 == lado2 || lado2 == lado3) {
        return "O triângulo é isósceles"
    }

    if(lado1 !== lado2 || lado1 !== lado2 || lado2 !== lado3) {
        return "O triângulo é escaleno"
    }

    return "Passou erro"
}

function resolucao(lada1, lado2, lado3) {
    const valido = verificaExistencia(lada1, lado2, lado3);

    if(!valido.validated){ 
        return valido
    }
    const classificacao = classificaTri(lada1, lado2, lado3);

    return {...valido, classificacao}
}

//Invalido
console.log(resolucao(1,1,2))

//Equilatero - valido
console.log(resolucao(2,2,2))

//Isósceles - valido
console.log(resolucao(3,3,2))

//Escaleno - valido
console.log(resolucao(3,4,5))