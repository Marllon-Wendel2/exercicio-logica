//HACKRANK 1

function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(number => {
        sum += number;
    });
    return sum
}
const ar =[1,2,3,4,10,11];

console.log(simpleArraySum(ar));