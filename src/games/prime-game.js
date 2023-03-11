import getRandomNum from '../randomNum.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let x = 2; x <= Math.sqrt(num); x += 1) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
};

const questionCorrectAnswer = () => {
  const num = getRandomNum(1, 50);
  const question = `${num}`;
  const correctAnswer = checkPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const start = () => {
  runGame(rules, questionCorrectAnswer);
};

export default start;
