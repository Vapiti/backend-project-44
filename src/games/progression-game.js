import getRandomNum from '../randomNum.js';
import runGame from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (base, diff, count) => {
  const result = [];

  for (let i = 0; result.length < count; i += 1) {
    result.push(base + diff * i);
  }
  return result;
};

const getExpression = (array, index) => {
  const result = array.slice();

  result[index] = '..';

  return result.join(' ');
};

const questionCorrectAnswer = () => {
  const base = getRandomNum(1, 10);
  const diff = getRandomNum(1, 10);
  const count = getRandomNum(9, 10);
  const index = getRandomNum(0, count - 1);
  const progression = getProgression(base, diff, count);
  const question = getExpression(progression, index);
  const correctAnswer = progression[index].toString();
  return [question, correctAnswer];
};

const start = () => {
  runGame(rules, questionCorrectAnswer);
};

export default start;
