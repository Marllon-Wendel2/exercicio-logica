function birthdayCakeCandles(candles) {
    let sumCandles = 0;
    const tallest = tallestCandles(candles);

    candles.forEach(candle => {
        if(candle === tallest) {
            sumCandles++
        }
    });

    console.log(sumCandles)
}

function tallestCandles(candles) {
    candles.sort((a,b) => b - a);
    return candles[0]
}


birthdayCakeCandles([3, 2, 1, 3])