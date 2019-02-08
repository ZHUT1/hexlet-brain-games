import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (condition, questionAnswerPair) => {
  const askName = () => readlineSync.question('\nMay i have your name?');
  console.log('\nWelcome to the Brain Games!');
  console.log(`${condition}`);
  const name = askName();
  console.log(`Hello, ${name}!`);
  if (condition === '') {
    return;
  }
  const questionNumber = 3;
  for (let i = 0; i < questionNumber; i += 1) {
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
