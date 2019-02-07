import {
  welcome, ask, namequest, answerquest,
} from '..';

const isEven = num => num % 2 === 0;
export default () => {
  console.log(welcome);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = ask(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  const congrats = `Congratulations, ${name}!`;
  const questionnumber = 3;
  for (let i = 0; i < questionnumber; i += 1) {
    const randomnumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomnumber}`);
    const correctanswer = isEven(randomnumber) ? 'yes' : 'no';
    const answer = ask(answerquest);
    if (answer !== correctanswer) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${correctanswer}".
      Let's try again, ${name}`;
    } console.log('Correct!');
  }
  return congrats;
};
