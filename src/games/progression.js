import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const generateQuestionAnswerPair = () => {
  const choseProgressionElement = getRandom(0, 10);
  const firstNum = getRandom(0, 100);
  const progressionStep = getRandom(1, 100);
  let question = '';
  let correctAnswer;
  let num = firstNum;
  for (let i = 0; i < progressionLength; i += 1) {
    if (choseProgressionElement === i) {
      question += '.. ';
      correctAnswer = String(num + progressionStep * i);
      num += progressionStep;
    } else {
      question += `${num + progressionStep * i} `;
      num += progressionStep;
    }
  }
  const data = cons(question, correctAnswer);
  return data;
};
export default () => gameEngine(condition, generateQuestionAnswerPair);
