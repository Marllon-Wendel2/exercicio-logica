const arrayExemplo = [1, 1, 0, -1, -1];
const arrayExemplo2 = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    let positiveNumbers = 0;
    let zeros = 0;
    let negativesNumbers = 0;

    arr.forEach(element => {
        if(element === 0) {
            zeros++
        } else if(element > 0) {
            positiveNumbers++
        } else if(element < 0) {
            negativesNumbers++
        }
    });
    const result = calculateRatios(zeros, positiveNumbers, negativesNumbers, arr.length)
    result.forEach(ratio => console.log(ratio));
}

function calculateRatios(zeros, positiveNumbers, negativesNumbers, arrLegth) {
    const positiveRatio = positiveNumbers / arrLegth;
    const negativeRatio =  negativesNumbers /arrLegth;
    const zeroRatios = zeros/arrLegth
    

    const result = [positiveRatio.toFixed(6), negativeRatio.toFixed(6), zeroRatios.toFixed(6)];
    return result;
}

plusMinus(arrayExemplo);
plusMinus(arrayExemplo2);