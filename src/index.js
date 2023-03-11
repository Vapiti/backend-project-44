import readlineSync from 'readline-sync';

const runGame = (rules, round) => {
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name?: ');
  const name = getName();
  const greeting = (name) => console.log(`Hello, ${name}!`);
  greeting(name);
  console.log(rules);
  const x = 3;

  for (let i = 0; i < x; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question} `);
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
