function timeConversion(s) {
    if(s.includes("PM")){
        const test = s.split("PM");
        return convertPM(test[0]);
    }
    if(s.includes("AM")) {
        const test = s.split("AM");
        return convertAM(test[0]);
    }

}

function convertPM(s) {
    const times = s.split(":")
    const timesNumber = times.map(Number);
    timesNumber[0] += 12;
    if(timesNumber[0] === 24) {
        timesNumber[0] = 12
    }
    return(`${timesNumber[0].toString().padStart(2, "0")}:${timesNumber[1].toString().padStart(2, "0")}:${timesNumber[2].toString().padStart(2, "0")}`);
}

function convertAM(s) {
    const times = s.split(":")
    const timesNumber = times.map(Number);

    if(timesNumber[0] === 12) {
        timesNumber[0] = 0
    }
    console.log(timesNumber[0])
    return(`${timesNumber[0].toString().padStart(2, "0")}:${timesNumber[1].toString().padStart(2, "0")}:${timesNumber[2].toString().padStart(2, "0")}`);
}

const s = "12:45:54PM"

console.log(timeConversion(s));