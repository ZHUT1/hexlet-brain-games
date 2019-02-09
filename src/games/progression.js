import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const generateQuestionAnswerPair = () => {
  const getHiddenElementPosition = getRandom(0, 10);
  const getFirstNum = getRandom(0, 100);
  const getProgressionStep = getRandom(1, 100);
  const currentNumber = getFirstNum;
  let question = '';
  const progressionStep = getProgressionStep;
  const HiddenElementPosition = getHiddenElementPosition;
  const correctAnswer = String(currentNumber + (progressionStep * HiddenElementPosition));
  for (let i = 0; i < progressionLength; i += 1) {
    if (HiddenElementPosition === i) {
      question += '.. ';
    } else {
      question += `${currentNumber + progressionStep * i} `;
    }
  }
  const data = cons(question.trim(), correctAnswer);
  return data;
};
export default () => gameEngine(condition, generateQuestionAnswerPair);
