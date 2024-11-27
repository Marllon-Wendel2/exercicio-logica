const arrExemple = [7,5,3,1,9]

function miniMaxSum(arr) {
    const somaMax = maxSum(arr);
    const somaMin = mimSum(arr);

    console.log(`${somaMin} ${somaMax}`)
}

function maxSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 1; i <= 4; i++) {
        sum+=arr[arr.length-i]
    }
    return sum;
    
}

function mimSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < 4; i++) {
        sum+=arr[i]
    }
    return sum;
    
}

miniMaxSum(arrExemple);