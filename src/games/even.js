import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const generateQuestionAnswerPair = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const data = cons(question, correctAnswer);
  return data;
};

export default () => gameEngine(condition, generateQuestionAnswerPair);
