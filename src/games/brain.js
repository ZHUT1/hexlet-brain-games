import readlineSync from 'readline-sync';

export default () => {
  const askName = () => readlineSync.question('\nMay i have your name?');
  console.log('\nWelcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
};
