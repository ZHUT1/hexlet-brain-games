#!/usr/bin/env node

import { ask, question } from '..';
const askname = ask.question(question);
console.log('Welcome to the Brain Games!');
console.log(askname)
console.log(`Hello, ${askname}!`);