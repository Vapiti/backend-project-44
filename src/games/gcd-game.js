import getRandomNum from '../randomNum.js';
import runGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let divisor;
  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const questionCorrectAnswer = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b).toString();
  return [question, correctAnswer];
};

const start = () => {
  runGame(rules, questionCorrectAnswer);
};

export default start;
