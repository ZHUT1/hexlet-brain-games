import { cons, gameEngine, getRandom } from '..';

const condition = 'What number is missing in the progression?';

const generateQuestionAnswerPair = () => {
  const lineLength = 10;
  const pickNumber = getRandom(0, 10);
  const firstNum = getRandom(0, 100);
  const adder = getRandom(0, 100);
  let question = '';
  let correctAnswer;
  let num = firstNum;
  for (let i = 0; i < lineLength; i += 1) {
    if (pickNumber === i) {
      question += '.. ';
      correctAnswer = String(num);
      num += adder;
    } else {
      question += `${num} `;
      num += adder;
    }
  }
  const data = cons(question, correctAnswer);
  return data;
};
export default () => gameEngine(condition, generateQuestionAnswerPair);
