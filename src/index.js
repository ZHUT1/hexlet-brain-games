import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundCount = 3;

export default (condition, questionAnswerPair) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${condition}`);
  const name = readlineSync.question('\nMay i have your name?');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundCount; i += 1) {
    const pair = questionAnswerPair();
    const question = car(pair);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(pair);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
