
import { cons, getRandom, gameEngine } from '..';


const condition = 'What is the result of the expression?';
const questionAnswerPair = () => {
  let correctAnswer;
  let expressAsk;
  let data = null;
  const firstnum = getRandom(1, 100);
  const secondnum = getRandom(1, 100);
  const randomOpernum = getRandom(1, 4);
  switch (randomOpernum) {
    case 1:
      correctAnswer = String(firstnum + secondnum);
      expressAsk = `Question: ${firstnum} + ${secondnum}`;
      data = cons(expressAsk, correctAnswer);
      return data;
    case 2:
      correctAnswer = String(firstnum - secondnum);
      expressAsk = `Question: ${firstnum} - ${secondnum}`;
      data = cons(expressAsk, correctAnswer);
      return data;
    case 3:
      correctAnswer = String(firstnum * secondnum);
      expressAsk = `Question: ${firstnum} * ${secondnum}`;
      data = cons(expressAsk, correctAnswer);
      return data;
    default:
      return data;
  }
};

export default () => gameEngine(condition, questionAnswerPair);
