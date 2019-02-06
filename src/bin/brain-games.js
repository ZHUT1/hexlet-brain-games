#!/usr/bin/env node

import readlineSync from '..';
const askname = readlineSync.question('May i have your name?');
console.log('Welcome to the Brain Games!');
console.log(askname)
console.log(`Hello, ${askname}!`);