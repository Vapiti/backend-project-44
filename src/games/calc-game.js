import getRandomNum from '../randomNum.js';
import runGame from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calc = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const questionCorrectAnswer = () => {
  const a = getRandomNum(0, 50);
  const b = getRandomNum(0, 50);
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calc(a, b, operator).toString();
  return [question, correctAnswer];
};

const start = () => {
  runGame(rules, questionCorrectAnswer);
};

export default start;
