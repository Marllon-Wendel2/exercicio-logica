function diagonalDifference(arr) {
    const diagonal1 = calculatePrimaryDiagonal(arr);
    const diagonal2 = calculateSecundaryDiagonal(arr);

    return Math.abs(diagonal1 - diagonal2);
}

function calculatePrimaryDiagonal(matriz) {
    let sum = 0;
    for(let i = 0; i < matriz.length; i++) {
        sum += matriz[i][i]
    }
    return sum;
}

function calculateSecundaryDiagonal(matriz) {
    let sum = 0;
    let position2 = 0; 
    for(let i = matriz.length - 1; i >= 0; i--) {
        
        sum += matriz[position2][i]
        position2++
    }
    return sum;
}

const matrizTest = [[11,2,4], [4,5,6], [10,8,-12]]
console.log(diagonalDifference(matrizTest))