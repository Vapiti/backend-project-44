import { getRandomNum } from '../randomNum.js';

export const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
	let divisor;
	for (let i = 1; i <= a && i <= b; i++) {
		if (a % i === 0 && b % i === 0) {
			divisor = i;
		}
	}
	return divisor;
};


export const questionCorrectAnswer = () => {
	const a = getRandomNum(1, 100);
	const b = getRandomNum(1, 100);
	const expr = `${a} ${b}`;
	const correctAnswer = getGcd(a, b).toString();
	return [expr, correctAnswer];
};
