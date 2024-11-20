function aVeryBigSum(ar) {
    let sum = 0;
    for (const element of ar) {
        sum += element;
    }
    return sum;
}

const arrayTest =  [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSum(arrayTest))