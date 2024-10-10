import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const cliPromise = readline.creaInterFace({input, output});

export default cliPromise