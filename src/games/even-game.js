import getRandomNum from '../randomNum.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  if (num % 2 !== 0) {
    return false;
  }

};

const questionCorrectAnswer = () => {
  const num = getRandomNum(1, 100);
  const question = `${num}`;
  const correctAnswer = checkEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const start = () => {
  runGame(rules, questionCorrectAnswer);
};

export default start;