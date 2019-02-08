import { cons, getRandom, gameEngine } from '..';

const condition = 'What is the result of the expression?';
const generateQuestionAnswerPair = () => {
  let correctAnswer;
  let question;
  let data = null;
  const firstnum = getRandom(1, 100);
  const secondnum = getRandom(1, 100);
  const randomOperator = getRandom(1, 4);
  switch (randomOperator) {
    case 1:
      correctAnswer = String(firstnum + secondnum);
      question = `Question: ${firstnum} + ${secondnum}`;
      data = cons(question, correctAnswer);
      return data;
    case 2:
      correctAnswer = String(firstnum - secondnum);
      question = `Question: ${firstnum} - ${secondnum}`;
      data = cons(question, correctAnswer);
      return data;
    case 3:
      correctAnswer = String(firstnum * secondnum);
      question = `Question: ${firstnum} * ${secondnum}`;
      data = cons(question, correctAnswer);
      return data;
    default:
      return data;
  }
};

export default () => gameEngine(condition, generateQuestionAnswerPair);
