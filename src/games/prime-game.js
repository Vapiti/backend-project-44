import getRandomNum from '../randomNum.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const checkPrime = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }

  for (let x = 2; x <= Math.sqrt(num); x += 1) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
};

export const questionCorrectAnswer = () => {
  const num = getRandomNum(1, 50);
  const expr = `${num}`;
  const correctAnswer = checkPrime(num) ? 'yes' : 'no';
  return [expr, correctAnswer];
};
