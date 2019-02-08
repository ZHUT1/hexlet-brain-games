import { cons, gameEngine, getRandom } from '..';

const condition = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (firstnum, secondnum) => {
  let num1 = firstnum;
  let num2 = secondnum;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  } return num1;
};
const questionAnswerPair = () => {
  const firstnum = getRandom(1, 100);
  const secondnum = getRandom(1, 100);
  const question = `${firstnum}  ${secondnum}`;
  const correctAnswer = String(findGreatestDivisor(firstnum, secondnum));
  const data = cons(question, correctAnswer);
  return data;
};
export default () => gameEngine(condition, questionAnswerPair);
