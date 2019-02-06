import readlineSync from 'readline-sync';

export const welcome = '\nWelcome to the Brain Games!';
export const namequest = '\nMay i have your name?';
export const askname = (question) => {
  const name = readlineSync.question(question);
  return name;
};

const isEven = num => num % 2 === 0;

export const evengame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = askname(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  const yes = 'yes';
  const no = 'no';
  for (let i = 0; i < 3; i += 1) {
    const x = Math.floor(Math.random() * 100);
    console.log(`Question: ${x}`);
    let correct = null;
    if (isEven(x)) {
      correct = yes;
    } else {
      correct = no;
    }
    const answer = readlineSync.question('Your answer:');
    if (answer !== correct) {
      return (`${answer} is wrong answer ;(. Correct answer was ${correct}.
      Let's try again, ${name}`);
    } console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
export const braincalc = () => {
  console.log('What is the result of the expression?');
  const name = askname(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  for (let i = 0; i < 3; i += 1) {
    let correct = null;
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const oper = Math.floor(Math.random() * 2);
    if (oper === 0) {
      correct = x + y;
      console.log(`Question: ${x} + ${y}`);
    } else if (oper === 1) {
      correct = x - y;
      console.log(`Question: ${x} - ${y}`);
    } else {
      correct = x * y;
      console.log(`Question: ${x} * ${y}`);
    }
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) !== correct) {
      return (`${answer} is wrong answer ;(. Correct answer was ${correct}.
      Let's try again, ${name}`);
    } console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
