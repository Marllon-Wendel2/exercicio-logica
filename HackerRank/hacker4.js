function compareTriplets(a, b) {
    let aSum = 0;
    let bSum = 0;

    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            aSum++
        } else if(a[i] == b[i]) {
            
        } else {
            bSum++
        }
    }
    return [aSum, bSum];
};

const alice = [5, 6, 7];
const bob = [3, 6, 10];

console.log(compareTriplets(alice, bob))