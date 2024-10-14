import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const cliPromise = readline.createInterface({input, output});

export default cliPromise