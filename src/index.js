import readlineSync from 'readline-sync';

export const cons = (x, y) => f => f(x, y);
export const car = pair => pair(x => x);
export const cdr = pair => pair((x, y) => y);
export const welcome = () => console.log('\nWelcome to the Brain Games!');
export const gameCondition = condition => console.log(`${condition}`);
export const sayHello = name => console.log(`Hello, ${name}!`);

export const bg = () => {
  console.log('\nWelcome to the Brain Games!');
  return `Hello!, ${readlineSync('May i have your name?')}`;
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameEngine = (condition, questionAnswerPair) => {
  const askName = () => readlineSync.question('\nMay i have your name?');
  welcome();
  gameCondition(condition);
  const name = askName();
  sayHello(name);
  if (condition === '') {
    return console.log();
  }
  const questionNumber = 3;
  for (let i = 0; i < questionNumber; i += 1) {
    const pair = questionAnswerPair();
    const question = car(pair);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(pair);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};
