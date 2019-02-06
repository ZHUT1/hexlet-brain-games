import readlineSync from 'readline-sync';

export const welcome = 'Welcome to the Brain Games!';
export const namequest = 'May i have your name?';
export const askname = (question) => {
    console.log(welcome);
    const name = readlineSync.question(question);
    return `Hello! ${name}`;
};
