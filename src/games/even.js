import { cons, gameEngine, getRandom } from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const questionAnswerPair = () => {
  const randomNumber = getRandom(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const data = cons(randomNumber, correctAnswer);
  return data;
};

export default () => gameEngine(condition, questionAnswerPair);
