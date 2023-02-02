import { welcome, getName, greeting } from '../src/welcome.js';
import readlineSync from 'readline-sync';

export const runGame = (rules, round) => {
    welcome();
    const name = getName();
    greeting(name);
    console.log(rules);
    
    for (let i = 0; i < 3; i += 1) {
        const [expr, correctAnswer] = round();
        const input = readlineSync.question(`Question: ${expr} `);

        if (correctAnswer !== input) {
            console.log(`'${input}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        
        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};