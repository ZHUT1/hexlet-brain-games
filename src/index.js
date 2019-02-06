import readlineSync from 'readline-sync';

const welcome = '\nWelcome to the Brain Games!';
const namequest = '\nMay i have your name?';
const askname = (question) => {
  const name = readlineSync.question(question);
  return name;
};
export const bg = () => {
  console.log(welcome);
  return `Hello!, ${askname(namequest)}`;
};

const isEven = num => num % 2 === 0;

export const evengame = () => {
  console.log(welcome);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = askname(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  for (let questnum = 1; questnum < 4; questnum += 1) {
    const randnum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randnum}`);
    const correct = isEven(randnum) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer:');
    if (answer !== correct) {
      return (`"${answer}" is wrong answer ;(. Correct answer was "${correct}".
      Let's try again, ${name}`);
    } console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
export const braincalc = () => {
  console.log(welcome);
  console.log('What is the result of the expression?');
  const name = askname(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  for (let questnum = 1; questnum < 4; questnum += 1) {
    let correct = null;
    const firstnum = Math.floor(Math.random() * 100);
    const secondnum = Math.floor(Math.random() * 100);
    const oper = Math.floor(Math.random() * 2);
    if (oper === 0) {
      correct = firstnum + secondnum;
      console.log(`Question: ${firstnum} + ${secondnum}`);
    } else if (oper === 1) {
      correct = firstnum - secondnum;
      console.log(`Question: ${firstnum} - ${secondnum}`);
    } else {
      correct = firstnum * secondnum;
      console.log(`Question: ${firstnum} * ${secondnum}`);
    }
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) !== correct) {
      return (`"${answer}" is wrong answer ;(. Correct answer was "${correct}".
      Let's try again, ${name}`);
    } console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
