#!/usr/bin/env node

import {
  welcome, ask, namequest, answerquest,
} from '..';

export default () => {
  console.log(welcome);
  console.log('What is the result of the expression?');
  const name = ask(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  for (let questnum = 1; questnum < 4; questnum += 1) {
    let correct = null;
    const firstnum = Math.floor(Math.random() * 10);
    const secondnum = Math.floor(Math.random() * 10);
    const randomopernum = Math.floor(Math.random() * (4 - 1)) + 1;
    switch (randomopernum) {
      case 1:
        correct = firstnum + secondnum;
        console.log(`Question: ${firstnum} + ${secondnum} `);
        break;
      case 2:
        correct = firstnum - secondnum;
        console.log(`Question: ${firstnum} - ${secondnum} `);
        break;
      case 3:
        correct = firstnum * secondnum;
        console.log(`Question: ${firstnum} * ${secondnum} `);
        break;
      default:
        break;
    }
    const answer = ask(answerquest);
    if (Number(answer) !== correct) {
      return (`"${answer}" is wrong answer ;(. Correct answer was "${correct}".
        Let's try again, ${name}`);
    } console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
