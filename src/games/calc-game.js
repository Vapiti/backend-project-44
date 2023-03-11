import getRandomNum from '../randomNum.js';
import runGame from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = a + b;
  } else if (operator === '-') {
    result = a - b;
  } else if (operator === '*') {
    result = a * b;
  }
  return result;
};

const questionCorrectAnswer = () => {
  const a = getRandomNum(0, 50);
  const b = getRandomNum(0, 50);
  const operator = operators[getRandomNum(0, operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calc(a, b, operator).toString();
  return [question, correctAnswer];
};

const start = () => {
  runGame(rules, questionCorrectAnswer);
};

export default start;
