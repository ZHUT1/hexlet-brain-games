import readlineSync from 'readline-sync';

export const welcome = 'Welcome to the Brain Games!';
export const namequest = 'May i have your name?';
export const askname = (question) => {
  const name = readlineSync.question(question);
  return name;
};

const isEven = num => num % 2 === 0;

export const evengame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('\n');
  const name = askname(namequest);
  console.log(`Hello!, ${name}`);
  console.log('\n');
  const yes = 'yes';
  const no = 'no';
  for (let i = 0; i < 3; i += 1) {
    const x = Math.floor(Math.random() * 20);
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
