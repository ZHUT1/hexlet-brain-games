import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const generateQuestionAnswerPair = () => {
  const HiddenElementPosition = getRandom(0, progressionLength);
  const FirstNum = getRandom(0, 100);
  const progressionStep = getRandom(1, 100);
  let question = '';
  const correctAnswer = String(FirstNum + (progressionStep * HiddenElementPosition));
  for (let i = 0; i < progressionLength; i += 1) {
    if (HiddenElementPosition === i) {
      question += '.. ';
    } else {
      question += `${FirstNum + progressionStep * i} `;
    }
  }
  const data = cons(question.trim(), correctAnswer);
  return data;
};
export default () => gameEngine(condition, generateQuestionAnswerPair);
