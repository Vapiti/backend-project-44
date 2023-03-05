import { getRandomNum } from '../randomNum.js';

export const rules = 'What number is missing in the progression?';

export const getProg = (base, diff, count) => {
    const progArray = [];

    for (let i = 0; progArray.length < count; i += 1) {
        if (i === 0) {
            progArray.push(base)
        } else {
            progArray.push(progArray[i - 1] + diff)
        }
    }
    return progArray;
};

const getExpr = (array, index) => {
    let result = '';

    for (let i = 0; i < array.length; i += 1) {
        if (i > 0) {
            result += ' ';
        }
        if (i === index) {
            result += '..';
        } else {
            result += array[i].toString();
        }
    }

    return result;
};

export const questionCorrectAnswer = () => {
    const base = getRandomNum(1, 10);
    const diff = getRandomNum(1, 10);
    const count = getRandomNum(9, 10);
    const index = getRandomNum(0, count - 1);
    const arrayForGame = getProg(base, diff, count);
    const expr = getExpr(arrayForGame, index);
    const correctAnswer = arrayForGame[index].toString();
    return [expr, correctAnswer];
};