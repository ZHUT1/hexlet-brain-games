import readlineSync from 'readline-sync';

export const welcome = '\nWelcome to the Brain Games!';
export const namequest = '\nMay i have your name?';
export const ask = question => readlineSync.question(question);
export const answerquest = ('Your answer:');
export const bg = () => {
  console.log('\nWelcome to the Brain Games!');
  return `Hello!, ${readlineSync('May i have your name?')}`;
};
