import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log("Welcome to the Brain Games!");
};

export const getName = () => readlineSync.question('May I have your name?: ');

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

export const evenGame = (userName) => {
    console.log(`Hello, ${userName}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const num = getRandomInt(100);
        console.log(`Question: ${num}`);
        const usersAnswer = readlineSync.question('Your answer: ');

        const checkingOne = (num % 2 === 0) && (usersAnswer === 'yes');
        const checkingTwo = (num % 2 !== 0) && (usersAnswer === 'no');

        if (checkingOne || checkingTwo) {
            console.log('Correct!');
        } else if (!checkingOne) {
            console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
            return
        } else if (!checkingTwo) {
            console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
            return
        }
    }

    console.log(`Congratulations, ${userName}!`);
};