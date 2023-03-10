import readlineSync from 'readline-sync';
import { welcome, getName, greeting } from './welcome.js';

const runGame = (rules, round) => {
  welcome();
  const name = getName();
  greeting(name);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [expr, correctAnswer] = round();
    console.log(`Question: ${expr} `);
    const input = readlineSync.question('Your answer: ');

    if (correctAnswer !== input) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
