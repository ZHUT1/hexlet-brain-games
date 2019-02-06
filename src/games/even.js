#!/usr/bin/env node

import {
  welcome, ask, namequest, answerquest,
} from '..';

export default () => {
  console.log(welcome);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = ask(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  const isEven = num => num % 2 === 0;
  for (let questnum = 1; questnum < 4; questnum += 1) {
    const randnum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randnum}`);
    const correct = isEven(randnum) ? 'yes' : 'no';
    const answer = ask(answerquest);
    if (answer !== correct) {
      return (`"${answer}" is wrong answer ;(. Correct answer was "${correct}".
      Let's try again, ${name}`);
    } console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
