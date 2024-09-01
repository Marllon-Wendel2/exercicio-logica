import { createInterface } from "readline";

const cli = createInterface({
    input: process.stdin,
    output: process.stdout
});

export default cli;