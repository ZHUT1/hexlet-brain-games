import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  } return num > 1;
};

const generateQuestionAnswerPair = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const data = cons(question, correctAnswer);
  return data;
};
export default () => gameEngine(condition, generateQuestionAnswerPair);
